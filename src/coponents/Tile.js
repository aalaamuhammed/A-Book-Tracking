import React from "react";

function Tile({ book, handleSelection }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "128px",
        flexDirection: "column",
        margin: "0px 10px",

        marginTop: 15,
      }}
    >
      <div
        style={{
          width: 128,
          height: 174,
          backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
        }}
      ></div>
      <div className="book-shelf-changer">
        <select
          value={book?.shelf ? book.shelf : "none"}
          onChange={(e) => handleSelection(book, e)}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
      <span
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {book?.title}
      </span>
      <span style={{ color: "gray" }}>
        {book?.authors ? book.authors[0] : ""}
      </span>
    </div>
  );
}

export default Tile;
