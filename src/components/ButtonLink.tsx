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
      "flex transform-gpu items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium transition will-change-transform hover:scale-102",
      secondary ? "border border-gray-800 bg-white" : "bg-gray-800 text-white",
    )}
  >
    <Icon className="size-3.5" aria-hidden="true" />
    {children}
  </Link>
);
