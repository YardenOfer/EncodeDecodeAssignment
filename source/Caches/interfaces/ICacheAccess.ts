export interface ICacheAccess {
  getCache(): Promise<any>;
  addToCache(key: string, value: string): Promise<void>;
}
