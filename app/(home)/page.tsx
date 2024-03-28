import { AboutMe, ProjectList } from "@/app/components";

const Home = () => (
  <div className="mb-16 mt-12 flex flex-col gap-24 text-zinc-800 lg:mt-24 lg:gap-32">
    <AboutMe />
    <ProjectList />
  </div>
);

export default Home;
