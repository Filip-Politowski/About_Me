import React, { useState, useRef, useEffect } from "react";
import "./navbar.scss";
import Linkedinn from "../socialButtons/linkedin/Linkedinn";
import Github from "../socialButtons/github/Github";
import SquareButton from "../squareButton/SquareButton";
import pl_ln from "../../assets/images/pl.svg";
import en_ln from "../../assets/images/en.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("pl");
  const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 1500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  function scrollToTarget(targetId: string) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center", // Przewija do środka widocznej części strony
      });
    }
  }

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="navbar">
      <div className="firstname-lastname">
        <h1>FILIP POLITOWSKI</h1>
        {!isMobileView && (
          <div className="language-switcher">
            <img
              src={en_ln}
              alt=""
              onClick={() => handleLanguageChange("en")}
              style={
                selectedLanguage === "pl"
                  ? { filter: "grayscale(1)" }
                  : { filter: "none" }
              }
            />
            <img
              src={pl_ln}
              alt=""
              onClick={() => handleLanguageChange("pl")}
              style={
                selectedLanguage === "en"
                  ? { filter: "grayscale(1)" }
                  : { filter: "none" }
              }
            />
          </div>
        )}
      </div>
      <div
        className={`navigation-buttons ${isMenuOpen ? "open" : ""}`}
        ref={menuRef}
      >
        <div className="social-media">
          <Linkedinn />
          <Github />
        </div>

        <h2
          onClick={() => {
            handleMenuClick();
            scrollToTarget("welcome");
          }}
        >
          About Me
        </h2>
        <h2
          onClick={() => {
            handleMenuClick();
            scrollToTarget("skills");
          }}
        >
          Skills
        </h2>
        <h2
          onClick={() => {
            handleMenuClick();
            scrollToTarget("projects");
          }}
        >
          Projects
        </h2>
        <h2
          onClick={() => {
            handleMenuClick();
            scrollToTarget("courses");
          }}
        >
          Courses
        </h2>
        <h2
          onClick={() => {
            handleMenuClick();
            scrollToTarget("experience");
          }}
        >
          Experience
        </h2>
        <h2
          onClick={() => {
            handleMenuClick();
            scrollToTarget("education");
          }}
        >
          Education
        </h2>
        <SquareButton
          text="Let's Connect"
          onClick={() => {
            handleMenuClick();
            scrollToTarget("contact");
          }}
        />
        {isMenuOpen && (
          <div className="language-switcher">
            <img
              src={en_ln}
              alt="English"
              onClick={() => handleLanguageChange("en")}
              style={
                selectedLanguage === "pl"
                  ? { filter: "grayscale(1)" }
                  : { filter: "none" }
              }
            />
            <img
              src={pl_ln}
              alt="Polish"
              onClick={() => handleLanguageChange("pl")}
              style={
                selectedLanguage === "en"
                  ? { filter: "grayscale(1)" }
                  : { filter: "none" }
              }
            />
          </div>
        )}
      </div>
      <div
        className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
