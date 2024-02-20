import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa6";

import { ExternalLink } from "@/app/components";

export type ProjectCardProps = {
  image: StaticImageData;
  title: string;
  tech: string[];
  description: string;
  projectLink: string;
  githubLink: string;
};

export const ProjectCard = ({
  image,
  title,
  tech,
  description,
  projectLink,
  githubLink,
}: ProjectCardProps) => (
  <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-10">
    <Link href={projectLink} target="_blank" rel="noopener noreferrer">
      <Image
        priority
        src={image}
        alt={title}
        className="h-auto w-full max-w-md rounded shadow lg:w-96"
      />
    </Link>
    <div className="flex max-w-md flex-col gap-3 lg:max-w-full">
      <h2 className="font-nunito text-3xl font-semibold">{title}</h2>
      <div className="mb-1 flex flex-wrap gap-1">
        {tech.map((techItem) => (
          <p
            key={techItem}
            className="rounded-lg bg-zinc-100 px-2.5 py-0.5 text-sm font-medium text-zinc-800"
          >
            {techItem}
          </p>
        ))}
      </div>
      <p className="mb-1 flex leading-7">{description}</p>
      <div className="flex gap-2">
        <ExternalLink href={projectLink}>
          <FaArrowRight className="h-4 w-4" />
          View Project
        </ExternalLink>
        <ExternalLink href={githubLink}>
          <FaGithub className="h-4 w-4" />
          GitHub
        </ExternalLink>
      </div>
    </div>
  </div>
);
