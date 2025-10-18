import Link, { type LinkProps } from "next/link";
import type { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type ButtonLinkProps = {
  icon: IconType;
  secondary?: boolean;
  children: React.ReactNode;
} & LinkProps<string>;

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
      "flex w-full items-center justify-center gap-1 rounded-md bg-gradient-to-br px-4 py-2 text-sm font-medium shadow transition lg:w-fit",
      secondary
        ? "from-gray-100 to-gray-200 hover:brightness-97"
        : "animate-shimmer from-blue-500 to-blue-700 text-white hover:brightness-120",
    )}
  >
    <Icon className="size-3.5" aria-hidden="true" />
    {children}
  </Link>
);
