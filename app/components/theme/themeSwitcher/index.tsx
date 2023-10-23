"use client";
import { useTheme } from "next-themes";
import React from "react";
import { CiDark } from "react-icons/ci";
import { BsSun } from "react-icons/bs";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isLightMode: boolean = theme === "light";
  const isDarkMode: boolean = theme === "dark";

  const toggleMode = (): void => {
    if (isLightMode) {
      setTheme("dark");
    } else if (isDarkMode) {
      setTheme("light");
    }
  };
  return (
    <>
      {isLightMode ? (
        <CiDark
          className="text-lg hover:text-red transition-all"
          onClick={() => toggleMode()}
        />
      ) : (
        <BsSun
          className="text-lg hover:text-red transition-all"
          onClick={() => toggleMode()}
        />
      )}
    </>
  );
};

export default ThemeSwitcher;
