"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [bannerMessage, setBannerMessage] = useState("");

  // Add a loading state so the app doesn't flash the login screen while checking!
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        // Call your backend's checkAuth route
        const res = await fetch("http://localhost:5000/api/auth/check", {
          method: "GET",
          credentials: "include", // THIS IS CRITICAL: It tells the browser to send the httpOnly cookie!
        });

        const text = await res.text(); // Read it as text first to see the HTML
        const data = JSON.parse(text);

        if (res.ok && data.isAuthenticated) {
          // If the cookie is valid, log the user back in automatically!
          setCurrentUser(data.user);
        }
      } catch (err) {
        console.error("Failed to check authentication status", err);
      } finally {
        // Whether it succeeded or failed, we are done loading
        setIsLoading(false);
      }
    };

    checkLoggedInUser();
  }, []); // The empty array ensures this only runs ONCE when the app first loads

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, bannerMessage, setBannerMessage }}
    >
      {/* Wait until the check is completely finished before showing the app */}
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
