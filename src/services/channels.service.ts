import { youtubeClient } from "./youtube.client";
import type { Channel, CommentThread, YouTubePaginatedResponse } from "@/types/youtube";
import type { WithPagination } from "@/types/api";

export async function fetchChannelById(channelId: string): Promise<Channel | null> {
  const { data } = await youtubeClient.get<YouTubePaginatedResponse<Channel>>(
    "/channels",
    {
      params: {
        part: "snippet,statistics",
        id: channelId,
      },
    }
  );

  return data.items[0] ?? null;
}

export async function fetchChannelsByIds(channelIds: string[]): Promise<Channel[]> {
  if (!channelIds.length) return [];

  const unique = [...new Set(channelIds)];
  const { data } = await youtubeClient.get<YouTubePaginatedResponse<Channel>>(
    "/channels",
    {
      params: {
        part: "snippet,statistics",
        id: unique.join(","),
        maxResults: 50,
      },
    }
  );

  return data.items;
}

export async function fetchVideoComments(
  videoId: string,
  pageToken?: string,
  maxResults = 20
): Promise<WithPagination<CommentThread>> {
  const { data } = await youtubeClient.get<YouTubePaginatedResponse<CommentThread>>(
    "/commentThreads",
    {
      params: {
        part: "snippet",
        videoId,
        maxResults,
        pageToken,
        order: "relevance",
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
