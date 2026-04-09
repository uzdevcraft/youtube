"use client";

import React, { useMemo, useState } from "react";
import clsx from "clsx";
import { VideoCard } from "@/components/VideoCard";
import { ErrorState } from "@/components/ErrorState";
import { useSearchVideos } from "@/modules/useSearch";
import { getBestThumbnail } from "@/lib/format";
import type { SearchResult } from "@/types/youtube";
import type { VideoCardData } from "@/types/youtube";
import styles from "./SearchContainer.module.scss";

interface SearchContainerProps {
  query: string;
}

type OrderFilter = "relevance" | "date" | "viewCount" | "rating";
type DurationFilter = "" | "short" | "medium" | "long";

function searchResultToCard(result: SearchResult): VideoCardData {
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

const ORDER_OPTIONS: { label: string; value: OrderFilter }[] = [
  { label: "Relevance", value: "relevance" },
  { label: "Upload date", value: "date" },
  { label: "View count", value: "viewCount" },
  { label: "Rating", value: "rating" },
];

const DURATION_OPTIONS: { label: string; value: DurationFilter }[] = [
  { label: "Any duration", value: "" },
  { label: "Under 4 minutes", value: "short" },
  { label: "4–20 minutes", value: "medium" },
  { label: "Over 20 minutes", value: "long" },
];

export function SearchContainer({ query }: SearchContainerProps) {
  const [order, setOrder] = useState<OrderFilter>("relevance");
  const [duration, setDuration] = useState<DurationFilter>("");

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useSearchVideos({
    q: query,
    order,
    ...(duration ? { videoDuration: duration } : {}),
  });

  const allResults = useMemo(
    () => data?.pages.flatMap((p) => p.items) ?? [],
    [data]
  );

  const cards = useMemo(
    () => allResults.filter((r) => r.id.videoId).map(searchResultToCard),
    [allResults]
  );

  const totalResults = data?.pages[0]?.pagination.totalResults ?? 0;

  return (
    <main className={styles.page}>
      {/* Filters */}
      <div className={styles.filtersBar}>
        <span className={styles.filterLabel}>Sort by:</span>
        {ORDER_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={clsx(styles.filterBtn, { [styles.active]: order === opt.value })}
            onClick={() => setOrder(opt.value)}
          >
            {opt.label}
          </button>
        ))}

        <span className={styles.filterLabel} style={{ marginLeft: 8 }}>Duration:</span>
        {DURATION_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={clsx(styles.filterBtn, { [styles.active]: duration === opt.value })}
            onClick={() => setDuration(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      {!isLoading && !isError && totalResults > 0 && (
        <p className={styles.statsBar}>
          About {totalResults.toLocaleString()} results for &quot;{query}&quot;
        </p>
      )}

      {/* Error */}
      {isError && (
        <ErrorState
          title="Search failed"
          message="Could not fetch search results. Please check your API key and quota."
          onRetry={() => refetch()}
        />
      )}

      {/* Skeleton */}
      {isLoading && (
        <div className={styles.resultsList}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={styles.skeletonItem}>
              <div className={styles.skeletonThumb} />
              <div className={styles.skeletonMeta}>
                <div className={clsx(styles.skeletonLine, styles.title)} />
                <div className={clsx(styles.skeletonLine, styles.sub)} />
                <div className={clsx(styles.skeletonLine, styles.desc)} />
                <div className={clsx(styles.skeletonLine, styles.desc2)} />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Results */}
      {!isLoading && !isError && (
        <>
          {cards.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>
                No results found for &quot;{query}&quot;
              </p>
              <p className={styles.emptyMeta}>
                Try different keywords or remove filters.
              </p>
            </div>
          ) : (
            <div className={styles.resultsList}>
              {cards.map((video) => (
                <div key={video.id} className={styles.resultItem}>
                  <VideoCard video={video} horizontal />
                </div>
              ))}
            </div>
          )}

          {hasNextPage && (
            <div className={styles.loadMoreWrap}>
              <button
                className={styles.loadMoreBtn}
                onClick={() => fetchNextPage()}
                disabled={isFetchingNextPage}
              >
                {isFetchingNextPage ? "Loading…" : "Load more results"}
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
