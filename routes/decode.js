import express from "express";
import {
  decodeGetController,
  decodePostController,
} from "../controllers/decodeController.js";

const router = express.Router();

router.get("/", decodeGetController);
router.post("/", decodePostController);

export default router;
