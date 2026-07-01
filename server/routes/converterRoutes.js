import express from "express";
import { convertCode } from "../controllers/converterController.js";

const router = express.Router();

router.post("/", convertCode);

export default router;