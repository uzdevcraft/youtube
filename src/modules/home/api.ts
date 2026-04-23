import { http } from '@/services';
import { AxiosPromise } from 'axios';

import * as Types from './types';

export const Videos = ({
  pageToken,
  regionCode = 'US'
}: {
  pageToken?: any;
  regionCode: string;
}): AxiosPromise<Types.IApi.Video> =>
  http.get('/videos', {
    params: {
      part: 'snippet,contentDetails,statistics',
      chart: 'mostPopular',
      maxResults: 20,
      regionCode,
      pageToken
    }
  });
