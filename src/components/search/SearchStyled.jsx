import styled from "styled-components";

const StyledSearch = styled.div`
  position: relative;
  height: 3.5rem;
  max-width: 720px;
  margin: 2.32rem auto 2.32rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.75rem;
  background: #ece6f0;
  padding: 0.25rem;
  align-self: stretch;
`;

const StyledInput = styled.input`
  display: flex;
  border-radius: 1.75rem;
  background-color: #ece6f0;
  border: none;
  outline: none;
  text-align: center;
  width: 90%;
  gap: 0.625rem;
  height: 3rem;
  font-size: 1.5rem;

  &::-webkit-search-clear-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    appearance: none;
    display: none;
  }

  &::-moz-search-clear-button {
    -moz-appearance: none;
    appearance: none;
    display: none;
  }

  &::-ms-clear {
    display: none;
  }
`;

const StyledTrailingIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

export { StyledSearch, StyledInput, StyledTrailingIcon };
