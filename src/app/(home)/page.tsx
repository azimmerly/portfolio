import { AboutMe } from "./AboutMe";
import { ProjectList } from "./ProjectList";
import { SchemaEmbed } from "./SchemaEmbed";

const Home = () => (
  <div className="mt-20 mb-10 flex flex-col gap-20 lg:mt-28 lg:gap-28">
    <SchemaEmbed />
    <AboutMe />
    <ProjectList />
  </div>
);

export default Home;
