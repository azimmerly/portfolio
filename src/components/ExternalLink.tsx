import Link, { type LinkProps } from "next/link";
import type { IconType } from "react-icons";

type ExternalLinkProps = {
  icon: IconType;
  children: React.ReactNode;
} & LinkProps;

export const ExternalLink = ({
  icon: Icon,
  children,
  ...props
}: ExternalLinkProps) => (
  <Link
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-0.5 rounded text-sm font-medium underline transition hover:text-gray-600"
  >
    <Icon className="size-3.5" aria-hidden="true" />
    {children}
  </Link>
);
