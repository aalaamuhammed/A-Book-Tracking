import React, { useState, useEffect } from "react";
import { Search, UpdateBook } from "../utilities/BookAPI";
import Tile from "./Tile";

export default function SearchComponent() {
  const [searchBookList, setSearchBookList] = useState([]);
  const [query, setQuery] = useState("");
  async function handleSearch() {
    let result = await Search(query);
    console.log(result);
    setSearchBookList(result.books?.error ? [] : result.books);
  }
  const handleSelection = async (book, e) => {
    book.shelf = e.target.value;
    UpdateBook(book)
      .then((res) => {})
      .catch((e) => console.log({ e }));
  };
  useEffect(() => {
    handleSearch();
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" href="/">
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={({ target }) => setQuery(target?.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchBookList?.map((book) => (
            <Tile key={book.id} book={book} handleSelection={handleSelection} />
          ))}
        </ol>
      </div>
    </div>
  );
}
