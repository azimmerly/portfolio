import styled from "styled-components";

export const AboutSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: clamp(28rem, 85vw, 95rem);
  margin-bottom: clamp(8rem, 12vw, 11rem);
`;

export const Avatar = styled.img`
  width: clamp(14rem, 12vw, 22rem);
  margin: clamp(2rem, 2vw, 4rem);
`;

export const Content = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  color: var(--color-black);
  min-width: 25rem;
`;

export const HelloText = styled.h1`
  display: flex;
  align-items: center;
  font-size: var(--font-size-huge);
  font-family: var(--font-secondary);

  span {
    margin-left: 1rem;
  }
`;

export const AboutText = styled.p`
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  line-height: 1.7;
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  text-decoration: underline;
  color: var(--color-black);
  font-size: var(--font-size-small);
  font-family: var(--font-primary);
  transition: all 0.2s ease-in-out;
  margin-right: clamp(1.6rem, 1.2vw, 2.4rem);
  margin-bottom: 1rem;

  & > *:first-child {
    margin-right: 0.5rem;
  }

  &:hover,
  &:focus {
    color: var(--color-primary);
  }
`;
