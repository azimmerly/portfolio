import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import {
  Card,
  Content,
  Title,
  TechList,
  TechItem,
  Description,
  Links,
  Link,
} from "./style";

function Project({ project }) {
  const { title, tech, image, description, githubLink, demoLink } = project;
  return (
    <Card>
      <GatsbyImage image={image.gatsbyImageData} alt={title} draggable={false} />
      <Content>
        <Title>{title}</Title>
        <TechList>
          {tech.map((techItem, index) => (
            <TechItem key={`${techItem}-${index}`}>{techItem}</TechItem>
          ))}
        </TechList>
        <Description>{description.internal.content}</Description>
        <Links>
          <Link href={demoLink} target="_blank" rel="noopener noreferrer">
            <FaArrowRight />
            View Project
          </Link>
          <Link href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
            View on GitHub
          </Link>
        </Links>
      </Content>
    </Card>
  );
}

export default Project;
