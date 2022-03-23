import styled from "styled-components";
/* Funções para manipulação de cores */
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  div {
    input {
      width: 100%;
      /* padding: 0 2.4rem; */
      padding: 0 1rem;
      height: 5rem;

      /* border: 0.1rem solid #d7d7d7; */
      border: 0;
      border-bottom: 0.1rem solid #d7d7d7;
      /* background: #d7d7d7; */
      background: var(--background);

      font-weight: 400;
      font-size: 1.6rem;

      transition: border-bottom 0.3s;

      &::placeholder {
        color: var(--text-body);
      }

      & + input {
        margin-top: 1.6rem;
      }

      &:focus {
        outline: none;
        &:invalid {
          border-bottom: 1px solid var(--red);
        }
        &:valid {
          border-bottom: 0.1rem solid var(--purple);
        }
      }
    }

    > span {
      color: var(--red);
    }

    &.input-group {
      position: relative;

      > button {
        display: none;

        position: absolute;
        bottom: 0.9rem;
        right: 1rem;
        border: none;
        background: transparent;

        &.clean-input {
          display: block;
        }
      }

      svg {
        font-size: 2.1rem;
        color: var(--text-body);
        cursor: pointer;

        transition: color 0.3s ease;

        &:hover {
          color: var(--red);
        }
      }
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 2.4rem;
    height: 5rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.4rem;
    border: 0;
    font-size: 1.6rem;
    font-weight: 600;
    margin-top: 2.4rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 600px) {
    > h2 {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-top: 3rem;
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1.6rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
`;

/* RADIO BOX */

type RadioboxProps = {
  isActive: boolean;
  activeColor: "green" | "red";
};

const colors = {
  green: "#33cc95",
  red: "#e52e4d"
};

export const RadioBox = styled.button<RadioboxProps>`
  height: 6.4rem;
  border: 0.1rem solid #d7d7d7;
  border-radius: 0.4rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.8, colors[props.activeColor])
      : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }
  &:focus {
    border: 0.1rem solid white;
  }

  svg {
    width: 2.8rem;
    height: 2.8rem;
  }

  span {
    display: inline-block;
    margin-left: 1.6rem;
    font-size: 1.6rem;
    color: var(--text-title);
  }
`;
