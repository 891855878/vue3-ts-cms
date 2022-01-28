import type { AxiosRequestConfig, AxiosResponse } from "axios";

export interface KYRrequsetInterceptors<T = AxiosResponse> {
  requsetInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requsetInterceptorCatch?: (err: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (err: any) => any;
}

export interface KYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: KYRrequsetInterceptors<T>;
  serviceLoading?: boolean;
}
