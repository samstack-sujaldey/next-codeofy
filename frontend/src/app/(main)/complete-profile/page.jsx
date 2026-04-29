"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function CompleteProfile() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const twitterId = searchParams.get("twitterId");
  const name = searchParams.get("name");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/complete-social", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Make sure to include credentials so the session cookie gets saved!
        credentials: "include", 
        body: JSON.stringify({ twitterId, name, email }),
      });

      const data = await res.json();

      if (res.ok) {
        // Success! Send them to the dashboard and trigger your AuthContext check
        window.location.href = "/"; 
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to connect to server.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="p-8 bg-white rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Almost there, {name}!</h2>
        <p className="mb-6 text-gray-600">
          X (Twitter) didn't provide an email address. We need this to secure your Codeofy account.
        </p>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Complete Account Setup
          </button>
        </form>
      </div>
    </div>
  );
}