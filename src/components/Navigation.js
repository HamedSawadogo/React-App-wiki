import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";
import Logo from "./Logo";
import { ThemeContext } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useState } from "react";

const Navigation = memo(() => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  const [isOpen, setIsOpen] = useState(true);
  const { theme, toogleTheme } = useContext(ThemeContext);
  return (
    <motion.nav
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className="navigation"
    >
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
    </motion.nav>
  );
});

export default Navigation;
