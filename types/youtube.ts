// ─── YouTube API Core Types ───────────────────────────────────────────────────

export interface YouTubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YouTubeThumbnails {
  default: YouTubeThumbnail;
  medium: YouTubeThumbnail;
  high: YouTubeThumbnail;
  standard?: YouTubeThumbnail;
  maxres?: YouTubeThumbnail;
}

export interface YouTubePageInfo {
  totalResults: number;
  resultsPerPage: number;
}

export interface YouTubePaginatedResponse<T> {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: YouTubePageInfo;
  items: T[];
}

// ─── Video Types ──────────────────────────────────────────────────────────────

export interface VideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YouTubeThumbnails;
  channelTitle: string;
  tags?: string[];
  categoryId: string;
  liveBroadcastContent: string;
  localized?: {
    title: string;
    description: string;
  };
}

export interface VideoStatistics {
  viewCount: string;
  likeCount: string;
  dislikeCount?: string;
  favoriteCount: string;
  commentCount: string;
}

export interface VideoContentDetails {
  duration: string;
  dimension: string;
  definition: string;
  caption: string;
  licensedContent: boolean;
  regionRestriction?: {
    allowed?: string[];
    blocked?: string[];
  };
}

export interface Video {
  kind: "youtube#video";
  etag: string;
  id: string;
  snippet: VideoSnippet;
  statistics?: VideoStatistics;
  contentDetails?: VideoContentDetails;
}

export interface SearchResultId {
  kind: string;
  videoId?: string;
  channelId?: string;
  playlistId?: string;
}

export interface SearchResult {
  kind: "youtube#searchResult";
  etag: string;
  id: SearchResultId;
  snippet: VideoSnippet;
}

// ─── Channel Types ────────────────────────────────────────────────────────────

export interface ChannelSnippet {
  title: string;
  description: string;
  customUrl?: string;
  publishedAt: string;
  thumbnails: YouTubeThumbnails;
  country?: string;
}

export interface ChannelStatistics {
  viewCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  videoCount: string;
}

export interface Channel {
  kind: "youtube#channel";
  etag: string;
  id: string;
  snippet: ChannelSnippet;
  statistics?: ChannelStatistics;
}

// ─── Comment Types ────────────────────────────────────────────────────────────

export interface CommentSnippet {
  videoId: string;
  textDisplay: string;
  textOriginal: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  authorChannelUrl: string;
  likeCount: number;
  publishedAt: string;
  updatedAt: string;
}

export interface Comment {
  kind: "youtube#comment";
  etag: string;
  id: string;
  snippet: CommentSnippet;
}

export interface CommentThread {
  kind: "youtube#commentThread";
  etag: string;
  id: string;
  snippet: {
    videoId: string;
    topLevelComment: Comment;
    canReply: boolean;
    totalReplyCount: number;
    isPublic: boolean;
  };
}

// ─── App-Level Types ──────────────────────────────────────────────────────────

export interface VideoCardData {
  id: string;
  title: string;
  thumbnailUrl: string;
  channelTitle: string;
  channelId: string;
  viewCount: string;
  publishedAt: string;
  duration?: string;
  channelAvatarUrl?: string;
}

export type SidebarState = "expanded" | "collapsed" | "mini";

export interface SearchFilters {
  q: string;
  type?: "video" | "channel" | "playlist";
  order?: "relevance" | "date" | "viewCount" | "rating";
  publishedAfter?: string;
  videoDuration?: "short" | "medium" | "long";
}
