import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  padding: 0 2.4rem;
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

  &:focus {
    outline: none;
    border-bottom: 0.1rem solid var(--purple);
  }

  & + input {
    margin-top: 1.6rem;
  }
`;
