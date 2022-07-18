import React, { useState } from "react";
import { Search } from "../utilities/BookAPI";
import Tile from "./Tile";

export default function SearchComponent({
  setShowSearchpage,
  handleSelection,
}) {
  const [searchBookList, setSearchBookList] = useState([]);
  async function handleSearch(val) {
    let result = await Search(val);
    if (!result?.books?.error && val !== "") {
      setSearchBookList(result.books);
      console.log({ result });
    } else {
      setSearchBookList([]);
    }

    //setData(result);
  }
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => setShowSearchpage(false)}>
          Close
        </a>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => handleSearch(e.target.value)}
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
