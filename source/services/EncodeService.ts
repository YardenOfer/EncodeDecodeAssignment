import { IEncodeService } from "./interfaces/IEncodeService";
import { ICacheAccess } from "../Caches/interfaces/ICacheAccess";
import { URL_PREFIX } from "../configuration/urlStrings";

export class EncodeService implements IEncodeService {
  cacheAccess: ICacheAccess;

  constructor(cacheAccess: ICacheAccess) {
    this.cacheAccess = cacheAccess;
  }

  async encodeURL(url: string): Promise<string> {
    const encodedURL = `${URL_PREFIX}/${Math.random()
      .toString(36)
      .substring(2, 10)}`;
    await this.cacheAccess.addToCache(encodedURL, url);

    return encodedURL;
  }
}
