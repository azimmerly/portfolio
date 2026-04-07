import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import avatar from "@/assets/avatar.png";
import { ExternalLink } from "@/components/ExternalLink";
import { URLS } from "@/consts";

export const AboutMe = () => (
  <section className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-6">
    <Image
      priority
      draggable={false}
      src={avatar}
      alt="avatar"
      sizes="(min-width: 1024px) 166px, 136px"
      className="h-36 w-auto lg:h-44"
    />
    <div className="mt-3 flex max-w-lg flex-col gap-2 lg:pl-2">
      <h1 className="text-3xl font-semibold lg:text-4xl">Hello!</h1>
      <p className="text-justify text-[15px] text-pretty lg:text-base">
        My name is Andrew and I’m a web developer from San Diego. Here you can
        view some of my projects and{" "}
        <Link
          href="/contact"
          className="rounded underline underline-offset-[1.5px] hover:opacity-80"
        >
          get in touch
        </Link>
        .
      </p>
      <div className="flex gap-4">
        <ExternalLink icon={FaGithub} href={URLS.github}>
          GitHub
        </ExternalLink>
        <ExternalLink icon={FaLinkedin} href={URLS.linkedin}>
          LinkedIn
        </ExternalLink>
      </div>
    </div>
  </section>
);
