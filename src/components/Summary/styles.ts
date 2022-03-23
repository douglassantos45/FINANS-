import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colunas de tamanhos iguais */
  gap: 3.2rem;
  margin-top: -12.5rem;

  div {
    background: var(--shape);
    padding: 2.4rem 3.2rem;
    border-radius: 1.5rem;
    color: var(--text-title);

    &.button {
      cursor: pointer;

      transition: hover 0.3s;

      &:hover {
        box-shadow: 0.2rem 0.2rem 1rem #0000000a;
      }
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        font-size: 1.35rem;
      }

      svg {
        font-size: 2.7rem;
      }
    }

    strong {
      display: block;

      margin-top: 1.7rem;
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.8rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }

    &.withdraw-background {
      background: #ff4767;
      color: #fff;
    }

    &.select-deposit {
      background: rgb(200, 250, 205);
      color: #fff;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: none;
  }
`;
