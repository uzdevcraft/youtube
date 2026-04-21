export const QUERY_KEYS = {
  videoDetail: (videoId: string) =>
    ["videos", "detail", videoId] as const,

  videosByIds: (ids: string[]) =>
    ["videos", "byIds", ...ids.sort()] as const,

  relatedVideos: (videoId: string) =>
    ["videos", "related", videoId] as const,

  // Search
  search: (params: Record<string, string | undefined>) =>
    ["search", params] as const,

  // Channels
  channel: (channelId: string) =>
    ["channels", "detail", channelId] as const,

  channelsByIds: (ids: string[]) =>
    ["channels", "byIds", ...ids.sort()] as const,

  // Comments
  comments: (videoId: string, pageToken?: string) =>
    ["comments", videoId, pageToken ?? ""] as const,
} as const;

export const STALE_TIME = {
  SHORT: 1000 * 60 * 2,       // 2 minutes
  MEDIUM: 1000 * 60 * 5,      // 5 minutes
  LONG: 1000 * 60 * 30,       // 30 minutes
  VERY_LONG: 1000 * 60 * 60,  // 1 hour
} as const;
