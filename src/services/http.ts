import axios from 'axios';
import type { AxiosError, AxiosInstance } from 'axios';

const YOUTUBE_BASE_URL = process.env.NEXT_PUBLIC_YOUTUBE_DATA_BASE_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY ?? '';

function createYouTubeClient(): AxiosInstance {
  const http = axios.create({
    baseURL: YOUTUBE_BASE_URL,
    timeout: 15_000,
    params: {
      key: API_KEY
    }
  });

  // Check if key is present in params
  http.interceptors.request.use(
    config => {
      if (!config.params?.key) {
        config.params = { ...config.params, key: API_KEY };
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  // Handle errors
  http.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      const status = error.response?.status;

      if (status === 403) {
        console.error('[YouTube API] 403 Forbidden – check API key / quota');
      } else if (status === 429) {
        console.error('[YouTube API] 429 Rate limited – quota exceeded');
      } else if (status === 400) {
        console.error('[YouTube API] 400 Bad Request – invalid params');
        console.error('Response data:', error.response?.data);
      }

      return Promise.reject(error);
    }
  );

  return http;
}

const httpYoutube = createYouTubeClient();

export default httpYoutube;
