import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import avatar from "@/assets/avatar.svg";
import { ExternalLink } from "@/components/ExternalLink";
import { URLS } from "@/consts";
import { nunitoFont } from "@/fonts";

export const AboutMe = () => (
  <section className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-6">
    <Image
      priority
      draggable={false}
      src={avatar}
      alt="avatar"
      className="size-36 lg:size-44"
    />
    <div className="flex max-w-lg flex-col gap-3 lg:gap-2">
      <h1
        className={twMerge(
          "text-3xl font-bold lg:text-4xl",
          nunitoFont.className,
        )}
      >
        Hello!
      </h1>
      <p className="text-justify text-[15px] text-pretty lg:text-base lg:leading-6.5">
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
      <div className="flex gap-2.5">
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
