import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { EncodeService } from "../services/EncodeService";
import { CacheAccess } from "../Caches/CacheAccess";

export class EncodeController {
  encodeService: EncodeService;
  cacheAccess: CacheAccess;

  constructor() {
    this.cacheAccess = new CacheAccess();
    this.encodeService = new EncodeService(this.cacheAccess);
  }

  // encode a URL
  encodeURL = async (req: Request, res: Response, next: NextFunction) => {
    // get the data from req.body
    const url: string = req.body.url;
    const body: string = req.body.body;
    // add the url
    const response = await this.encodeService.encodeURL(url);
    // return response
    return res.status(200).json({
      message: response,
    });
  };
}

export default { EncodeController };
