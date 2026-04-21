import { get } from 'radash';
import * as Types from './types';

/* ============================
   Localized
============================ */
export const Localized = (src: any): Types.IEntity.Localized => ({
  title: get(src, 'title', ''),
  description: get(src, 'description', '')
});

/* ============================
   Thumbnails
============================ */
export const Thumbnails = (src: any): Types.IEntity.Thumbnails => ({
  default: {
    url: get(src, 'default.url', ''),
    width: get(src, 'default.width', 0),
    height: get(src, 'default.height', 0)
  },
  medium: {
    url: get(src, 'medium.url', ''),
    width: get(src, 'medium.width', 0),
    height: get(src, 'medium.height', 0)
  },
  high: {
    url: get(src, 'high.url', ''),
    width: get(src, 'high.width', 0),
    height: get(src, 'high.height', 0)
  },
  standard: {
    url: get(src, 'standard.url', ''),
    width: get(src, 'standard.width', 0),
    height: get(src, 'standard.height', 0)
  },
  maxres: {
    url: get(src, 'maxres.url', ''),
    width: get(src, 'maxres.width', 0),
    height: get(src, 'maxres.height', 0)
  }
});

/* ============================
   Snippet
============================ */
export const Snippet = (src: any): Types.IEntity.Snippet => ({
  publishedAt: get(src, 'publishedAt', ''),
  channelId: get(src, 'channelId', ''),
  title: get(src, 'title', ''),
  description: get(src, 'description', ''),
  thumbnails: Thumbnails(get(src, 'thumbnails', {})),
  channelTitle: get(src, 'channelTitle', ''),
  tags: get(src, 'tags', []),
  categoryId: get(src, 'categoryId', ''),
  liveBroadcastContent: get(src, 'liveBroadcastContent', ''),
  defaultLanguage: get(src, 'defaultLanguage', ''),
  localized: Localized(get(src, 'localized', {})),
  defaultAudioLanguage: get(src, 'defaultAudioLanguage', '')
});

/* ============================
   ContentDetails
============================ */
export const ContentDetails = (src: any): Types.IEntity.ContentDetails => ({
  duration: get(src, 'duration', ''),
  dimension: get(src, 'dimension', ''),
  definition: get(src, 'definition', ''),
  caption: get(src, 'caption', ''),
  licensedContent: get(src, 'licensedContent', false),
  contentRating: get(src, 'contentRating', {}),
  projection: get(src, 'projection', '')
});

/* ============================
   Statistics
============================ */
export const Statistics = (src: any): Types.IEntity.Statistics => ({
  viewCount: get(src, 'viewCount', '0'),
  likeCount: get(src, 'likeCount', '0'),
  favoriteCount: get(src, 'favoriteCount', '0'),
  commentCount: get(src, 'commentCount', '0')
});

/* ============================
   Video (MAIN ENTITY)
============================ */
export const Video = (src: any): Types.IEntity.Video => ({
  kind: get(src, 'kind', ''),
  etag: get(src, 'etag', ''),
  id: get(src, 'id', ''),
  snippet: Snippet(get(src, 'snippet', {})),
  contentDetails: ContentDetails(get(src, 'contentDetails', {})),
  statistics: Statistics(get(src, 'statistics', {}))
});

/* ============================
   PageInfo
============================ */
export const PageInfo = (src: any): Types.IEntity.PageInfo => ({
  total_results: get(src, 'pageInfo.totalResults', 0),
  results_per_page: get(src, 'pageInfo.resultsPerPage', 0)
});

/* ============================
   List (QUERY)
============================ */
export const List = (src: Types.IApi.Video): Types.IQuery.List => ({
  kind: get(src, 'kind', ''),
  etag: get(src, 'etag', ''),
  results: get(src, 'items', []).map(Video),
  page_info: {
    total_results: get(src, 'pageInfo.totalResults', 0),
    results_per_page: get(src, 'pageInfo.resultsPerPage', 0)
  },
  nextPageToken: get(src, 'nextPageToken')
});
