"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className="flex items-center gap-2 rounded-full px-4 py-2 font-medium text-zinc-800 transition hover:bg-zinc-50"
    >
      {children}
    </Link>
  );
};
