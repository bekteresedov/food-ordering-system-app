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
    if (theme === "system") {
      setTheme("dark");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    console.log(theme);
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
