import { BookContainer } from "./BookCardtStyled";
import { books } from "../../datas";
import Book from "./Book";

function BookCards() {
  return (
    <>
      <BookContainer>
        {books.map((thebook) => (
          <Book key={thebook.id} thebook={thebook} />
        ))}
      </BookContainer>
    </>
  );
}

export default BookCards;
