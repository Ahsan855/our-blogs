"use client";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [showMdDarkMode, setShowMdDarkMode] = useState(false);

  const handleCiDarkClick = () => {
    setDarkMode(!darkMode);
    setShowMdDarkMode(true);
  };

  const handleMdDarkModeClick = () => {
    setDarkMode(!darkMode);
    setShowMdDarkMode(false);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div>
      {showMdDarkMode ? (
        <MdDarkMode
          onClick={handleMdDarkModeClick}
          className="ml-auto text-gray-600"
          size={18}
        />
      ) : (
        <MdLightMode
          onClick={handleCiDarkClick}
          className="text-white"
          size={18}
        />
      )}
    </div>
  );
}
