import { AboutMe } from "./AboutMe";
import { ProjectList } from "./ProjectList";
import { SchemaEmbed } from "./SchemaEmbed";

const Home = () => (
  <div className="mt-24 mb-10 flex flex-col gap-22 lg:mt-34 lg:gap-32">
    <SchemaEmbed />
    <AboutMe />
    <ProjectList />
  </div>
);

export default Home;
