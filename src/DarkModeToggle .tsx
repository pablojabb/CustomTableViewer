import { useEffect, useState } from "react";
import { Storage } from "@plasmohq/storage";
import "index.css"

const storage = new Storage();

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null); // Initially null to prevent flicker

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await storage.get("theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      } else {
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(systemPrefersDark);
        await storage.set("theme", systemPrefersDark ? "dark" : "light");
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    if (darkMode === null) return; // Prevent initial flickering
    document.documentElement.classList.toggle("dark", darkMode);
    storage.set("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden peer"
        checked={darkMode ?? false}
        onChange={() => setDarkMode((prev) => !prev)}
      />
      <div className="flex items-center justify-center w-6 h-6 mx-2 ">
        {/* Moon Icon (Dark Mode) */}
        <svg
          className={`absolute stroke-sky-800 w-6 h-6 transition-opacity  ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
          height="100"
          viewBox="0 0 100 100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </svg>

        {/* Sun Icon (Light Mode) */}
        <svg
          className={`absolute stroke-yellow-500 w-7 h-7 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
          height="100"
          viewBox="0 0 100 100"
          width="100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
          />
        </svg>
      </div>
    </label>
  );
};

export default DarkModeToggle;
