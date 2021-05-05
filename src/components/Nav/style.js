import { Link } from "gatsby";
import styled from "styled-components";

export const Navigation = styled.nav`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 56.25em) {
    justify-content: center;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  padding: 0.6em 0.9em;
  border-radius: 0.8rem;
  text-decoration: none;
  color: var(--color-primary);
  background: var(--color-white);
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  & > *:first-child {
    margin-right: 0.5em;
  }

  &:not(last-child) {
    margin-right: clamp(0.5rem, 1vw, 1rem);
  }

  &:hover,
  &:focus {
    color: var(--color-primary);
    background: var(--color-grey-light);
  }

  &.active {
    color: var(--color-white);
    background: var(--color-primary);
  }

  &.active:hover,
  &.active:focus {
    color: var(--color-white);
    background: var(--color-secondary);
  }
`;
