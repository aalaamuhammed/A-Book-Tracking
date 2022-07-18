import React, { useState, useEffect } from "react";
import Tile from "./Tile";
export default function Section({ title, books, filter, handleSelection }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(books?.filter((book) => book.shelf === filter));
  }, [books]);

  return (
    <div style={{ margin: "15px 20px" }}>
      <h4 style={{ fontWeight: "bold" }}>{title}</h4>
      <div style={{ height: "1px", backgroundColor: "lightgray" }} />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {data?.map((book, index) => (
          <Tile
            key={index + "currentlyReading"}
            book={book}
            handleSelection={handleSelection}
          />
        ))}
      </div>
    </div>
  );
}
