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
        "flex items-center gap-1 rounded-md bg-linear-to-br px-4 py-2 text-sm font-medium",
        ariaCurrent
          ? "pointer-events-none from-gray-100 to-gray-200 shadow dark:from-gray-600/90 dark:to-gray-800"
          : "hover:from-gray-100 hover:to-gray-200 hover:shadow dark:hover:from-gray-600/90 dark:hover:to-gray-800",
      )}
    >
      {children}
    </Link>
  );
};
