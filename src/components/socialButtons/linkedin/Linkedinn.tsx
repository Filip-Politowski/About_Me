import React from "react";
import LinkedinIcon from "../../../assets/images/linkedin.svg";
import "./linkedin.scss";

const Linkedinn = () => {
  return (
    <div className="linkedin">
      <div className="background-for-img">
        <a
          href="https://www.linkedin.com/in/filip-politowski-37b599182/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedinIcon} alt="Linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Linkedinn;
