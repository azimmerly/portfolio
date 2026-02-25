import Link, { type LinkProps } from "next/link";
import type { IconType } from "react-icons";

type ExternalLinkProps = {
  icon: IconType;
  children: React.ReactNode;
} & LinkProps<string>;

export const ExternalLink = ({
  icon: Icon,
  children,
  ...props
}: ExternalLinkProps) => (
  <Link
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-0.75 rounded text-[15px] underline hover:opacity-80"
  >
    <Icon className="size-3.75" aria-hidden="true" />
    {children}
  </Link>
);
