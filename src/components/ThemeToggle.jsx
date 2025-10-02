import React from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {theme === "dark" ? <BsSun size={25} /> : <BsMoon size={25} />}
    </div>
  );
};

export default ThemeToggle;
