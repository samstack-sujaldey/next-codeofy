"use client";
import { Mail, Phone, MapPin, Sun, Moon } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import logo from "@/assets/codeofylogo.png";

function Footer() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const router = useRouter();

  return (
    <>
      <footer className="bg-gray-100 dark:bg-gray-950 text-gray-700 dark:text-gray-400 pt-12 pb-3 px-3 transition-colors duration-300 border-t">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative flex items-center justify-center overflow-hidden shrink-0">
                <img src={logo.src} alt="Codeofy Logo" className="object-contain" />
              </div>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                Codeofy
              </h2>

              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>

            <p className="text-sm mb-4">
              Empowering enterprises with cutting-edge digital solutions and
              AI-driven experiences.
            </p>

            <div className="flex gap-4 text-lg">
              <a
                className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                href="https://www.instagram.com/codeofy.in/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={20} />
              </a>
              <a className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li
                onClick={() => router.push("web-development")}
                className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
              >
                Web Development
              </li>
              <li
                onClick={() => router.push("mobile-apps")}
                className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
              >
                Mobile Engineering
              </li>
              <li
                onClick={() => router.push("ai-automation")}
                className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
              >
                AI & ML Solutions
              </li>
              <li
                onClick={() => router.push("cloud-services")}
                className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
              >
                Cloud Strategy
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Community"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/Blog"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-black dark:text-white">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                <Mail size={16} /> support@codeofy.com
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                <Phone size={16} /> 86966 33382
              </li>
              <li className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                <MapPin size={16} /> Jaipur
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 py-4 text-center text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
          <p>© 2026 Codeofy. All rights reserved.</p>
          <div className="flex mt-4 md:mt-0 gap-4">
            <button className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </button>
            <button className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
