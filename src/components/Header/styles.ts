import styled from "styled-components";

export const Container = styled.header`
  background: var(--purple);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 3.2rem 1.6rem 16rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      background: var(--green);
      width: 4rem;
      height: 4rem;
      border-radius: 50%;

      > svg {
        font-size: 2.8rem;
        color: #fff;
      }
    }

    > strong {
      color: #fff;
      font-size: 2.5rem;
      margin-left: 1.6rem;
      letter-spacing: 0.1rem;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.6rem;
    font-weight: 500;
    color: #fff;
    background: var(--purple-dark);
    border: 0;
    padding: 0 3.2rem;
    border-radius: 0.4rem;
    height: 4.2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    > svg {
      margin-left: 0.5rem;
    }
  }

  @media (max-width: 420px) {
    img {
      width: 14rem;
    }

    button {
      font-size: 1.3rem;
      padding: 0;
      width: 15rem;
    }
  }
`;
