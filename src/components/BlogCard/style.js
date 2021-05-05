import { Link } from "gatsby";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  outline: none;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;

  &:hover > :nth-child(2),
  &:focus > :nth-child(2) {
    color: var(--color-primary);
  }
`;

export const Title = styled.p`
  color: var(--color-black);
  font-size: calc(1.2 * var(--font-size-medium));
  text-decoration: underline;
  transition: all 0.2s ease-in-out;
`;

export const Date = styled.p`
  color: var(--color-grey-dark);
  font-size: var(--font-size-small);
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: var(--color-grey-dark);
  font-size: var(--font-size-small);

  & > *:not(last-child) {
    margin-right: 0.4em;
  }
`;
