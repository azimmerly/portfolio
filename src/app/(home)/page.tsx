import { AboutMe } from "@/components/AboutMe";
import { ProjectList } from "@/components/ProjectList";

const Home = () => (
  <div className="my-8 flex flex-col gap-16 md:my-20 md:gap-22">
    <AboutMe />
    <ProjectList />
  </div>
);

export default Home;
