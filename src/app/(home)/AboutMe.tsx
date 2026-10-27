import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { URLS } from "@/consts";

const socialLinks = [
  { icon: FaGithub, href: URLS.github, label: "GitHub" },
  { icon: FaLinkedin, href: URLS.linkedin, label: "LinkedIn" },
] as const;

export const AboutMe = () => (
  <section className="flex flex-col justify-center">
    <p className="mb-3 text-base font-semibold tracking-widest text-neutral-500 uppercase lg:mb-4 dark:text-neutral-400">
      Andrew Zimmerly
    </p>
    <h1 className="text-[clamp(2.25rem,6vw,4rem)] leading-none font-semibold tracking-tight text-neutral-900 dark:text-white">
      Software engineer.
    </h1>
    <p className="mt-4 max-w-md text-[19px] text-neutral-500 lg:text-2xl dark:text-neutral-400">
      Full-stack. Building things for the web.
    </p>
    <div className="mt-5 flex items-center gap-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="-m-1 p-1 text-neutral-500 transition-colors hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200"
        >
          <Icon className="size-5" />
        </Link>
      ))}
    </div>
  </section>
);
