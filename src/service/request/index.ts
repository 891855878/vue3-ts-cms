import axios from "axios";
import type { AxiosInstance } from "axios";
import { ElLoading } from "element-plus";
// import type { LoadingOptionsResolved } from "element-plus/es/components/loading/src/types";
import "element-plus/es/components/loading/style/css";

import type { KYRequestConfig, KYRrequsetInterceptors } from "./type";
const DEFAULT_LOADING = false;
class KYRequest {
  instance: AxiosInstance;
  interceptors?: KYRrequsetInterceptors;
  loadingInstance?: any;
  isLoading: boolean;
  constructor(config: KYRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    // 实例拦截器
    this.isLoading = config.serviceLoading ?? DEFAULT_LOADING;
    this.instance.interceptors.request.use(
      this.interceptors?.requsetInterceptor,
      this.interceptors?.requsetInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    //全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log("全局请求拦截器成功");
        if (this.isLoading) {
          this.loadingInstance = ElLoading.service({
            text: "loading......",
            background: "rgba(0,0,0,0.5)"
          });
        }
        return config;
      },
      (err) => {
        // console.log("全局请求拦截器失败");
        return err;
      }
    );
    this.instance.interceptors.response.use(
      (res) => {
        // console.log("全局响应拦截器成功");

        this.loadingInstance?.close();

        return res.data;
      },
      (err) => {
        // console.log("全局响应拦截器失败");
        return err;
      }
    );
  }
  request<T = any>(config: KYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requsetInterceptor) {
        config = config.interceptors.requsetInterceptor(config);
      }
      this.isLoading = config.serviceLoading ?? DEFAULT_LOADING;
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            config = config.interceptors.responseInterceptor(res);
          }

          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get<T = any>(config: KYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "GET" });
  }
  post<T = any>(config: KYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "POST" });
  }
  delete<T = any>(config: KYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "DELETE" });
  }
  patch<T = any>(config: KYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: "PATCH" });
  }
}
export default KYRequest;
