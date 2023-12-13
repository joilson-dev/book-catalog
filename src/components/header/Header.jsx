import styled from "styled-components";

export function Header() {
  return (
    <>
      <div>
        <Titulo>Book Catalog</Titulo>
      </div>
    </>
  );
}

const Titulo = styled.p`
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 5rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default Header;
