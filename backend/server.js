import "dotenv/config";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { limiter } from "./middlewares/rateLimiter.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";
import "./config/passport.js";

const app = express();

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  }),
);

// 2. Setup Express Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if using HTTPS in production
      maxAge: 24 * 60 * 60 * 1000, // 1 Day
    },
  }),
);

// 3. Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(limiter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/api/auth", authRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running on port 5000");
});

app.use(errorHandler);
