import { ICacheAccess } from "../../Caches/interfaces/ICacheAccess";

export interface IDecodeService {
  cacheAccess: ICacheAccess;
  decodeURL(encodedURL: string): Promise<string>;
}
