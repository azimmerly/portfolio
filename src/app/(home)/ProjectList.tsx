import Image from "next/image";
import { FaArrowRight, FaGithub } from "react-icons/fa6";

import gradientIcon from "@/assets/gradient-icon.png";
import gradientImage1 from "@/assets/gradient-image-1.jpg";
import gradientImage2 from "@/assets/gradient-image-2.jpg";
import movieIcon from "@/assets/movie-icon.png";
import movieImage1 from "@/assets/movie-image-1.jpg";
import movieImage2 from "@/assets/movie-image-2.jpg";
import movieImage3 from "@/assets/movie-image-3.jpg";
import { ButtonLink } from "@/components/ButtonLink";
import { ImageCarousel } from "@/components/ImageCarousel";
import { URLS } from "@/consts";

const PROJECTS = [
  {
    images: [movieImage1, movieImage2, movieImage3],
    icon: movieIcon,
    title: "Movie Tracker",
    description:
      "A full-stack web app for tracking, rating, and organizing movies into public or private lists. Search movies via The Movie Database API, rate them, mark favorites, and explore a stats dashboard showing your top genres and rating trends. Authentication supports email/password and GitHub social login, with data stored in PostgreSQL.",
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
    githubLink: `${URLS.github}/movie-tracker`,
  },
  {
    images: [gradientImage1, gradientImage2],
    icon: gradientIcon,
    title: "Gradient Generator",
    description:
      "A CSS gradient generator with live preview. Customize linear or radial gradients using draggable color stops, randomize for inspiration, then copy the generated CSS or share a permalink with your exact gradient configuration.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Vitest",
      "Zustand",
      "Tailwind CSS",
      "Drag and Drop",
    ],
    link: "https://gradient-generator.andrewzimmerly.com",
    githubLink: `${URLS.github}/gradient-generator`,
  },
] as const;

export const ProjectList = () => (
  <section className="flex flex-col gap-14 lg:gap-18">
    {PROJECTS.map((project) => (
      <article
        key={project.title}
        className="mx-auto flex flex-col items-start gap-4 lg:flex-row lg:gap-6"
      >
        <ImageCarousel altLabel={project.title} images={project.images} />
        <div className="flex max-w-xl flex-col gap-2 lg:max-w-full">
          <h2 className="flex items-center gap-1 text-2xl font-semibold">
            <Image
              alt=""
              sizes="25px"
              aria-hidden="true"
              className="size-6.25"
              src={project.icon}
            />
            {project.title}
          </h2>
          <ul className="flex max-w-2xl flex-wrap gap-1 text-[13px] font-medium lg:text-sm">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded bg-mist-200/70 px-1.75 py-0.5 dark:bg-mist-800"
              >
                {tech}
              </li>
            ))}
          </ul>
          <p className="my-1.5 flex text-justify text-[15px] text-pretty lg:text-base">
            {project.description}
          </p>
          <div className="flex gap-1.5">
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
