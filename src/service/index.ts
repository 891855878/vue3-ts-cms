import KYRequest from "./request";
import { BASE_URL, TIME_OUT } from "./request/config";
import localCache from "@/utils/cache";

export default new KYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  serviceLoading: true,
  interceptors: {
    requsetInterceptor: (config) => {
      const token = localCache.getCache("token");
      if (token) {
        if (config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }

      return config;
    },
    requsetInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    },
    responseInterceptorCatch: (err) => {
      return err;
    }
  }
});
