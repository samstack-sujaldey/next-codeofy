"use client";
import { useAuth } from "@/app/context/AuthContext";
import { X, CheckCircle } from "lucide-react";

function WelcomeBanner() {
  // 1. Pull the new bannerMessage variables
  const { bannerMessage, setBannerMessage, currentUser } = useAuth();

  // 2. If the message is empty (""), render nothing
  if (!bannerMessage || !currentUser) return null;

  return (
    <div className="bg-green-500 dark:bg-green-600 text-white px-4 py-3 flex items-center justify-between shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center gap-2 w-full justify-center relative">
        <CheckCircle size={20} className="text-white" />

        {/* 3. Display the custom message dynamically! */}
        <p className="font-medium text-sm md:text-base">
          {bannerMessage}{" "}
          <span className="font-bold capitalize">{currentUser.username}</span>!
        </p>

        <button
          onClick={() => setBannerMessage("")}
          className="absolute right-0 hover:bg-green-600 dark:hover:bg-green-700 p-1 rounded-full transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

export default WelcomeBanner;
