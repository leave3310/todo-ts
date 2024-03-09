import type {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";

import { useAuthHandler } from "@/compositions/auth/useAuthHandler";

export const requestSuccessHandler = (config: InternalAxiosRequestConfig) => {
  const { getToken } = useAuthHandler();
  if (getToken()) {
    config.headers.Authorization = getToken();
  }

  return config;
};

export const requestErrorHandler = (error: AxiosError) => Promise.reject(error);

export const responseSuccessHandler = (response: AxiosResponse) =>
  response.data;

export const responseErrorHandler = (error: AxiosError) =>
  Promise.reject(error.response?.data);

export const apiURL = import.meta.env.VITE_API_URL;
