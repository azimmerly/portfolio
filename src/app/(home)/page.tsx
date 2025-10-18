import { AboutMe } from "@/components/AboutMe";
import { ProjectList } from "@/components/ProjectList";
import { SchemaEmbed } from "@/components/SchemaEmbed";

const Home = () => (
  <div className="my-8 flex flex-col gap-16 lg:my-20 lg:gap-22">
    <SchemaEmbed />
    <AboutMe />
    <ProjectList />
  </div>
);

export default Home;
