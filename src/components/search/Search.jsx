import { StyledSearch, StyledTrailingIcon, StyledInput } from "./SearchStyled";
import SearchIcon from "../../../public/icon/search-Icon.svg";

function Search() {
  return (
    <>
      <StyledSearch>
        <StyledInput
          type="search"
          placeholder="Pesquise seu livro"
        ></StyledInput>
        <StyledTrailingIcon src={SearchIcon}></StyledTrailingIcon>
      </StyledSearch>
    </>
  );
}

export default Search;
