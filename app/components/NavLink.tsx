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
        "flex items-center gap-2 rounded-full px-4 py-2 font-medium transition",
        ariaCurrent ? "bg-zinc-100" : "hover:bg-zinc-100",
      )}
    >
      {children}
    </Link>
  );
};
