import {
  StyledSearch,
  StyledTrailingIcon,
  Styledcontent,
} from "./SearchStyled";

function Search() {
  return (
    <>
      <StyledSearch>
        <Styledcontent
          type="search"
          placeholder="Pesquise seu livro"
        ></Styledcontent>
        <StyledTrailingIcon></StyledTrailingIcon>
      </StyledSearch>
    </>
  );
}

export default Search;
