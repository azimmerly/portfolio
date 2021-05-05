import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

export const BlogPost = styled.div`
  padding-top: clamp(5rem, 6vw, 8rem);
  padding-bottom: clamp(5rem, 6vw, 8rem);
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: flex-start;
  width: clamp(30rem, 95vw, 90rem);
`;

export const Title = styled.h1`
  color: var(--color-black);
  font-family: var(--font-secondary);
  font-size: var(--font-size-large);
  margin-bottom: 2rem;
`;

export const Date = styled.p`
  color: var(--color-grey-dark);
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
  margin-bottom: 1.5rem;
  font-weight: 300;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: var(--color-grey-dark);
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
  margin-bottom: 2rem;
  font-weight: 300;

  & > *:not(last-child) {
    margin-right: 1rem;
  }
`;

export const StyledImg = styled(GatsbyImage)`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 5rem;
`;

export const BlogBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 1.7;
  color: var(--color-black);
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
  font-weight: 300;

  & > *:not(last-child) {
    margin-bottom: 2rem;
  }

  code {
    border-radius: 0.5rem;
    padding: 0.125rem 0.5rem;
    box-decoration-break: clone;
    background: var(--color-grey-light);
    font-size: var(--font-size-small);
    font-family: var(--font-code);
    font-weight: 400;
  }

  a {
    color: var(--color-primary);
  }

  ul {
    margin-left: clamp(2.5rem, 2vw, 5rem);
  }
`;

export const StyledLink = styled(Link)`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: 0.6em 0.9em;
  border-radius: 0.8rem;
  text-decoration: none;
  font-weight: 400;
  color: var(--color-primary);
  background: var(--color-grey-light);
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin: 4rem 0;

  & > *:first-child {
    margin-right: 0.5em;
  }

  &:hover,
  &:focus {
    color: var(--color-white);
    background: var(--color-primary);
  }
`;
