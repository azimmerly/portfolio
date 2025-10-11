import Link, { type LinkProps } from "next/link";
import type { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type ButtonLinkProps = {
  icon: IconType;
  secondary?: boolean;
  children: React.ReactNode;
} & LinkProps;

export const ButtonLink = ({
  secondary,
  icon: Icon,
  children,
  ...props
}: ButtonLinkProps) => (
  <Link
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className={twMerge(
      "flex items-center gap-1 rounded-md bg-gradient-to-br px-3.5 py-[7px] text-sm font-medium shadow transition",
      secondary
        ? "from-gray-100 to-gray-200 hover:brightness-97"
        : "shimmer from-gray-700 to-indigo-600 text-white hover:brightness-120",
    )}
  >
    <Icon className="size-3.5" aria-hidden="true" />
    {children}
  </Link>
);
