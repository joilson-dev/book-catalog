import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  height: 3.5rem;
  min-width: 22.5rem;
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

const Styledcontent = styled.input`
  display: flex;
  width: 40.875rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;
`;

const StyledTrailingIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export { StyledSearch, Styledcontent, StyledTrailingIcon };
