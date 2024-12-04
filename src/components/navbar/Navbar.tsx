import React, { useState, useEffect, useRef } from "react";
import "./navbar.scss";
import Linkedinn from "../socialButtons/linkedin/Linkedinn";
import Github from "../socialButtons/github/Github";
import SquareButton from "../squareButton/SquareButton";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); 
  const menuRef = useRef<HTMLDivElement | null>(null); 

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="firstname-lastname">
        <h1>FILIP POLITOWSKI</h1>
      </div>
      <div
        className={`navigation-buttons ${isMenuOpen ? "open" : ""}`}
        ref={menuRef}
      >
        <div className="social-media">
          <Linkedinn />
          <Github />
        </div>

        <h2 onClick={handleMenuClick}>About Me</h2>
        <h2 onClick={handleMenuClick}>Skills</h2>
        <h2 onClick={handleMenuClick}>Projects</h2>
        <h2 onClick={handleMenuClick}>Previous Jobs</h2>
        <SquareButton text="Let's Connect" link="" />
      </div>
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
