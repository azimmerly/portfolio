import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: clamp(30rem, 95vw, 120rem);
  padding: 0 1rem;
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #6246ea;
    --color-secondary: #7c65ed;
    --color-black: #3c4051;
    --color-white: #fff;
    --color-grey-light: #eeeff2;
    --color-grey-dark: #686e8b;
    
    --font-primary: "Roboto", sans-serif;
    --font-secondary: "Raleway", sans-serif;
    --font-code: "Fira Code", monospace;

    --font-size-huge: clamp(3.4rem, 2.6vw, 4.6rem);
    --font-size-large: clamp(2.4rem, 1.8vw, 3.4rem);
    --font-size-medium: clamp(1.5rem, 1.2vw, 1.7rem);
    --font-size-small: clamp(1.4rem, 1vw, 1.5rem);
  }

  ::selection {
    color: var(--color-white);
    background-color: var(--color-primary);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
    box-sizing: border-box;
    overflow: overlay;
  }

  body {
    font-family: var(--font-primary);
    background: var(--color-white);
    color: var(--color-black);
  }

  img {
    border-radius: 0.6rem;
  }

  textarea,
  input[type="text"],
  input[type="email"] {
    -webkit-appearance: none;
  }
`;
