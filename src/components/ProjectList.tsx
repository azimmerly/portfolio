import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

import gradientIcon from "@/assets/gradient-icon.png";
import gradientImage from "@/assets/gradient-image.png";
import movieIcon from "@/assets/movie-icon.png";
import movieImage from "@/assets/movie-image.png";
import { ExternalLink } from "@/components/ExternalLink";
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
      "Dark mode",
      "Better Auth",
      "PostgreSQL",
      "Drizzle ORM",
      "Movie Database API",
    ],
    link: "https://movie-tracker.andrewzimmerly.com",
    githubLink: "https://github.com/azimmerly/movie-tracker",
  },
  {
    image: gradientImage,
    icon: gradientIcon,
    title: "Gradient Generator",
    description:
      "A simple CSS color gradient generator. You can customize the colors and direction of the gradient, and the resulting CSS code is available in HEX, RGB, or HSL formats for easy copying to the clipboard.",
    tech: ["React", "Typescript", "Emotion CSS"],
    link: "https://gradient-generator.andrewzimmerly.com",
    githubLink: "https://github.com/azimmerly/gradient-generator",
  },
] as const;

export const ProjectList = () => (
  <section className="flex flex-col gap-14 lg:gap-18">
    {PROJECTS.map((project, index) => (
      <div
        key={index}
        className="mx-auto flex flex-col items-start gap-4 lg:flex-row lg:gap-6"
      >
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-md shrink-0 rounded-md outline-offset-2 focus:outline-gray-800"
        >
          <Image
            priority
            draggable={false}
            src={project.image}
            alt={project.title}
            className="rounded-md shadow-sm transition hover:scale-101 lg:h-[276px] lg:w-96"
          />
        </Link>
        <div className="flex max-w-lg flex-col gap-2 lg:max-w-full">
          <h2
            className={twMerge(
              "flex items-center gap-1 text-2xl font-bold",
              nunitoFont.className,
            )}
          >
            <Image src={project.icon} alt={project.title} className="size-6" />
            {project.title}
          </h2>
          <div className="flex max-w-2xl flex-wrap gap-1 text-sm font-medium">
            {project.tech.map((tech, index) => (
              <p key={index} className="rounded-md bg-gray-200/70 px-1.5 py-px">
                {tech}
              </p>
            ))}
          </div>
          <p className="my-1 flex leading-6.5 text-pretty">
            {project.description}
          </p>
          <div className="flex gap-1.5">
            <ExternalLink href={project.link}>
              <FaArrowRight className="size-3.5" />
              View Project
            </ExternalLink>
            <ExternalLink href={project.githubLink}>
              <FaGithub className="size-3.5" />
              GitHub
            </ExternalLink>
          </div>
        </div>
      </div>
    ))}
  </section>
);
