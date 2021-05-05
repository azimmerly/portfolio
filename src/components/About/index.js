import React from "react";
import { FaGithub, FaCodepen, FaLinkedin } from "react-icons/fa";
import avatar from "../../assets/avatar.svg";
import {
  AboutSection,
  Avatar,
  Content,
  HelloText,
  AboutText,
  SocialLinks,
  SocialLink,
} from "./style";

function About() {
  return (
    <AboutSection>
      <Avatar src={avatar} alt="avatar" draggable={false} />
      <Content>
        <HelloText>
          Hello!
          <span role="img" aria-label="hand waving">
            👋
          </span>
        </HelloText>
        <AboutText>
          My name is Andrew and I'm a web developer from San Diego. Here you can
          view my recent projects, check out my blog, and get in touch.
        </AboutText>
        <SocialLinks>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/azimmerly"
          >
            <FaGithub />
            GitHub
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/azimmerly"
          >
            <FaCodepen />
            CodePen
          </SocialLink>
          <SocialLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/andrewzimmerly"
          >
            <FaLinkedin />
            LinkedIn
          </SocialLink>
        </SocialLinks>
      </Content>
    </AboutSection>
  );
}

export default About;
