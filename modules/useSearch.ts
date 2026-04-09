import { useInfiniteQuery } from "@tanstack/react-query";
import { searchVideos } from "@/services/videos.service";
import { QUERY_KEYS, STALE_TIME } from "@/lib/query-keys";
import type { SearchFilters } from "@/types/youtube";

export function useSearchVideos(filters: SearchFilters) {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.search({
      q: filters.q,
      order: filters.order,
      videoDuration: filters.videoDuration,
      publishedAfter: filters.publishedAfter,
    }),
    queryFn: ({ pageParam }) =>
      searchVideos({
        q: filters.q,
        order: filters.order,
        videoDuration: filters.videoDuration,
        publishedAfter: filters.publishedAfter,
        pageToken: pageParam as string | undefined,
        maxResults: 20,
      }),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.pagination.nextPageToken,
    enabled: Boolean(filters.q.trim()),
    staleTime: STALE_TIME.SHORT,
    gcTime: STALE_TIME.MEDIUM,
  });
}
