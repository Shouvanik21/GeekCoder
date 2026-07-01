import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import converterRoutes from "./routes/converterRoutes.js";

import detectLanguageRoutes from "./routes/detectLanguageRoutes.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/detect-language", detectLanguageRoutes);

app.use("/api/convert", converterRoutes);

app.get("/", (req, res) => {
  res.send("GeekCoder Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
