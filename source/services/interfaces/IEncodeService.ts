import { ICacheAccess } from "../../Caches/interfaces/ICacheAccess";

export interface IEncodeService {
  cacheAccess: ICacheAccess;
  encodeURL(decodedURL: string): Promise<string>;
}
