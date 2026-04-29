"use client";
import { useState } from "react";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import img from "@/assets/img.webp";
import { useAuth } from "@/app/context/AuthContext";

function Login() {
  const [rememberMe, setRememberMe] = useState(false);
  const [showpassword, setshowpassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { setCurrentUser, setBannerMessage } = useAuth();

  const icon = [
    {
      logo: "https://img.freepik.com/premium-vector/google-logo-icon-transparent-background_1273375-1570.jpg?semt=ais_rp_progressive&w=740&q=80",
      text: "Google",
      provider: "google",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      text: "GitHub",
      provider: "github",
    },
    {
      logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
      text: "LinkedIn",
      provider: "linkedin",
    },
    {
      logo: "https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png",
      text: "X",
      provider: "twitter",
    },
  ];

  // Manual Email/Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password, rememberMe }),
      });

      const data = await res.json();

      if (res.ok) {
        setCurrentUser(data.user);
        setBannerMessage("You have successfully logged in.");
        router.push("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // OAuth Login (Redirects to backend)
  const handleOAuthLogin = (provider) => {
    // Navigates away from React to let Express/Passport handle the redirect to Google/FB
    sessionStorage.setItem("justLoggedIn", "true");
    window.open(`http://localhost:5000/api/auth/${provider}`, "_self");
  };

  return (
    <div className="flex min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative rounded-r-2xl"
        style={{ backgroundImage: `url(${img.src})` }}
      ></div>

      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <div className="w-full max-w-md p-8">
          <h1 className="text-3xl text-black dark:text-white font-bold uppercase text-center">
            Welcome to Codeofy
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 mb-6 capitalize text-center">
            Put your details to Sign In
          </p>

          <form onSubmit={handleLogin}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg mb-4"
              required
            />

            <div className="relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={showpassword ? "text" : "password"}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 rounded-lg mb-4"
                required
              />
              <button
                type="button"
                onClick={() => setshowpassword(!showpassword)}
                className="absolute right-3 top-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              >
                {showpassword ? "Hide" : <Eye size={21} />}
              </button>
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="text-sm font-sans flex items-center cursor-pointer text-gray-700 dark:text-gray-300">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="mr-2 cursor-pointer"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-sm text-blue-700 dark:text-blue-400 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-full font-semibold capitalize hover:bg-blue-800 transition duration-300"
            >
              Sign In
            </button>
          </form>

          <div className="text-center text-gray-400 dark:text-gray-500 my-6 capitalize relative">
            <span className="bg-gray-100 dark:bg-gray-900 px-3 relative z-10">
              or continue with
            </span>
            <div className="absolute left-0 top-1/2 w-full h-px bg-gray-300 dark:bg-gray-700 z-0"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {icon.map((item, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleOAuthLogin(item.provider)}
                  className="border border-gray-300 dark:border-gray-700 dark:text-gray-200 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition duration-300"
                >
                  <Image
                    src={item.logo}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                    alt={`${item.text} logo`}
                  />
                  <span className="capitalize">{item.text}</span>
                </button>
              );
            })}
          </div>

          <p className="text-center text-sm mt-8 capitalize text-gray-600 dark:text-gray-400">
            Don't have an account?
            <span
              onClick={() => router.push("/Signup")}
              className="text-blue-600 dark:text-blue-400 ml-1 font-semibold cursor-pointer hover:underline"
            >
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
