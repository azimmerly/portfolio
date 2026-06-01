import Link from "next/link";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

import gradientImage1 from "@/assets/gradient-image-1.jpg";
import gradientImage2 from "@/assets/gradient-image-2.jpg";
import movieImage1 from "@/assets/movie-image-1.jpg";
import movieImage2 from "@/assets/movie-image-2.jpg";
import movieImage3 from "@/assets/movie-image-3.jpg";
import { ImageCarousel } from "@/components/ImageCarousel";
import { URLS } from "@/consts";

const PROJECTS = [
  {
    title: "Movie Tracker",
    description:
      "A full-stack app for tracking, rating, and organizing movies into public or private lists. Search via The Movie Database API, rate and log favorites, and explore a stats dashboard of your top genres and rating trends.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "PostgreSQL",
      "Drizzle ORM",
      "Movie Database API",
    ],
    images: [movieImage1, movieImage2, movieImage3],
    link: "https://movie-tracker.andrewzimmerly.com",
    githubLink: `${URLS.github}/movie-tracker`,
  },
  {
    title: "Gradient Generator",
    description:
      "A CSS gradient generator with live preview. Drag color stops, switch between linear and radial, randomize for inspiration, then copy the CSS or share a permalink with your exact configuration.",
    tech: ["React", "TypeScript", "Vite", "Vitest", "Zustand", "Tailwind CSS"],
    images: [gradientImage1, gradientImage2],
    link: "https://gradient-generator.andrewzimmerly.com",
    githubLink: `${URLS.github}/gradient-generator`,
  },
] as const;

export const ProjectList = () => (
  <section className="flex flex-col gap-6">
    <p className="text-base font-semibold tracking-widest text-neutral-400 uppercase">
      Personal projects
    </p>
    <div className="grid gap-5 lg:grid-cols-2">
      {PROJECTS.map((project) => (
        <article
          key={project.title}
          className="flex flex-col overflow-hidden rounded-xl bg-white shadow dark:bg-neutral-900"
        >
          <ImageCarousel altLabel={project.title} images={project.images} />
          <div className="flex flex-1 flex-col p-4 lg:p-6">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
              {project.title}
            </h2>
            <ul className="mt-2 flex flex-wrap gap-1.25">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded bg-neutral-200 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
            <div className="mt-auto flex items-center gap-4 pt-4">
              <Link
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-sm text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              >
                <FaArrowUpRightFromSquare className="size-3.25" /> View project
              </Link>
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.25 text-sm text-neutral-500 transition-colors hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              >
                <FaGithub className="size-3.5" /> GitHub
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);
