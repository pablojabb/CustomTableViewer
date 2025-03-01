import { useEffect, useState } from "react";
import { Storage } from "@plasmohq/storage";

const storage = new Storage();

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await storage.get("theme");
      if (savedTheme) {
        setDarkMode(savedTheme === "dark");
      } else {
        // Auto-detect system theme if no stored value
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setDarkMode(systemPrefersDark);
        await storage.set("theme", systemPrefersDark ? "dark" : "light");
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    const applyTheme = async () => {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        await storage.set("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        await storage.set("theme", "light");
      }
    };
    applyTheme();
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 bg-light-m-btn dark:bg-dark-m-btn rounded-lg transition"
    >
      {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
