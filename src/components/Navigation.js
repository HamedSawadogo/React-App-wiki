import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";
import Logo from "./Logo";
import { ThemeContext } from "../context/ThemeContext";

const Navigation = memo(() => {
  const { theme, toogleTheme } = useContext(ThemeContext);
  return (
    <nav>
      <Logo />
      <Link to={"/"} className={""}>
        <li>WiKi Store</li>
      </Link>
      <Link to={"/contact"}>
        <li>contact</li>
      </Link>
      <Link to={"/blog"}>
        <li>Blog</li>
      </Link>
      <Link>
        <li onClick={() => toogleTheme()}>{theme === "light" ? "☀️" : "🌙"}</li>
      </Link>
    </nav>
  );
});

export default Navigation;
