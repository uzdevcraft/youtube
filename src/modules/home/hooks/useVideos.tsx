import { useInfiniteQuery } from '@tanstack/react-query';

import { STALE_TIME } from '@/lib/query-keys';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

export function useTrendingVideos(regionCode = 'US') {
  return useInfiniteQuery<Types.IQuery.List, string>({
    queryKey: ['videos', 'trending', regionCode],

    queryFn: async ({ pageParam }) => {
      const { data } = await Api.Videos(pageParam as string | undefined, regionCode);
      return Mappers.List(data);
    },

    initialPageParam: undefined,

    getNextPageParam: lastPage => lastPage.nextPageToken,

    staleTime: STALE_TIME.MEDIUM,
    gcTime: STALE_TIME.LONG,
    retry: 2
  });
}
