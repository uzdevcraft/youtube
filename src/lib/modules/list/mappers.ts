import { get } from 'radash';
import config from '@/config';

import * as Types from './types';

export const PageInfo = (params?: any): Types.IEntity.PageInfo => ({
  total_results: get(params, 'totalResults') || 0,
  results_per_page: get(params, 'resultsPerPage') || config.list.perPage
});

export const Meta = (item?: Types.IApi.Response<any>): Types.IEntity.Meta => ({
  kind: get(item, 'kind') || '',
  etag: get(item, 'etag') || '',
  page_info: PageInfo(item)
});

export const Params = (params?: any): Types.IEntity.Params => ({
  page: get(params, 'page') || 1,
  language: get(params, 'language') || 'en-US',
  region: get(params, 'region')
});

export const Request = (params?: Types.IEntity.Params): Types.IApi.Request => ({
  page: params?.page || 1,
  language: params?.language || 'en-US',
  region: params?.region
});
