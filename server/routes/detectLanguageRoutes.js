import express from "express";
import { detectLanguage } from "../controllers/detectLanguageController.js";

const router = express.Router();

router.post("/", detectLanguage);

export default router;