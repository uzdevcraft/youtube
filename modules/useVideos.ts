import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import {
  fetchTrendingVideos,
  fetchVideoById,
  fetchVideosByIds,
  fetchRelatedVideos,
} from "@/services/videos.service";
import { QUERY_KEYS, STALE_TIME } from "@/lib/query-keys";

export function useTrendingVideos(regionCode = "US") {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.trending(regionCode),
    queryFn: ({ pageParam }) =>
      fetchTrendingVideos(pageParam as string | undefined, regionCode),
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) => lastPage.pagination.nextPageToken,
    staleTime: STALE_TIME.MEDIUM,
    gcTime: STALE_TIME.LONG,
    retry: 2,
  });
}

export function useVideoDetail(videoId: string) {
  return useQuery({
    queryKey: QUERY_KEYS.videoDetail(videoId),
    queryFn: () => fetchVideoById(videoId),
    enabled: Boolean(videoId),
    staleTime: STALE_TIME.MEDIUM,
    gcTime: STALE_TIME.LONG,
    retry: 2,
  });
}

export function useVideosByIds(videoIds: string[]) {
  return useQuery({
    queryKey: QUERY_KEYS.videosByIds(videoIds),
    queryFn: () => fetchVideosByIds(videoIds),
    enabled: videoIds.length > 0,
    staleTime: STALE_TIME.MEDIUM,
  });
}

export function useRelatedVideos(videoId: string) {
  return useQuery({
    queryKey: QUERY_KEYS.relatedVideos(videoId),
    queryFn: () => fetchRelatedVideos(videoId),
    enabled: Boolean(videoId),
    staleTime: STALE_TIME.SHORT,
  });
}
