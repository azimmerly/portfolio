import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ExternalLinkProps = {
  href: string;
  minimal?: boolean;
  children: React.ReactNode;
};

export const ExternalLink = ({
  href,
  minimal = false,
  children,
}: ExternalLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={twMerge(
      "flex items-center gap-1 transition",
      minimal
        ? "underline hover:opacity-80"
        : "rounded-full border-none bg-zinc-800 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700",
    )}
  >
    {children}
  </Link>
);
