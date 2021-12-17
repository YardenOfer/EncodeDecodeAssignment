import express from "express";
import { EncodeController } from "../controllers/encodeController";

const router = express.Router();

const encodeController = new EncodeController();

router.post("/encode", encodeController.encodeURL);

export = router;
