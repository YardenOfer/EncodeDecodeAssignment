import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { IURL } from "../interfaces/IURL";
import { DecodeService } from "../services/DecodeService";
import { CacheAccess } from "../Caches/CacheAccess";

export class DecodeController {
  decodeService: DecodeService;
  cacheAccess: CacheAccess;

  constructor() {
    this.cacheAccess = new CacheAccess();
    this.decodeService = new DecodeService(this.cacheAccess);
  }

  // decode a single URL
  decodeURL = async (req: Request, res: Response, next: NextFunction) => {
    // get the encoded URL from the req
    const encodedURL: string = req.query?.url as string;
    // get the decoded
    let result;
    try {
      result = await this.decodeService.decodeURL(encodedURL);
    } catch (e) {
      return res.status(404).json({
        error: (e as Error).message
      });
    }

    return res.status(200).json({
      message: result
    });
  };
}

export default { DecodeController };
