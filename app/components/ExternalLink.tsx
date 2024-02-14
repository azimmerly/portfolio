import Link from "next/link";

type ExternalLinkProps = {
  href: string;
  minimal?: boolean;
  children: React.ReactNode;
};

export const ExternalLink = ({
  href,
  minimal = false,
  children,
}: ExternalLinkProps) => {
  const classNames = minimal
    ? "flex items-center gap-1 text-zinc-800 underline transition hover:opacity-80"
    : "flex items-center gap-2 rounded-full border-none bg-zinc-800 px-4 py-2 text-white transition hover:bg-zinc-700 text-sm font-medium";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames}
    >
      {children}
    </Link>
  );
};
