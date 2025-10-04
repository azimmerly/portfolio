import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import gradientIcon from "@/assets/gradient-icon.png";
import gradientImage from "@/assets/gradient-image.png";
import movieIcon from "@/assets/movie-icon.png";
import movieImage from "@/assets/movie-image.png";
import { ButtonLink } from "@/components/ButtonLink";
import { nunitoFont } from "@/fonts";

const PROJECTS = [
  {
    image: movieImage,
    icon: movieIcon,
    title: "Movie Tracker",
    description:
      "A full-stack web app that lets you create and share personalized lists of your favorite movies. Authentication options include email/password and social login via GitHub. Users can rate movies and designate favorites, making it easy to keep tabs on your watch history and see what friends are enjoying. Movie data is fetched from The Movie Database API and stored securely in a PostgreSQL database.",
    tech: [
      "React",
      "NextJS",
      "Typescript",
      "Tailwind CSS",
      "Better Auth",
      "PostgreSQL",
      "Drizzle ORM",
      "Movie Database API",
      "Dark mode",
    ],
    link: "https://movie-tracker.andrewzimmerly.com",
    githubLink: "https://github.com/azimmerly/movie-tracker",
  },
  {
    image: gradientImage,
    icon: gradientIcon,
    title: "Gradient Generator",
    description:
      "A simple and intuitive CSS gradient generator. Gradients can be customized using draggable color stops and set to either linear or radial style, with a live preview. The generated CSS code can then be copied to the clipboard.",
    tech: ["React", "Typescript", "Tailwind CSS", "Zustand", "Drag and drop"],
    link: "https://gradient-generator.andrewzimmerly.com",
    githubLink: "https://github.com/azimmerly/gradient-generator",
  },
] as const;

export const ProjectList = () => (
  <section className="flex flex-col gap-14 md:gap-18">
    {PROJECTS.map((project, index) => (
      <div
        key={index}
        className="mx-auto flex flex-col items-start gap-4 md:flex-row md:gap-6"
      >
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-md shrink-0 rounded-lg"
        >
          <Image
            priority
            draggable={false}
            src={project.image}
            alt={project.title}
            className="rounded-lg shadow-sm transition ease-out hover:scale-101 hover:shadow-md md:h-[276px] md:w-96"
          />
        </Link>
        <div className="flex max-w-xl flex-col gap-2 md:max-w-full">
          <h2
            className={twMerge(
              "flex items-center gap-1 text-2xl font-bold",
              nunitoFont.className,
            )}
          >
            <Image src={project.icon} alt={project.title} className="size-6" />
            {project.title}
          </h2>
          <div className="flex max-w-2xl flex-wrap gap-1 text-[13px] font-medium md:text-sm">
            {project.tech.map((tech, index) => (
              <p key={index} className="rounded bg-gray-200/70 px-1.5 py-px">
                {tech}
              </p>
            ))}
          </div>
          <p className="my-1 flex text-justify text-[15px] text-pretty md:text-base md:leading-6.5">
            {project.description}
          </p>
          <div className="flex gap-2">
            <ButtonLink icon={FaArrowRight} href={project.link}>
              View project
            </ButtonLink>
            <ButtonLink icon={FaGithub} href={project.githubLink} secondary>
              GitHub
            </ButtonLink>
          </div>
        </div>
      </div>
    ))}
  </section>
);
