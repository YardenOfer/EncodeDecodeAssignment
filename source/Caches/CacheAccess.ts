import { ICacheAccess } from "./interfaces/ICacheAccess";

let storedURLs: { [shortURL: string]: string } = {};

export class CacheAccess implements ICacheAccess {
  async getCache(): Promise<any> {
    return { ...storedURLs };
  }

  async addToCache(key: string, value: string): Promise<void> {
    storedURLs = { ...storedURLs };
    storedURLs[key] = value;
  }
}
