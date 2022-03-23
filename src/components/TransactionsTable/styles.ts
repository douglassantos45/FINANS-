import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.4rem;
  overflow-x: auto; /* Deixando a tabela responsiva */

  table {
    width: 100%;
    border-spacing: 0 0.9rem;
    font-size: 1.2rem;

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--text-body);

      margin-top: 4rem;

      > p {
        font-size: 1.4rem;
        font-weight: 500;
      }

      > svg {
        font-size: 2.6rem;
        margin-bottom: 1rem;
      }
    }

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1.6rem 3.2rem;
      line-height: 2rem;

      text-align: left;
    }

    td {
      padding: 1.6rem 3.2rem;
      border: 0;
      background: var(--shape);
      color: var(--text-body);
      border-radius: 0.4rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
