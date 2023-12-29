import { StyledSearch, StyledTrailingIcon, StyledInput } from "./SearchStyled";
import SearchIcon from "../../../public/icon/search-Icon.svg";

import PropTypes from "prop-types";

function Search({ setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <StyledSearch>
        <StyledInput
          type="search"
          placeholder="Pesquise seu livro"
          onChange={handleSearchChange}
        ></StyledInput>
        <StyledTrailingIcon src={SearchIcon}></StyledTrailingIcon>
      </StyledSearch>
    </>
  );
}

Search.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default Search;
