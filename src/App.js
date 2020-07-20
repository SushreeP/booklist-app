import React from "react";
import NavBar from "./NavBar";
import BookList from "./BookList";
import "./App.css";
import ThemeContextProvider from "./ContextComponents/ThemeContext";
import LoginContextProvider from "./ContextComponents/LoginContext";
import BookContextProvider from "./ContextComponents/BookContext";

const App = () => {
  return (
    <div className="App">
      <ThemeContextProvider>
        <LoginContextProvider>
          <BookContextProvider>
            <NavBar />
            <BookList />
          </BookContextProvider>
        </LoginContextProvider>
      </ThemeContextProvider>
      <footer>
        {"\u00A9"} 2020, Sushree P Mohanty | Created as a showcase project using
        React and CSS from scratch
      </footer>
    </div>
  );
};

export default App;
