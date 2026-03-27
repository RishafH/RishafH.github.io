import React from "react";
import "./Header.css";
import { FaMoon, FaSun } from "react-icons/fa";
import { toggleTheme } from "../theme";

export default function Header() {
  const [dark, setDark] = React.useState(false);

  const handleToggle = () => {
    toggleTheme();
    setDark(!dark);
  };

  return (
    <header className="header">
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#qualifications">Qualifications</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="theme-toggle" onClick={handleToggle}>
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </header>
  );
}
