import express from "express";
import {
  login,
  register,
  checkAuth,
  logout,
} from "../controllers/authController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { body } from "express-validator";
import { validate } from "../middlewares/validate.js";
import passport from "passport";
import User from "../models/User.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  validate,
  register,
);

router.post("/login", login);

router.get("/check", checkAuth);

router.post("/logout", logout);

router.get("/profile", protect, (req, res) => {
  res.json({ message: "Access granted to protected route", user: req.user });
});

// --- GOOGLE ROUTES ---
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL, // Redirect to Next.js home
    failureRedirect: `${process.env.FRONTEND_URL}/Login`, // Redirect back to login on fail
  }),
);

// --- GITHUB ROUTES ---
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
);
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.FRONTEND_URL,
    failureRedirect: `${process.env.FRONTEND_URL}/Login`,
  }),
);

// --- LINKEDIN ROUTES ---
router.get("/linkedin", passport.authenticate("linkedin"));
router.get(
  "/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: process.env.FRONTEND_URL,
    failureRedirect: `${process.env.FRONTEND_URL}/Login`,
  }),
);

// --- TWITTER (X) ROUTES ---
router.get(
  "/twitter",
  passport.authenticate("twitter", {
    scope: ["tweet.read", "users.read", "offline.access"],
  }),
);

// 2. Replace the callback route with this Custom Handler
router.get("/twitter/callback", (req, res, next) => {
  passport.authenticate("twitter", (err, user, info) => {
    if (err) return next(err);

    // If there is no user, check if it's because we need an email
    if (!user) {
      if (info && info.message === "email_required") {
        const { twitterId, name } = info.profileData;
        // Redirect to Next.js with the data in the URL
        return res.redirect(
          `${process.env.FRONTEND_URL}/complete-profile?twitterId=${twitterId}&name=${encodeURIComponent(name)}`,
        );
      }
      // If it failed for another reason (user canceled, wrong password), go to login
      return res.redirect(`${process.env.FRONTEND_URL}/Login`);
    }

    // Success! Log the user in and redirect to dashboard
    req.logIn(user, (loginErr) => {
      if (loginErr) return next(loginErr);
      return res.redirect(process.env.FRONTEND_URL);
    });
  })(req, res, next); // <--- This funky syntax executes the custom callback
});

router.post("/complete-social", async (req, res) => {
  const { twitterId, name, email } = req.body;

  if (!email || !twitterId) {
    return res.status(400).json({ message: "Email is required" });
  }

  try {
    // 1. Check if an account already exists with this email
    let user = await User.findOne({ email });

    if (user) {
      // Link the accounts!
      user.twitterId = twitterId;
      await user.save();
    } else {
      // Create a brand new user
      user = await User.create({
        twitterId,
        username: name,
        email,
      });
    }

    // 2. Manually log the user into the session
    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ message: "Login failed" });
      return res.status(200).json({ success: true, user });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during account completion" });
  }
});

// --- SESSION CHECK ROUTE ---
// Your Next.js app will call this on page load to see if a user is logged in
router.get("/me", (req, res) => {
  if (req.user) {
    res.status(200).json({ success: true, user: req.user });
  } else {
    res.status(401).json({ success: false, message: "Not authenticated" });
  }
});

// --- LOGOUT ROUTE ---
router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) return next(err);
    res.status(200).json({ message: "Logged out successfully" });
  });
});

export default router;
