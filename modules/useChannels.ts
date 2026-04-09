import { useQuery } from "@tanstack/react-query";
import {
  fetchChannelById,
  fetchChannelsByIds,
  fetchVideoComments,
} from "@/services/channels.service";
import { QUERY_KEYS, STALE_TIME } from "@/lib/query-keys";

export function useChannel(channelId: string) {
  return useQuery({
    queryKey: QUERY_KEYS.channel(channelId),
    queryFn: () => fetchChannelById(channelId),
    enabled: Boolean(channelId),
    staleTime: STALE_TIME.VERY_LONG,
    gcTime: STALE_TIME.VERY_LONG,
  });
}

export function useChannelsByIds(channelIds: string[]) {
  return useQuery({
    queryKey: QUERY_KEYS.channelsByIds(channelIds),
    queryFn: () => fetchChannelsByIds(channelIds),
    enabled: channelIds.length > 0,
    staleTime: STALE_TIME.VERY_LONG,
  });
}

export function useVideoComments(videoId: string) {
  return useQuery({
    queryKey: QUERY_KEYS.comments(videoId),
    queryFn: () => fetchVideoComments(videoId),
    enabled: Boolean(videoId),
    staleTime: STALE_TIME.SHORT,
    retry: 1,
  });
}
