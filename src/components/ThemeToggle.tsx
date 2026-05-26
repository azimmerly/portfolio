"use client";

import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

import { useIsMounted } from "@/utils/useIsMounted";

export const ThemeToggle = () => {
  const isMounted = useIsMounted();
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!isMounted || !resolvedTheme) {
    return <div className="size-8" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="mr-auto flex size-8 cursor-pointer items-center justify-center rounded-full text-mist-400 transition-colors hover:bg-mist-200 hover:text-mist-600 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-hidden dark:hover:bg-mist-800 dark:hover:text-mist-300"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        key={resolvedTheme}
        aria-hidden="true"
        className="animate-spin-in block"
      >
        {resolvedTheme === "dark" ? (
          <IoSunny className="size-5" />
        ) : (
          <IoMoon className="size-5" />
        )}
      </span>
    </button>
  );
};
