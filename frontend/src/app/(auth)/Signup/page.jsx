"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useState } from "react";
import { Eye } from "lucide-react";
import img from "@/assets/signupImg.jpg";
import { useRouter } from "next/navigation";

function Signin() {
  const [showpassword, setshowpassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { setCurrentUser, setBannerMessage } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        },
      );

      const data = await res.json();
      if (res.ok) {
        setCurrentUser(data.user);
        setBannerMessage(
          "Account created successfully! Ready to build something amazing,",
        );
        console.log(data);
        router.push("/");
      } else {
        if (data.errors) {
          alert(data.errors[0].msg);
        } else {
          alert(data.message || "Registration failed. Please try again");
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <div className="w-full max-w-md p-8 flex-col items-center">
            {/* <img
              src={logo}
              alt="Codeofy Logo"
              className="w-24 h-auto mb-4 hover:scale-105 transition-transform duration-300"
            /> */}
            <h1 className="text-3xl text-black dark:text-white font-bold uppercase flex justify-center text-center">
              Welcome to Codeofy
            </h1>

            <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6 capitalize flex justify-center text-center">
              Please enter your details to create account
            </p>

            <form onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Username"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg mb-4 transition-colors"
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg mb-4 transition-colors"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <div className="relative">
                <input
                  type={showpassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg mb-4 transition-colors"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setshowpassword(!showpassword)}
                  className="absolute right-3 top-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                >
                  {showpassword ? "Hide" : <Eye size={21} />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold capitalize transition duration-300"
              >
                Sign Up
              </button>
            </form>

            <div className="text-center text-sm mt-6 capitalize w-full flex justify-center gap-1 text-gray-600 dark:text-gray-400">
              Already have an account?
              <button
                type="button"
                onClick={() => router.push("/Login")}
                className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2 bg-gray-100 dark:bg-gray-900">
          <img
            src={img.src}
            alt="login"
            className="w-full h-full object-cover rounded-l-2xl"
          />
        </div>
      </div>
    </>
  );
}
export default Signin;
