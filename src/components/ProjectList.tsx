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

const projects = [
  {
    image: movieImage,
    icon: movieIcon,
    title: "Movie Tracker",
    description:
      "A full-stack web app that lets you create and share personalized lists of your favorite movies. Authentication options include email/password and social login via GitHub. Users can rate movies and designate favorites, making it easy to keep tabs on your watch history and see what friends are enjoying. Movie data is fetched from The Movie Database API and stored securely in a PostgreSQL database.",
    tech: [
      "React",
      "NextJS",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "PostgreSQL",
      "Drizzle ORM",
      "Movie Database API",
      "Dark Mode",
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
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "Drag and Drop",
    ],
    link: "https://gradient-generator.andrewzimmerly.com",
    githubLink: "https://github.com/azimmerly/gradient-generator",
  },
] as const;

export const ProjectList = () => (
  <section className="flex flex-col gap-14 lg:gap-18">
    {projects.map((project) => (
      <article
        key={project.title}
        className="mx-auto flex flex-col items-start gap-4 lg:flex-row lg:gap-6"
      >
        <Link
          href={project.link}
          aria-label={project.title}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-md shrink-0 overflow-hidden rounded-xl shadow transition ease-out will-change-transform hover:-translate-y-[2px] hover:scale-101 hover:shadow-md"
        >
          <Image
            priority
            draggable={false}
            placeholder="blur"
            src={project.image}
            alt={project.title}
            className="rounded-xl object-cover lg:h-[276px] lg:w-96"
            sizes="(max-width: 1024px) 100vw, 384px"
          />
        </Link>
        <div className="flex max-w-xl flex-col gap-2 lg:max-w-full">
          <h2
            className={twMerge(
              "flex items-center gap-1 text-2xl font-bold",
              nunitoFont.className,
            )}
          >
            <Image
              alt=""
              aria-hidden="true"
              className="size-6"
              src={project.icon}
            />
            {project.title}
          </h2>
          <ul className="flex max-w-2xl flex-wrap gap-1 text-[13px] font-medium lg:text-sm">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded bg-gray-200/80 px-1.5 py-0.5 dark:bg-gray-800"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="my-1 flex text-justify text-[15px] text-pretty lg:text-base lg:leading-6.5">
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
      </article>
    ))}
  </section>
);
