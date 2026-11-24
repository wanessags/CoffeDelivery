import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.bodyFont};
    font-size: 1rem;
    line-height: 1.3;
    -webkit-font-smoothing: antialiased;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.titleFont};
    line-height: 1.3;
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
  }

  button, input, textarea, select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: not-allowed;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.focus};
    outline-offset: 2px;
  }

  img {
    max-width: 100%;
    display: block;
  }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`;
