import axios from "axios";

import {
  requestSuccessHandler,
  requestErrorHandler,
  responseSuccessHandler,
  responseErrorHandler,
  apiURL,
} from "@/api/utilities";

export const apiInstance = axios.create({
  baseURL: apiURL,
  headers: {
    "content-type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  requestSuccessHandler,
  requestErrorHandler,
);

apiInstance.interceptors.response.use(
  responseSuccessHandler,
  responseErrorHandler,
);
