import { createGlobalStyle } from 'styled-components'
import bg_pattern from "../../images/bg-pattern.svg";


const GlobalStyle = createGlobalStyle`
  body {
    padding: 1.25rem; 
    font-family: 'Manrope', sans-serif;
    background-color: #fafbff;
    font-size: 0.9375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url('${bg_pattern}') no-repeat;
    background-size: 100% 50vmin;
  }

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 85px;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: 0.4s;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`

export default GlobalStyle;