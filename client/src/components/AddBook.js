import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { ADD_BOOK_MUTATION, GET_AUTHORS_QUERY } from "../queries";

function AddBook() {
  const { loading, error, data } = useQuery(GET_AUTHORS_QUERY);
  const [addBookMutation] = useMutation(ADD_BOOK_MUTATION, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          books(existingBooks = []) {
            return [...existingBooks, data];
          },
        },
      });
    },
  });
  const [bookName, setBookName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState();

  function displayAuthors() {
    if (loading) return <option disabled>Loading authors...</option>;
    if (error) return <option disable>Failed to get authors</option>;
    return data.authors.map(({ id, name }) => (
      <option key={id} value={id}>
        {name}
      </option>
    ));
  }

  function onClickAddBook(event) {
    event.preventDefault();

    addBookMutation({
      variables: {
        name: bookName,
        genre,
        authorId,
      },
    });
  }

  return (
    <form id="add-book" onSubmit={onClickAddBook}>
      <div className="field">
        <label>Book name:</label>
        <input type="text" onChange={(event) => setBookName(event.target.value)} />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(event) => setGenre(event.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(event) => setAuthorId(event.target.value)}>
          <option>Select author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>Add</button>
    </form>
  );
}

export default AddBook;
