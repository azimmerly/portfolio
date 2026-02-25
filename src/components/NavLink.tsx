"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type NavLinkProps = {
  children: React.ReactNode;
} & LinkProps<string>;

export const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const ariaCurrent = href === pathname ? "page" : undefined;

  return (
    <Link
      href={href}
      aria-current={ariaCurrent}
      className={twMerge(
        "flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium",
        ariaCurrent
          ? "pointer-events-none bg-mist-200/70 dark:bg-mist-800"
          : "hover:bg-mist-200/70 dark:hover:bg-mist-800",
      )}
    >
      {children}
    </Link>
  );
};
