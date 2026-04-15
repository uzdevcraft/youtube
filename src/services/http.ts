import axios from 'axios';
import storage from '@/services/storage';

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'ru',
    Currency: 'uzs',
    'Content-Type': 'application/json'
  }
});

console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
http.interceptors.request.use(axiosConfig => {
  const accessToken = storage.local.get('accessToken') || '';

  if (accessToken) {
    axiosConfig.headers.Authorization = `Bearer ${accessToken}`;
  }

  return axiosConfig;
});

const pureHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Accept-Language': 'ru',
    'Content-Type': 'application/json'
  }
});

export default { pureRequest: pureHttp, request: http } as const;
