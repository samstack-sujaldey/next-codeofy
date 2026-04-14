import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { limiter } from "./middlewares/rateLimiter.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL, // frontend
    credentials: true,
}));
app.use(express.json());
app.use(limiter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error(err))

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});

app.use(errorHandler);