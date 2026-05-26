"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  children: React.ReactNode;
} & LinkProps<string>;

export const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const ariaCurrent = href === pathname ? "page" : undefined;

  const stateClasses = ariaCurrent
    ? "pointer-events-none border-mist-900 text-mist-900 dark:border-white dark:text-white"
    : "border-transparent text-mist-500 hover:text-mist-900 dark:hover:text-white";

  return (
    <Link
      href={href}
      aria-current={ariaCurrent}
      className={`border-b-2 pb-0.5 text-[15px] font-medium transition-colors ${stateClasses}`}
    >
      {children}
    </Link>
  );
};
