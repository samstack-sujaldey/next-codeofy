"use client";

import { useState, useContext } from "react";
import {
  ChevronDown,
  ChevronUp,
  User,
  LogOut,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // <-- Added Next.js Image import
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeContext } from "./ThemeContext";
import logo from "../assets/codeofylogo.png";
import { useAuth } from "@/app/context/AuthContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const router = useRouter();
  const pathname = usePathname();

  const { currentUser, setCurrentUser } = useAuth();

  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Career", path: "/career" },
    { name: "Blog", path: "/blog" },
    { name: "Case study", path: "/case-study" },
    { name: "Community", path: "/community" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
  ];

  const servicesLinks = [
    { name: "Web Development", path: "/web-development" },
    { name: "Mobile Apps", path: "/mobile-apps" },
    { name: "AI & Automation", path: "/ai-automation" },
    { name: "Cloud Services", path: "/cloud-services" },
    { name: "UI/UX Design", path: "/ui-ux-design" },
    { name: "API Integration", path: "/api-integration" },
    { name: "Software Development", path: "/software-development" },
    { name: "IT Consulting", path: "/it-consulting" },
  ];

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setCurrentUser(null);
      setDropdownOpen(false);
      router.push("/Login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-4 top-0 z-50 transition-colors duration-300 sticky">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="w-12 h-12 relative flex items-center justify-center overflow-hidden shrink-0">
            <Image
              src={logo}
              alt="Codeofy Logo"
              width={144}
              height={144}
              className="absolute w-[300%] h-[300%] object-contain max-w-none mt-2"
            />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Codeofy</h1>
        </div>

        <ul className="hidden lg:flex items-center gap-4 xl:gap-8 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            if (link.name === "Services") {
              return (
                <li key={link.path} className="relative py-1 group">
                  <Link
                    href={link.path}
                    className={`flex items-center gap-1 cursor-pointer font-semibold transition-colors duration-300 ${
                      isActive || pathname.includes(link.path)
                        ? "text-blue-700 dark:text-blue-400"
                        : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                    {(isActive || pathname.includes(link.path)) && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-700 dark:bg-blue-400"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>

                  <div className="absolute top-full -left-4 pt-4 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-xl py-2 flex flex-col">
                      {servicesLinks.map((subLink) => {
                        const isSubActive = pathname === subLink.path;
                        return (
                          <Link
                            key={subLink.path}
                            href={subLink.path}
                            className={`px-4 py-2.5 text-sm transition-colors duration-200 ${
                              isSubActive
                                ? "text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-gray-700/50 font-bold"
                                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white hover:bg-blue-50 dark:hover:bg-gray-700"
                            }`}
                          >
                            {subLink.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={link.path} className="relative py-1">
                <Link
                  href={link.path}
                  className={`cursor-pointer font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-blue-700 dark:text-blue-400"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-700 dark:bg-blue-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons */}
        <div className="hidden lg:flex space-x-3 xl:space-x-4 items-center">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold uppercase text-xs">
                  {currentUser.username.charAt(0)}
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 capitalize">
                  {currentUser.username}
                </span>
                <ChevronDown
                  size={16}
                  className="text-gray-500 dark:text-gray-400"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl shadow-lg py-2 overflow-hidden">
                  <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700 mb-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Signed in as
                    </p>
                    <p className="text-sm font-bold truncate dark:text-white">
                      {currentUser.email}
                    </p>
                  </div>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center">
                    <User size={16} className="mr-2" /> My Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-gray-700 flex items-center transition-colors"
                  >
                    <LogOut size={16} className="mr-2" /> Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => router.push("/Login")}
                className="border border-black dark:border-white px-5 py-2 rounded-lg hover:bg-blue-700 hover:text-white hover:border-blue-700 dark:hover:border-blue-700 dark:hover:bg-blue-700 transition duration-300"
              >
                Log In
              </button>
              <button
                onClick={() => router.push("/Signup")}
                className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition duration-300"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-yellow-400"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <div
            className="p-1 cursor-pointer text-gray-800 dark:text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full max-h-[calc(100vh-80px)] overflow-y-auto pb-10 bg-white dark:bg-gray-900 shadow-xl border-t border-gray-100 dark:border-gray-800 px-6 py-4 space-y-2 transition-colors duration-300">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            if (link.name === "Services") {
              return (
                <div key={link.path}>
                  <div className="flex items-center justify-between py-2">
                    <Link
                      href={link.path}
                      onClick={() => setOpen(false)}
                      className={`flex-1 ${
                        isActive || pathname.includes(link.path)
                          ? "text-blue-700 dark:text-blue-400 font-bold border-l-4 border-blue-700 dark:border-blue-400 pl-2"
                          : "text-gray-600 dark:text-gray-300 pl-2"
                      }`}
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-2 text-gray-500 dark:text-gray-400"
                    >
                      {mobileServicesOpen ? (
                        <ChevronUp size={18} />
                      ) : (
                        <ChevronDown size={18} />
                      )}
                    </button>
                  </div>

                  {mobileServicesOpen && (
                    <div className="flex flex-col ml-3 pl-4 border-l-2 border-gray-100 dark:border-gray-700 space-y-3 mt-2 mb-2">
                      {servicesLinks.map((subLink) => (
                        <Link
                          key={subLink.path}
                          href={subLink.path}
                          onClick={() => setOpen(false)}
                          className={`text-sm ${
                            pathname === subLink.path
                              ? "text-blue-700 dark:text-blue-400 font-bold"
                              : "text-gray-500 dark:text-gray-400"
                          }`}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`block py-2 ${
                    isActive
                      ? "text-blue-700 dark:text-blue-400 font-bold border-l-4 border-blue-700 dark:border-blue-400 pl-2"
                      : "text-gray-600 dark:text-gray-300 pl-2"
                  }`}
                >
                  {link.name}
                </Link>
              </div>
            );
          })}

          {/* Mobile Auth Actions */}
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            {currentUser ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold uppercase">
                    {currentUser.username.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold capitalize dark:text-white">
                      {currentUser.username}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {currentUser.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="w-full flex items-center justify-center text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900 bg-red-50 dark:bg-gray-800 py-2 rounded-lg"
                >
                  <LogOut size={18} className="mr-2" /> Log Out
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <button
                  onClick={() => {
                    router.push("/Login");
                    setOpen(false);
                  }}
                  className="w-full border border-black dark:border-white py-2 rounded-lg dark:text-white"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    router.push("/Signup");
                    setOpen(false);
                  }}
                  className="w-full bg-blue-700 text-white py-2 rounded-lg"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
