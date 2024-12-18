import React from "react";
import "./content.scss";

import TypingEffect from "../typing-effect/TypingEffect";
import Skills from "../skills/Skills";
import profile from "../../assets/images/filip.jpeg";
import Projects from "../projects/ProjectsGrid";

const Content: React.FC = () => {
  return (
    <div className="content-container">
      <div className="welcome-container" id="welcome">
        <img src={profile} alt="colors" />
        <div className="welcome-text-container">
          <div className="welcome-header">
            <TypingEffect
              text1="Hi I'm Filip Politowski"
              text2="And I am currently looking for new job opportunities"
              eraseSpeed={40}
              typingSpeed={70}
              loop={true}
            />
          </div>
          <div className="welcome-text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>

      <p className="title">Skills</p>
      <Skills />

      <div className="chapter-description">
        <p className="title project-title">Projects</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into</p>
      </div>
      <Projects />
    </div>
  );
};

export default Content;
