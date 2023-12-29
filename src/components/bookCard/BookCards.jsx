import { BookContainer } from "./BookCardtStyled";
import { books } from "../../datas";
import Book from "./Book";

import PropTypes from "prop-types";

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
