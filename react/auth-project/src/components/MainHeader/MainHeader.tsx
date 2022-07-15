import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

type Props = {
  isAuthenticated: boolean;
  onLogout: () => void;
};
const MainHeader = ({ isAuthenticated, onLogout }: Props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation isLoggedIn={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
