import { youtubeClient } from "./youtube.client";
import type {
  Video,
  SearchResult,
  YouTubePaginatedResponse,
} from "@/types/youtube";
import type { WithPagination } from "@/types/api";

// ─── Video Endpoints ──────────────────────────────────────────────────────────

export async function fetchTrendingVideos(
  pageToken?: string,
  regionCode = "US",
  maxResults = 24
): Promise<WithPagination<Video>> {
  const { data } = await youtubeClient.get<YouTubePaginatedResponse<Video>>(
    "/videos",
    {
      params: {
        part: "snippet,statistics,contentDetails",
        chart: "mostPopular",
        regionCode,
        maxResults,
        pageToken,
      },
    }
  );

  return {
    items: data.items,
    pagination: {
      nextPageToken: data.nextPageToken,
      prevPageToken: data.prevPageToken,
      totalResults: data.pageInfo.totalResults,
      resultsPerPage: data.pageInfo.resultsPerPage,
    },
  };
}

export async function fetchVideoById(videoId: string): Promise<Video | null> {
  const { data } = await youtubeClient.get<YouTubePaginatedResponse<Video>>(
    "/videos",
    {
      params: {
        part: "snippet,statistics,contentDetails",
        id: videoId,
      },
    }
  );

  return data.items[0] ?? null;
}

export async function fetchVideosByIds(videoIds: string[]): Promise<Video[]> {
  if (!videoIds.length) return [];

  const { data } = await youtubeClient.get<YouTubePaginatedResponse<Video>>(
    "/videos",
    {
      params: {
        part: "snippet,statistics,contentDetails",
        id: videoIds.join(","),
        maxResults: 50,
      },
    }
  );

  return data.items;
}

// ─── Search Endpoints ─────────────────────────────────────────────────────────

export interface SearchParams {
  q: string;
  pageToken?: string;
  maxResults?: number;
  order?: "relevance" | "date" | "viewCount" | "rating";
  type?: "video" | "channel" | "playlist";
  videoDuration?: "short" | "medium" | "long";
  publishedAfter?: string;
}

export async function searchVideos(
  params: SearchParams
): Promise<WithPagination<SearchResult>> {
  const { data } = await youtubeClient.get<
    YouTubePaginatedResponse<SearchResult>
  >("/search", {
    params: {
      part: "snippet",
      type: "video",
      maxResults: params.maxResults ?? 20,
      ...params,
    },
  });

  return {
    items: data.items,
    pagination: {
      nextPageToken: data.nextPageToken,
      prevPageToken: data.prevPageToken,
      totalResults: data.pageInfo.totalResults,
      resultsPerPage: data.pageInfo.resultsPerPage,
    },
  };
}

export async function fetchRelatedVideos(
  videoId: string,
  maxResults = 15
): Promise<WithPagination<SearchResult>> {
  const { data } = await youtubeClient.get<
    YouTubePaginatedResponse<SearchResult>
  >("/search", {
    params: {
      part: "snippet",
      type: "video",
      relatedToVideoId: videoId,
      maxResults,
    },
  });

  return {
    items: data.items,
    pagination: {
      nextPageToken: data.nextPageToken,
      prevPageToken: data.prevPageToken,
      totalResults: data.pageInfo.totalResults,
      resultsPerPage: data.pageInfo.resultsPerPage,
    },
  };
}
