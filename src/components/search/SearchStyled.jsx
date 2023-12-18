import styled from "styled-components";

const StyledSearch = styled.div`
  position: relative;
  display: flex;
  height: 3.5rem;
  max-width: 45rem;
  justify-content: center;
  align-items: center;
  margin: 2.32rem auto 2.32rem auto;

  border-radius: 1.75rem;
  background: #ece6f0;

  padding: 0.25rem;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
`;

const StyledInput = styled.input`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: start;
  align-items: center;
  border-radius: 1.75rem;
  background-color: #ece6f0;
  border: none;
  outline: none;
  text-align: center;
  width: 40.875rem;
  gap: 0.625rem;
  align-self: stretch;

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
