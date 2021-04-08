import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BOOK_QUERY } from "../queries";

function BookDetails({ bookId }) {
  const { data } = useQuery(GET_BOOK_QUERY, { variables: { id: bookId } });
  function displayBookDetails() {
    const book = data ? data.book : null;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map((item) => {
              return <li key={item.id}>{item.name}</li>;
            })}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected...</div>;
    }
  }

  return <div className="book-details">{displayBookDetails()}</div>;
}

export default BookDetails;
