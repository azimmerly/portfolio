"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
} & LinkProps<string>;

export const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const ariaCurrent = href === pathname ? "page" : undefined;

  const activeStyles = ariaCurrent
    ? "pointer-events-none border-neutral-800 text-neutral-800 dark:border-neutral-100 dark:text-neutral-100"
    : "border-transparent text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100";

  return (
    <Link
      href={href}
      aria-current={ariaCurrent}
      className={`border-b-2 pb-0.5 text-sm font-medium tracking-wider uppercase transition-colors ${activeStyles}`}
    >
      {children}
    </Link>
  );
};
