"use client";

import { useEffect, useMemo, useRef } from "react";
import { useTrendingVideos } from "@/modules/useVideos";
import { useChannelsByIds } from "@/modules/useChannels";
import { VideoCard, VideoCardSkeleton } from "@/components/VideoCard";
import { ErrorState } from "@/components/ErrorState";
import { getBestThumbnail } from "@/lib/format";
import type { VideoCardData } from "@/types/youtube";
import type { Video } from "@/types/youtube";

import styles from "./HomeContainer.module.scss";

function videoToCardData(
  video: Video,
  channelAvatars: Map<string, string>,
): VideoCardData {
  return {
    id: video.id,
    title: video.snippet.title,
    thumbnailUrl: getBestThumbnail(video.snippet.thumbnails),
    channelTitle: video.snippet.channelTitle,
    channelId: video.snippet.channelId,
    viewCount: video.statistics?.viewCount ?? "0",
    publishedAt: video.snippet.publishedAt,
    duration: video.contentDetails?.duration,
    channelAvatarUrl: channelAvatars.get(video.snippet.channelId),
  };
}

export function HomeContainer() {
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useTrendingVideos();
  const loadMoreRef = useRef(null);

  const allVideos = useMemo(
    () => data?.pages.flatMap((p) => p.items) ?? [],
    [data],
  );

  // Collect unique channel IDs for avatar fetching
  const channelIds = useMemo(
    () => [...new Set(allVideos.map((v) => v.snippet.channelId))],
    [allVideos],
  );

  const { data: channels } = useChannelsByIds(channelIds);

  const channelAvatars = useMemo(() => {
    const map = new Map<string, string>();
    channels?.forEach((ch) => {
      const url = ch.snippet.thumbnails?.default?.url;
      if (url) map.set(ch.id, url);
    });
    return map;
  }, [channels]);

  const cardDataList = useMemo(
    () => allVideos.map((v) => videoToCardData(v, channelAvatars)),
    [allVideos, channelAvatars],
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    });

    const el = loadMoreRef.current;

    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <main className={styles.page}>
      {isError ? (
        <ErrorState
          title="Couldn't load videos"
          message="Make sure your YouTube API key is set in .env.local and has quota remaining."
          onRetry={() => refetch()}
        />
      ) : (
        <>
          <div className={styles.grid}>
            {isLoading ? (
              <VideoCardSkeleton count={18} />
            ) : (
              cardDataList.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))
            )}
          </div>

          {hasNextPage && (
            <div ref={loadMoreRef} className={styles.loader}>
              {isFetchingNextPage && "Loading..."}
            </div>
          )}
        </>
      )}
    </main>
  );
}
