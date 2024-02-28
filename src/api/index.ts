import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

export const apiInstance = axios.create({
  baseURL: apiURL,
  headers: {
    "content-type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error),
);

apiInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error),
);
