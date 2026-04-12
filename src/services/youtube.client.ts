import axios, { AxiosError, AxiosInstance } from "axios";

const YOUTUBE_BASE_URL = "https://www.googleapis.com/youtube/v3";
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY ?? "";

function createYouTubeClient(): AxiosInstance {
  const instance = axios.create({
    baseURL: YOUTUBE_BASE_URL,
    timeout: 15_000,
    params: {
      key: API_KEY,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      // Ensure key is always present
      if (!config.params?.key) {
        config.params = { ...config.params, key: API_KEY };
      }
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const status = error.response?.status;

      if (status === 403) {
        console.error("[YouTube API] 403 Forbidden – check API key / quota");
      } else if (status === 429) {
        console.error("[YouTube API] 429 Rate limited – quota exceeded");
      } else if (status === 400) {
        console.error("[YouTube API] 400 Bad Request – invalid params");
        console.error("Response data:", error.response?.data);
      }

      return Promise.reject(error);
    },
  );

  return instance;
}

export const youtubeClient = createYouTubeClient();
