import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  background: #e6e0e9;
  width: 100%;
  z-index: 1000;
  height: 13rem;
  align-items: center;
`;

const Titulo = styled.p`
  color: #000;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-size: 5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px;
`;

export { StyledHeader, Titulo };
