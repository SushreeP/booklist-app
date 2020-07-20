import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [status, setStatus] = useState({ loggedin: true });
  const logToggle = (e) => {
    e.preventDefault();
    setStatus({ ...status, loggedin: !status.loggedin });
  };
  return (
    <LoginContext.Provider value={{ ...status, logToggle }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
