import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Project from "../Project";
import { Projects } from "./style";

function ProjectList() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject {
        edges {
          node {
            id
            title
            tech
            demoLink
            githubLink
            image {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1200)
            }
            description {
              internal {
                content
              }
            }
          }
        }
      }
    }
  `);

  const projects = data.allContentfulProject.edges;

  return (
    <Projects>
      {projects.map((project) => {
        return <Project key={project.node.id} project={project.node} />;
      })}
    </Projects>
  );
}

export default ProjectList;
