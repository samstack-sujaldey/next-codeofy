import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // 1. THIS is where we intercept the duplicate email!
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "This email is already registered. Please log in instead.",
      });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashed,
    });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "1d" },
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    const { password: _, ...userData } = user._doc;
    res
      .status(201)
      .json({ message: "Registered and logged in!", user: userData });
  } catch (err) {
    // 2. We keep this here just as a failsafe, in case two people
    // try to register the exact same email at the exact same millisecond!
    if (err.code === 11000) {
      if (err.keyPattern && err.keyPattern.email) {
        return res.status(400).json({
          success: false,
          message: "This email is already registered. Please log in instead.",
        });
      }
    }

    console.error("Registration Error:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred during registration. Please try again.",
    });
  }
};

// CHECK AUTH - Used to keep the user logged in on page refresh
export const checkAuth = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .json({ isAuthenticated: false, message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret123");
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res
        .status(404)
        .json({ isAuthenticated: false, message: "User not found" });
    }

    res.json({ isAuthenticated: true, user });
  } catch (err) {
    res
      .status(401)
      .json({ isAuthenticated: false, message: "Invalid or expired token" });
  }
};

// LOGOUT - Clears the cookie from the browser
export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    sameSite: "lax",
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
};

// LOGIN - Update this to set the cookie!
export const login = async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const expiresInDays = rememberMe ? 7 : 1;
    const expiresInString = `${expiresInDays}d`;
    const maxAgeMs = expiresInDays * 24 * 60 * 60 * 1000;

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "secret123",
      {
        expiresIn: expiresInString,
      },
    );

    // Set the cookie exactly like in Register
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: maxAgeMs,
    });

    const { password: _, ...userData } = user._doc;
    res.json({ message: "Login successful", user: userData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
