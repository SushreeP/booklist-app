import React, { useContext, useState } from "react";
import { BookContext } from "./ContextComponents/BookContext";
import { ThemeContext } from "./ContextComponents/ThemeContext";

const NewBook = () => {
  const [title, setTitle] = useState("");
  const { addBook } = useContext(BookContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title);
    setTitle("");
  };
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;

  return (
    <form className="newbook" onSubmit={handleSubmit}>
      <input
        placeholder={"Enter Title"}
        type="text"
        required
        value={title}
        style={{ background: theme.bg, color: theme.font }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input className="btn" type="submit" value={"+"} />
    </form>
  );
};

export default NewBook;
