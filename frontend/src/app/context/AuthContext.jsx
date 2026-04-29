"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [bannerMessage, setBannerMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/me", {
          method: "GET",
          credentials: "include",
        });

        const text = await res.text();
        const data = JSON.parse(text);

        if (res.ok && data.success) {
          setCurrentUser(data.user);

          // Handle the one-time OAuth Banner
          if (sessionStorage.getItem("justLoggedIn") === "true") {
            // Check how old the account is (in milliseconds)
            const accountCreationTime = new Date(data.user.createdAt).getTime();
            const rightNow = new Date().getTime();
            const timeSinceCreation = rightNow - accountCreationTime;

            // If the account is less than 60 seconds old, it's a new signup!
            if (timeSinceCreation < 60000) {
              setBannerMessage(
                "Account created successfully! Ready to build something amazing,",
              );
            } else {
              setBannerMessage("You have successfully logged in.");
            }

            // Clear the flag so it doesn't show on normal page refreshes
            sessionStorage.removeItem("justLoggedIn");

            // Auto-hide the banner after 5 seconds
            setTimeout(() => setBannerMessage(""), 5000);
          }
        }
      } catch (err) {
        console.error("Failed to check authentication status", err);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoggedInUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, bannerMessage, setBannerMessage }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
