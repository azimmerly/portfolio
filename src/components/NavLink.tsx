"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type NavLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const NavLink = ({ children, href, ...props }: NavLinkProps) => {
  const pathname = usePathname();
  const ariaCurrent = href === pathname ? "page" : undefined;

  return (
    <Link
      {...props}
      href={href}
      aria-current={ariaCurrent}
      className={twMerge(
        "flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition focus:outline-gray-800",
        ariaCurrent ? "bg-gray-200/70" : "hover:bg-gray-200/70",
      )}
    >
      {children}
    </Link>
  );
};
