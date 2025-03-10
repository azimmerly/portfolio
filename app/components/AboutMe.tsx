import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import { ExternalLink } from "@/app/components";
import { nunitoFont } from "@/app/fonts";
import avatar from "@/public/avatar.svg";

export const AboutMe = () => (
  <section className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
    <Image src={avatar} alt="avatar" className="size-52" priority />
    <div className="flex max-w-lg flex-col gap-3">
      <h1 className={twMerge("text-4xl font-bold", nunitoFont.className)}>
        <span role="img" aria-label="hand waving" className="mr-3">
          👋
        </span>
        Hello!
      </h1>
      <p className="leading-7">
        My name is Andrew and I’m a web developer from San Diego. Here you can
        view some of my projects and get in touch.
      </p>
      <div className="flex gap-6">
        <ExternalLink href="https://github.com/azimmerly" minimal>
          <FaGithub className="size-4" />
          GitHub
        </ExternalLink>
        <ExternalLink href="https://linkedin.com/in/andrewzimmerly" minimal>
          <FaLinkedin className="size-4" />
          LinkedIn
        </ExternalLink>
      </div>
    </div>
  </section>
);
