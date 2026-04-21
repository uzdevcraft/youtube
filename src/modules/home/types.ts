export declare namespace IApi {
  export interface Video {
    kind: string;
    etag: string;
    nextPageToken?: string;
    pageInfo: {
      totalResults: number;
      resultsPerPage: number;
    };
    items: any[];
  }
}

export declare namespace IEntity {
  export type Video = {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
    contentDetails: ContentDetails;
    statistics: Statistics;
  };

  export interface Snippet {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: Thumbnails;
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: Localized;
    defaultAudioLanguage: string;
  }

  export interface ContentDetails {
    duration: string;
    dimension: string;
    definition: string;
    caption: string;
    licensedContent: boolean;
    contentRating: {};
    projection: string;
  }

  export interface Statistics {
    viewCount: string;
    likeCount: string;
    favoriteCount: string;
    commentCount: string;
  }

  export interface Thumbnails {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
    standard: { url: string; width: number; height: number };
    maxres: { url: string; width: number; height: number };
  }

  export interface Localized {
    title: string;
    description: string;
  }

  export interface PageInfo {
    total_results: number;
    results_per_page: number;
  }
}

export declare namespace IQuery {
  export interface List {
    kind: string;
    etag: string;
    results: IEntity.Video[];
    page_info: IEntity.PageInfo;
    nextPageToken?: string;
  }
}
