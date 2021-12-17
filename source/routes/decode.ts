import express from "express";
import { DecodeController } from "../controllers/decodeController";

const router = express.Router();

const decodeController = new DecodeController();

router.get("/decode", decodeController.decodeURL);

export = router;
