import React from "react";
import NavBar from "./components/NavBar";
import BookList from "./BookList";
import "./App.css";
import ThemeContextProvider from "./contexts/ThemeContext";
import LoginContextProvider from "./contexts/LoginContext";
import BookContextProvider from "./contexts/BookContext";

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
        {"\u00A9"} 2016, Sushree P Mohanty | Created as a showcase project using
        React and CSS from scratch
      </footer>
    </div>
  );
};

export default App;
