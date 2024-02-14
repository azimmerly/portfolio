import { ProjectCard, type ProjectCardProps } from "@/app/components";
import gradientGenerator from "@/public/gradient-generator.jpg";
import movieTracker from "@/public/movie-tracker.jpg";

const projects: ProjectCardProps[] = [
  {
    image: movieTracker,
    title: "Movie Tracker",
    description:
      "A full-stack web app that allows you to create lists of your favorite movies and track what you have watched and enjoyed. Authentication options include email/password, Google, or GitHub accounts. Once signed in, you can create, update, and delete movie lists, making it easy to keep tabs on your watch history. Each list is customizable, allowing you to add or remove movies and designate favorites. Data is persisted in a PostgreSQL database and movie info is fetched from The Movie Database API.",
    tech: [
      "React",
      "NextJS",
      "Next Auth",
      "Typescript",
      "PostgreSQL",
      "Tailwind CSS",
      "Movie Database API",
    ],
    githubLink: "https://github.com/azimmerly/movie-tracker",
    projectLink: "https://movie-tracker.andrewzimmerly.com",
  },
  {
    image: gradientGenerator,
    title: "Gradient Generator",
    description:
      "A simple and aesthetic CSS color gradient generator. The colors and direction of the gradient can be changed and the resulting CSS code can be directly copied to the clipboard.",
    tech: ["React", "Typescript", "Emotion CSS"],
    githubLink: "https://github.com/azimmerly/gradient-generator",
    projectLink: "https://gradient-generator.andrewzimmerly.com",
  },
] as const;

export const ProjectList = () => (
  <section className="flex flex-col gap-24">
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </section>
);
