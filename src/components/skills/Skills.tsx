import React from "react";
import "./skills.scss";
import css from "../../assets/images/css.svg";
import docker from "../../assets/images/docker.svg";
import git from "../../assets/images/git.svg";
import hibernate from "../../assets/images/hibernate.svg";
import html from "../../assets/images/html.svg";
import intellij from "../../assets/images/intellij.svg";
import java from "../../assets/images/java.svg";
import javascript from "../../assets/images/javascript.svg";
import junit from "../../assets/images/junit5.svg";
import mysql from "../../assets/images/mysql.svg";
import postgresql from "../../assets/images/postgresql.svg";
import react from "../../assets/images/react.svg";
import rest from "../../assets/images/rest.svg";
import spring from "../../assets/images/spring-boot.svg";
import typescript from "../../assets/images/typescript.svg";
import vscode from "../../assets/images/vscode.svg";
import thymleaf from "../../assets/images/thymeleaf.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 720 },
      items: 2,
    },
    mobileXl: {
      breakpoint: { max: 720, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

 

  return (
    <div className="skills-container" id='skills'>
      <div className="skills-list">
        <div className="skills-left">
          <p className="skills-header">Backend:</p>
          <ul>
            <li>
              <img src={java} alt="" />
              <p>Java</p>
            </li>
            <li>
              <img src={spring} alt="" />
              <p>Spring</p>
            </li>
            <li>
              <img src={hibernate} alt="" /> <p>Hibernate</p> 
            </li>
            <li>
              <img src={rest} alt="" /> <p>REST API</p>
            </li>
            <li>
              <img src={thymleaf} alt="" /> <p>Thymleaf</p>
            </li>
            <li>
              <img src={intellij} alt="" /> <p>IntelliJ</p>
            </li>
            <li>
              <img src={junit} alt="" /> <p>JUnit</p>
            </li>
            <li>
              <img src={mysql} alt="" /><p>MySQL</p> 
            </li>
            <li>
              <img src={postgresql} alt="" /> <p>Postgres</p>
            </li>
            <li>
              <img src={docker} alt="" /> <p>Docker</p>
            </li>
            <li>
              <img src={git} alt="" /><p>Git</p>
            </li>
          </ul>
        </div>
        <div className="skills-right">
          <p className="skills-header">Front-end:</p>
          <ul>
            <li>
              <img src={react} alt="" /> <p>React</p>
            </li>
            <li>
              <img src={html} alt="" /> <p>HTML</p>
            </li>
            <li>
              <img src={css} alt="" /> <p>CSS</p>
            </li>
            <li>
              <img src={javascript} alt="" /> <p>JavaScript</p>
            </li>
            <li>
              <img src={typescript} alt="" /> <p>TypedScript</p>
            </li>
            <li>
              <img src={vscode} alt="" /> <p>VS Code</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="additional-skills-description">
        <p>Additional Skills</p>

      </div>
      <div className="additional-skills">
        <Carousel responsive={responsive} infinite={true}>
          <div className="item">
            <h5>Windows/Linux</h5>
          </div>
          <div className="item">
            <h5>Working with documentation</h5>
          </div>
          <div className="item">
            <h5>Teamwork</h5>
          </div>
          <div className="item">
            <h5 >Participation in the creation of projects</h5>
          </div >
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
