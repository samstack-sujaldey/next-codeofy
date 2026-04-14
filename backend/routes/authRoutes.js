import express from "express";
import { login, register, checkAuth, logout } from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { body } from "express-validator";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.post(
    "/register",
    [
        body("username").notEmpty().withMessage("Username is required"),
        body("email").isEmail().withMessage("Valid email is required"),
        body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    ],
    validate,
    register
);

router.post("/login", login);

router.get("/check", checkAuth);

router.post("/logout", logout);

router.get("/profile", protect, (req, res) => {
    res.json({ message: "Access granted to protected route", user: req.user });
});

export default router;