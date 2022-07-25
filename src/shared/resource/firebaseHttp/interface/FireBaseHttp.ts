export interface FireBaseHttp {
  get<T = any>(path: string): Promise<T>;
  post<T = any>(path: string): Promise<T>;
  update<T = any>(path: string): Promise<T>;
  delete<T = any>(path: string): Promise<T>;
}
