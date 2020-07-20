import React, { useContext } from "react";
import { ThemeContext } from "./ContextComponents/ThemeContext";
import { LoginContext } from "./ContextComponents/LoginContext";

const NavBar = () => {
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const { loggedin, logToggle } = useContext(LoginContext);

  return (
    <nav className="navbar" style={{ background: theme.bg, color: theme.font }}>
      <h2>Reading List</h2>
      <ul>
        <li>Books</li>
        <li>Show Details</li>
        <li>
          <span onClick={logToggle}>
            Click to {loggedin ? "Log out" : "Log in"}
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
