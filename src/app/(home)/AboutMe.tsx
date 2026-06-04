import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { URLS } from "@/consts";

const socialLinks = [
  { icon: FaGithub, href: URLS.github, label: "GitHub" },
  { icon: FaLinkedin, href: URLS.linkedin, label: "LinkedIn" },
] as const;

export const AboutMe = () => (
  <section className="flex flex-col justify-center">
    <p className="mb-3 text-base font-semibold tracking-widest text-neutral-500 uppercase lg:mb-4">
      Andrew Zimmerly
    </p>
    <h1 className="text-[clamp(2.75rem,6vw,4rem)] leading-none font-semibold tracking-tight text-neutral-900 dark:text-white">
      Web developer.
    </h1>
    <p className="mt-4 max-w-md text-xl text-neutral-500 lg:text-2xl">
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
          className="text-neutral-400 transition-colors hover:text-neutral-700 dark:hover:text-neutral-200"
        >
          <Icon className="size-5" />
        </Link>
      ))}
    </div>
  </section>
);
