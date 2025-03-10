import { AboutMe, ProjectList } from "@/app/components";

const Home = () => (
  <div className="mt-12 mb-16 flex flex-col gap-24 lg:mt-24 lg:gap-32">
    <AboutMe />
    <ProjectList />
  </div>
);

export default Home;
