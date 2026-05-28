import { AboutMe } from "./AboutMe";
import { ProjectList } from "./ProjectList";
import { SchemaEmbed } from "./SchemaEmbed";

const Home = () => (
  <div className="my-8 flex flex-col gap-8 lg:my-16 lg:gap-16">
    <SchemaEmbed />
    <AboutMe />
    <ProjectList />
  </div>
);

export default Home;
