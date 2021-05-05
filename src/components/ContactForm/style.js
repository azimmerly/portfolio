import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: clamp(28rem, 85vw, 55rem);
`;

export const Input = styled.input`
  width: 100%;
  resize: none;
  background: var(--color-grey-light);
  border: 2px solid var(--color-white);
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  outline: none;
  padding: 0.8em 1em;
  border-radius: 0.8rem;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1.2rem;

  &::placeholder {
    color: var(--color-grey-dark);
  }

  &:focus,
  &:active {
    color: var(--color-black);
    border-color: var(--color-primary);
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  background: var(--color-grey-light);
  border: 2px solid var(--color-white);
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  outline: none;
  padding: 0.8em 1em;
  border-radius: 0.8rem;
  transition: all 0.2s ease-in-out;
  margin-bottom: 1.2rem;

  &::placeholder {
    color: var(--color-grey-dark);
  }

  &:focus,
  &:active {
    color: var(--color-black);
    border-color: var(--color-primary);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-medium);
  font-family: var(--font-primary);
  color: var(--color-white);
  background: var(--color-primary);
  border: none;
  outline: none;
  padding: 0.6em 0.9em;
  border-radius: 0.8rem;
  text-decoration: none;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: var(--color-white);
    background: var(--color-secondary);
  }

  & > :first-child {
    margin-left: 0.5em;
  }
`;
