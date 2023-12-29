import { BookContainer } from "./BookCardtStyled";
import Book from "./Book";
import PropTypes from "prop-types";

import { books } from "../../Datas.js";
1;

function BookCards({ searchTerm }) {
  const filteredBooks = books.filter((thebook) =>
    thebook.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <BookContainer>
        {filteredBooks.map((thebook) => (
          <Book key={thebook.id} thebook={thebook} />
        ))}
      </BookContainer>
    </>
  );
}

BookCards.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default BookCards;
