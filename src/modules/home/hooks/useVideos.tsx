import { useInfiniteQuery } from '@tanstack/react-query';

import { STALE_TIME } from '@/lib/query-keys';

import * as Api from '../api';
import * as Types from '../types';
import * as Mappers from '../mappers';

export function useTrendingVideos(regionCode = 'US') {
  return useInfiniteQuery({
    queryKey: ['videos', 'trending', regionCode],

    initialPageParam: '',

    queryFn: async ({ pageParam }) => {
      const { data } = await Api.Videos({
        pageToken: pageParam || undefined,
        regionCode
      });

      return Mappers.List(data);
    },

    getNextPageParam: (lastPage, pages) => {
      const next = lastPage.nextPageToken;
      if (!next) return undefined;

      const used = pages.map(p => p.nextPageToken);
      if (used.includes(next)) return undefined;

      return next;
    },

    staleTime: STALE_TIME.MEDIUM,
    gcTime: STALE_TIME.LONG,
    retry: 2,
    enabled: !!regionCode
  });
}
