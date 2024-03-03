import type {
  InternalAxiosRequestConfig,
  AxiosError,
  AxiosResponse,
} from "axios";

export const requestSuccessHandler = (config: InternalAxiosRequestConfig) => {
  return config;
};

export const requestErrorHandler = (error: AxiosError) => Promise.reject(error);

export const responseSuccessHandler = (response: AxiosResponse) =>
  response.data;

export const responseErrorHandler = (error: AxiosError) =>
  Promise.reject(error.response?.data);

export const apiURL = import.meta.env.VITE_API_URL;
