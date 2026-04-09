"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { VideoPlayer, VideoPlayerSkeleton } from "@/components/VideoPlayer";
import { VideoCard, VideoCardSkeleton } from "@/components/VideoCard";
import { ErrorState } from "@/components/ErrorState";
import { useVideoDetail, useRelatedVideos } from "@/modules/useVideos";
import { useChannel, useVideoComments } from "@/modules/useChannels";
import {
  formatViewCount,
  formatSubscriberCount,
  formatAbsoluteDate,
  formatRelativeDate,
  getBestThumbnail,
} from "@/lib/format";
import type { SearchResult } from "@/types/youtube";
import type { VideoCardData } from "@/types/youtube";
import styles from "./WatchContainer.module.scss";

interface WatchContainerProps {
  videoId: string;
}

function searchResultToCardData(result: SearchResult): VideoCardData {
  return {
    id: result.id.videoId ?? "",
    title: result.snippet.title,
    thumbnailUrl: getBestThumbnail(result.snippet.thumbnails),
    channelTitle: result.snippet.channelTitle,
    channelId: result.snippet.channelId,
    viewCount: "0",
    publishedAt: result.snippet.publishedAt,
  };
}

export function WatchContainer({ videoId }: WatchContainerProps) {
  const [descExpanded, setDescExpanded] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [liked, setLiked] = useState(false);

  const { data: video, isLoading: videoLoading, isError: videoError } = useVideoDetail(videoId);
  const { data: related, isLoading: relatedLoading } = useRelatedVideos(videoId);
  const { data: channel } = useChannel(video?.snippet.channelId ?? "");
  const { data: commentsData } = useVideoComments(videoId);

  const relatedCards = useMemo(
    () => related?.items.filter((r) => r.id.videoId).map(searchResultToCardData) ?? [],
    [related]
  );

  const handleSubscribe = () => {
    setSubscribed((s) => !s);
    toast.success(subscribed ? "Unsubscribed" : `Subscribed to ${video?.snippet.channelTitle}`);
  };

  const handleLike = () => {
    setLiked((l) => !l);
    toast.success(liked ? "Removed like" : "Added to liked videos");
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/watch?v=${videoId}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    } catch {
      toast.error("Couldn't copy link");
    }
  };

  if (videoError) {
    return (
      <div className={styles.page}>
        <ErrorState
          title="Video unavailable"
          message="This video could not be loaded. It may have been removed or your API key may lack quota."
        />
      </div>
    );
  }

  return (
    <div className={styles.page}>
      {/* ── Primary Column ── */}
      <div className={styles.primary}>
        {/* Player */}
        {videoLoading ? (
          <VideoPlayerSkeleton />
        ) : (
          <VideoPlayer videoId={videoId} title={video?.snippet.title} />
        )}

        {/* Video Info */}
        <div className={styles.videoInfo}>
          {videoLoading ? (
            <>
              <div className={`${styles.skeletonBlock} ${styles.skeletonTitle}`} />
              <div className={`${styles.skeletonBlock} ${styles.skeletonMeta}`} />
            </>
          ) : video ? (
            <>
              <h1 className={styles.videoTitle}>{video.snippet.title}</h1>

              <div className={styles.metaRow}>
                <span className={styles.viewsDate}>
                  {formatViewCount(video.statistics?.viewCount ?? "0")}
                  {" · "}
                  {formatAbsoluteDate(video.snippet.publishedAt)}
                </span>

                <div className={styles.actions}>
                  {/* Like / Dislike group */}
                  <div className={styles.likeGroup}>
                    <button
                      className={`${styles.actionBtn} ${liked ? styles.liked : ""}`}
                      onClick={handleLike}
                      aria-label="Like video"
                    >
                      <ThumbUpIcon />
                      {video.statistics?.likeCount
                        ? formatViewCount(video.statistics.likeCount).replace(" views", "")
                        : "Like"}
                    </button>
                    <button className={styles.actionBtn} aria-label="Dislike video">
                      <ThumbDownIcon />
                    </button>
                  </div>

                  <button className={styles.actionBtn} onClick={handleShare}>
                    <ShareIcon />
                    Share
                  </button>

                  <button className={styles.actionBtn}>
                    <DownloadIcon />
                    Download
                  </button>

                  <button className={styles.actionBtn} aria-label="More actions">
                    <MoreIcon />
                  </button>
                </div>
              </div>

              {/* Channel Row */}
              <div className={styles.channelRow}>
                <Link
                  href={`/channel/${video.snippet.channelId}`}
                  className={styles.channelAvatar}
                >
                  {channel?.snippet.thumbnails.default?.url ? (
                    <Image
                      src={channel.snippet.thumbnails.default.url}
                      alt={video.snippet.channelTitle}
                      width={40}
                      height={40}
                      unoptimized
                    />
                  ) : (
                    <div className={styles.channelAvatarPlaceholder}>
                      {video.snippet.channelTitle.charAt(0)}
                    </div>
                  )}
                </Link>

                <div className={styles.channelInfo}>
                  <Link
                    href={`/channel/${video.snippet.channelId}`}
                    className={styles.channelName}
                  >
                    {video.snippet.channelTitle}
                  </Link>
                  {channel?.statistics && (
                    <p className={styles.subCount}>
                      {formatSubscriberCount(channel.statistics.subscriberCount)} subscribers
                    </p>
                  )}
                </div>

                <button
                  className={`${styles.subscribeBtn} ${subscribed ? styles.subscribed : ""}`}
                  onClick={handleSubscribe}
                >
                  {subscribed ? "Subscribed" : "Subscribe"}
                </button>
              </div>

              {/* Description */}
              <div
                className={styles.descriptionBox}
                onClick={() => setDescExpanded((e) => !e)}
              >
                <div className={styles.descriptionStats}>
                  <span>{formatViewCount(video.statistics?.viewCount ?? "0")}</span>
                  <span>{formatAbsoluteDate(video.snippet.publishedAt)}</span>
                </div>

                <p className={`${styles.descriptionText} ${descExpanded ? "" : styles.collapsed}`}>
                  {video.snippet.description || "No description available."}
                </p>

                <button className={styles.showMoreBtn}>
                  {descExpanded ? "Show less" : "...more"}
                </button>
              </div>

              {/* Comments */}
              <div className={styles.commentsSection}>
                <div className={styles.commentsHeader}>
                  <span className={styles.commentsCount}>
                    {video.statistics?.commentCount
                      ? `${parseInt(video.statistics.commentCount).toLocaleString()} Comments`
                      : "Comments"}
                  </span>
                </div>

                {commentsData?.items.map((thread) => {
                  const c = thread.snippet.topLevelComment.snippet;
                  return (
                    <div key={thread.id} className={styles.comment}>
                      <div className={styles.commentAvatar}>
                        {c.authorProfileImageUrl ? (
                          <Image
                            src={c.authorProfileImageUrl}
                            alt={c.authorDisplayName}
                            width={40}
                            height={40}
                            unoptimized
                          />
                        ) : (
                          <div
                            style={{
                              width: "100%",
                              height: "100%",
                              background: "var(--bg-hover)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: "var(--text-secondary)",
                              fontSize: "16px",
                            }}
                          >
                            {c.authorDisplayName.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className={styles.commentBody}>
                        <div className={styles.commentAuthor}>
                          {c.authorDisplayName}
                          <span>{formatRelativeDate(c.publishedAt)}</span>
                        </div>
                        <p
                          className={styles.commentText}
                          dangerouslySetInnerHTML={{ __html: c.textDisplay }}
                        />
                        <div className={styles.commentActions}>
                          <button className={styles.commentActionBtn}>
                            <ThumbUpIcon /> {c.likeCount > 0 ? c.likeCount : ""}
                          </button>
                          <button className={styles.commentActionBtn}>
                            <ThumbDownIcon />
                          </button>
                          <button className={styles.commentActionBtn}>Reply</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* ── Secondary Column: related ── */}
      <aside className={styles.secondary} aria-label="Related videos">
        <div className={styles.relatedList}>
          {relatedLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <VideoCardSkeleton key={i} />
            ))
          ) : (
            relatedCards.map((v) => (
              <VideoCard key={v.id} video={v} horizontal />
            ))
          )}
        </div>
      </aside>
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────
function ThumbUpIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>;
}
function ThumbDownIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/></svg>;
}
function ShareIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>;
}
function DownloadIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zm-8 2V5h2v6h1.17L12 13.17 9.83 11H11zm-6 7h14v2H5z"/></svg>;
}
function MoreIcon() {
  return <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>;
}
