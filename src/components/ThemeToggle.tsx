"use client";

import { useTheme } from "next-themes";
import { twMerge, type ClassNameValue } from "tailwind-merge";

import { useIsMounted } from "@/utils/useIsMounted";
import { IoMoon, IoSunny } from "react-icons/io5";

export const ThemeToggle = ({ className }: { className?: ClassNameValue }) => {
  const isMounted = useIsMounted();
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!isMounted || !resolvedTheme) {
    return <div className="size-6" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={twMerge(
        "hidden size-6 cursor-pointer items-center justify-center self-center rounded-full transition-opacity hover:opacity-80 lg:flex",
        className,
      )}
    >
      <span className="sr-only">Toggle theme</span>
      {resolvedTheme === "dark" ? (
        <IoSunny aria-hidden="true" className="size-5 fill-mist-400" />
      ) : (
        <IoMoon aria-hidden="true" className="size-5 fill-mist-400" />
      )}
    </button>
  );
};
