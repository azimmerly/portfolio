import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaArrowLeft } from "react-icons/fa";
import SEO from "../components/SEO";
import Layout from "../components/Layout";

const NotFoundSection = styled.div`
  padding-top: clamp(5rem, 6vw, 8rem);
  padding-bottom: clamp(5rem, 6vw, 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.h3`
  padding: 2rem;
  text-align: center;
  font-size: var(--font-size-large);
  font-family: var(--font-primary);
  font-weight: 400;
  margin-bottom: 2rem;

  span {
    margin-left: 1rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  color: var(--color-primary);
  background: var(--color-grey-light);
  border: none;
  outline: none;
  padding: 0.6em 0.9em;
  border-radius: 0.8rem;
  text-decoration: none;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  & > *:first-child {
    margin-right: 0.5em;
  }

  &:hover,
  &:focus {
    color: var(--color-white);
    background: var(--color-primary);
  }
`;

function NotFoundPage() {
  return (
    <>
      <SEO title="Not Found" />
      <Layout>
        <NotFoundSection>
          <Text>
            Looks like you took a wrong turn...
            <span role="img" aria-label="thinking">
              🤔
            </span>
          </Text>
          <StyledLink to="/">
            <FaArrowLeft /> Go Back
          </StyledLink>
        </NotFoundSection>
      </Layout>
    </>
  );
}

export default NotFoundPage;
