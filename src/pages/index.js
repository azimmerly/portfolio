import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import About from "../components/About";
import ProjectList from "../components/ProjectList";

const HomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: clamp(4rem, 6vw, 8rem);
  padding-bottom: clamp(6rem, 8vw, 12rem);
`;

function HomePage() {
  return (
    <>
      <SEO title="Projects" />
      <Layout>
        <HomeSection>
          <About />
          <ProjectList />
        </HomeSection>
      </Layout>
    </>
  );
}

export default HomePage;
