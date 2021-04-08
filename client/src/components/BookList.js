import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { GET_BOOKS_QUERY } from "../queries";
import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS_QUERY);
  const [selected, setSelected] = useState(null);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>`Error :(\n${error}`</p>;
  return (
    <div id="books">
      <ul id="book-list">
        {data.books.map(({ name, id }) => (
          <li key={id} onClick={() => setSelected(id)}>{name}</li>
        ))}
      </ul>
      <BookDetails bookId={ selected } />
    </div>
  );
}

export default BookList;
