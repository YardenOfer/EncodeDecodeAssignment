import { IDecodeService } from "./interfaces/IDecodeService";
import { ICacheAccess } from "../Caches/interfaces/ICacheAccess";

export class DecodeService implements IDecodeService {
  cacheAccess: ICacheAccess;

  constructor(cacheAccess: ICacheAccess) {
    this.cacheAccess = cacheAccess;
  }

  async decodeURL(url: string): Promise<string> {
    const urls = await this.cacheAccess.getCache();
    const decodedURL = urls[url];

    if (!decodedURL) {
      throw new Error("No matching URL in the system");
    }

    return decodedURL;
  }
}
