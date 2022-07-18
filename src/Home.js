import React, { useState, useEffect } from "react";
import Section from "./coponents/Section";
import Search from "./coponents/Search";
import { GetAllBooks } from "./utilities/BookAPI";
export default function Home() {
  const [data, setData] = useState([]);
  const [showSearchPage, setShowSearchpage] = useState(false);
  useEffect(() => {
    const loadBooks = async () => {
      let res = await GetAllBooks();
      setData(res?.books);
    };
    loadBooks();
  }, []);
  const handleSelection = (book, e) => {
    book.shelf = e.target.value;
    const updatedBooks = data.filter((element) => element.id !== book.id);
    setData([...updatedBooks, book]);
  };
  const Sections = [
    { title: "Currently Reading", filter: "currentlyReading" },
    { title: "Want To Read", filter: "wantToRead" },
    { title: "Read", filter: "read" },
  ];

  return showSearchPage ? (
    <Search
      setShowSearchpage={setShowSearchpage}
      handleSelection={handleSelection}
    />
  ) : (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "green",
          color: "white",
          padding: "10px",
        }}
      >
        MyReads
      </h1>
      {Sections?.map((element, index) => (
        <Section
          key={index + "Section"}
          title={element.title}
          books={data}
          filter={element.filter}
          handleSelection={handleSelection}
        />
      ))}

      <div className="open-search">
        <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
      </div>
    </div>
  );
}
