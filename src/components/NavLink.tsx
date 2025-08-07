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
        "flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
        ariaCurrent ? "bg-gray-200/80" : "hover:bg-gray-200/80",
      )}
    >
      {children}
    </Link>
  );
};
