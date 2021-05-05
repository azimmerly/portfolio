import React from "react";
import styled from "styled-components";
import SEO from "../components/SEO";
import Layout from "../components/Layout";
import BlogCardList from "../components/BlogCardList";

const BlogSection = styled.div`
  padding-top: clamp(5rem, 6vw, 8rem);
  padding-bottom: clamp(5rem, 6vw, 8rem);
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
  font-family: var(--font-secondary);
  font-size: var(--font-size-large);
`;

function BlogPage() {
  return (
    <>
      <SEO title="Blog" />
      <Layout>
        <BlogSection>
          <Title>Recent Blog Posts</Title>
          <BlogCardList />
        </BlogSection>
      </Layout>
    </>
  );
}

export default BlogPage;
