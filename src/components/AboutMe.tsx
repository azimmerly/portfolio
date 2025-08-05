import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import avatar from "@/assets/avatar.svg";
import { ExternalLink } from "@/components/ExternalLink";
import { nunitoFont } from "@/fonts";

export const AboutMe = () => (
  <section className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row">
    <Image
      priority
      draggable={false}
      src={avatar}
      alt="avatar"
      className="size-36 md:size-44"
    />
    <div className="flex max-w-lg flex-col gap-2">
      <h1
        className={twMerge(
          "text-3xl font-bold md:text-4xl",
          nunitoFont.className,
        )}
      >
        Hello!
      </h1>
      <p className="text-justify text-pretty md:leading-6.5">
        My name is Andrew and I’m a web developer from San Diego. Here you can
        view some of my projects and get in touch.
      </p>
      <div className="flex gap-2.5">
        <ExternalLink icon={FaGithub} href="https://github.com/azimmerly">
          GitHub
        </ExternalLink>
        <ExternalLink
          icon={FaLinkedin}
          href="https://linkedin.com/in/andrewzimmerly"
        >
          LinkedIn
        </ExternalLink>
      </div>
    </div>
  </section>
);
