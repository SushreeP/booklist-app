import React, { useContext } from "react";
import { ThemeContext } from "./ContextComponents/ThemeContext";
import { LoginContext } from "./ContextComponents/LoginContext";
import { BookContext } from "./ContextComponents/BookContext";
import NewBook from "./NewBook";

const BookList = () => {
  const { isLight, light, dark, themeToggle } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const { loggedin } = useContext(LoginContext);
  const { booklist } = useContext(BookContext);
  const books = booklist.map((book) => (
    <li key={book.id} style={{ background: theme.bg, color: theme.font }}>
      {book.title}
    </li>
  ));

  return (
    <div className="booklist" style={{ background: theme.ui }}>
      <div onClick={themeToggle} className="themetoggler">
        Click here to toggle theme
      </div>
      <ul>
        {loggedin ? (
          books
        ) : (
          <li style={{ background: theme.bg, color: theme.font }}>
            Log in to see your Reading List!!
          </li>
        )}
      </ul>
      <NewBook />
    </div>
  );
};

export default BookList;
