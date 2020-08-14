import React, { createContext, useState } from "react";
import { v1 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState({
    booklist: [
      /*{ title: "Head first Python", id: v1() },
      { title: "The Secret", id: v1() },
      { title: "11 minutes", id: v1() },*/
    ],
  });

  const addBook = (title) => {
    setBooks({ ...books, booklist: [...books.booklist, { title, id: v1() }] });
  };
  return (
    <BookContext.Provider value={{ ...books, addBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
