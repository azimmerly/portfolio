import { AboutMe } from "./AboutMe";
import { ProjectList } from "./ProjectList";
import { SchemaEmbed } from "./SchemaEmbed";

const Home = () => (
  <div className="mt-16 mb-8 flex flex-col gap-18 lg:mt-26 lg:gap-26">
    <SchemaEmbed />
    <AboutMe />
    <ProjectList />
  </div>
);

export default Home;
