import React from "react";
import { ThemeContext } from "./ContextComponents/ThemeContext";
import "./App.css";

const ThemeToggler = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { isLight, changeTheme } = context;
        const buttontext = isLight ? "Dark" : "Light";
        return (
          <div className="themetoggler">
            <span onClick={changeTheme}>{buttontext}</span>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggler;
