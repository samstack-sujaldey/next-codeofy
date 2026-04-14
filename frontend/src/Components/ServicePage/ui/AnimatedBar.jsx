"use client"
import { useEffect, useState } from "react";

export default function AnimatedBar({
  label,
  pct,
  color = "bg-gradient-to-r from-blue-400 to-blue-600",
  rightLabel,
  dark = false,
  delay = 0,
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 300 + delay);
    return () => clearTimeout(t);
  }, [pct, delay]);

  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span className={dark ? "text-gray-300 font-medium" : "text-gray-500 dark:text-gray-300 dark:font-medium"}>
          {label}
        </span>
        {rightLabel ? (
          <span
            className={
              dark ? "text-white font-bold" : "text-blue-600 dark:text-blue-400 font-semibold dark:font-bold"
            }
          >
            {rightLabel}
          </span>
        ) : (
          <span
            className={
              dark ? "text-white font-bold" : "text-blue-600 dark:text-blue-400 font-semibold dark:font-bold"
            }
          >
            {pct}%
          </span>
        )}
      </div>
      <div
        className={`h-2 rounded-full overflow-hidden ${
          dark ? "bg-white/10" : "bg-gray-100 dark:bg-white/10"
        }`}
      >
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}