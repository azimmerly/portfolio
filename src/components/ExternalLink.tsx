import Link, { type LinkProps } from "next/link";
import { twMerge } from "tailwind-merge";

type ExternalLinkProps = {
  minimal?: boolean;
  children: React.ReactNode;
} & LinkProps;

export const ExternalLink = ({
  href,
  minimal,
  children,
  ...props
}: ExternalLinkProps) => (
  <Link
    {...props}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={twMerge(
      "flex transform-gpu items-center text-sm font-medium outline-offset-2 transition will-change-transform focus:outline-gray-800",
      minimal
        ? "-mx-1 gap-0.5 rounded px-1 underline hover:text-gray-800/80"
        : "gap-1 rounded-full border-none bg-gray-800 px-3.5 py-2 text-white hover:scale-102 hover:bg-gray-700",
    )}
  >
    {children}
  </Link>
);
