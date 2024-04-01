"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dark = resolvedTheme === "dark";

  if (!mounted) return null;

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="text-primary hover:text-primary flex items-center rounded-lg bg-gray-300 p-2 hover:cursor-pointer dark:bg-gray-600"
      onClick={() => setTheme(`${dark ? "light" : "dark"}`)}
    >
      {dark ? (
        <LuSun className="hover:text-primary hover:cursor-pointer" />
      ) : (
        <LuMoon className="hover:text-primary hover:cursor-pointer" />
      )}
    </button>
  );
};

export default ThemeSwitch;
