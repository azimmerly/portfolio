"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

export const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const ariaCurrent = href === pathname ? "page" : undefined;

  return (
    <Link
      href={href}
      aria-current={ariaCurrent}
      className={twMerge(
        "flex items-center gap-1 rounded-md bg-gradient-to-br px-4 py-2 text-sm font-medium",
        ariaCurrent
          ? "pointer-events-none from-gray-100 to-gray-200 shadow"
          : "hover:from-gray-100 hover:to-gray-200 hover:shadow",
      )}
    >
      {children}
    </Link>
  );
};
