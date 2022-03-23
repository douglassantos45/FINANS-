import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    --purple: #835afd;

    --blue-light: #6933ff;
    --purple-dark: #7144fb;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #FFFFFF;

    font-size: 62.75%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1000px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

    iframe {
      display: none;
    }
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .deposit-color {
    color: var(--green);
  }

  .withdraw-color {
    color: var(--red);
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content {
    position: relative;

    /* width: 100%; */
    width: 92%;
    max-width: 576px;
    background: var(--background);
    padding: 3.6rem;
    border-radius: .4rem;
  }

  .react-modal-close {
    position: absolute;
    right: 2.4rem;
    top: 2.4rem;
    border: 0;
    background: transparent;

    cursor: pointer;

    > svg {
      width: 2.3rem;
      height: 2.3rem;
      color: var(--text-body);

      transition: filter .3s;

      &:hover {
        filter: brightness(.9)
    }
    }
  }
`;
