import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  gap: clamp(1rem, 3vw, 5rem);
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  align-items: center;
  color: var(--color-black);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-family: var(--font-secondary);
  font-size: var(--font-size-large);
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: var(--font-primary);
  font-size: calc(0.9 * var(--font-size-small));
`;

export const TechItem = styled.p`
  padding: 0.3em 0.5em;
  border-radius: 0.5rem;
  text-transform: uppercase;
  color: var(--color-black);
  background: var(--color-grey-light);
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.p`
  font-family: var(--font-primary);
  font-size: var(--font-size-medium);
  margin-bottom: 0.5rem;
  line-height: 1.7;
  font-weight: 300;
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  gap: 1rem;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: 0.6em 0.9em;
  border-radius: 0.8rem;
  text-decoration: none;
  color: var(--color-primary);
  background: var(--color-grey-light);
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  & > *:first-child {
    margin-right: 0.5em;
  }

  &:hover,
  &:focus {
    color: var(--color-white);
    background: var(--color-secondary);
  }

  &:first-child {
    color: var(--color-white);
    background: var(--color-primary);
  }

  &:first-child:hover,
  &:first-child:focus {
    color: var(--color-white);
    background: var(--color-secondary);
  }
`;
