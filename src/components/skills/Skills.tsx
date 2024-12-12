import React from "react";
import "./skills.scss";
import css from '../../assets/images/css.svg';
import docker from '../../assets/images/docker.svg';
import git from '../../assets/images/git.svg';
import hibernate from '../../assets/images/hibernate.svg';
import html from '../../assets/images/html.svg';
import intellij from '../../assets/images/intellij.svg';
import java from '../../assets/images/java.svg';
import javascript from '../../assets/images/javascript.svg';
import junit from '../../assets/images/junit5.svg';
import mysql from '../../assets/images/mysql.svg';
import postgresql from '../../assets/images/postgresql.svg';
import react from '../../assets/images/react.svg';
import rest from '../../assets/images/rest.svg';
import spring from '../../assets/images/spring-boot.svg';
import typescript from '../../assets/images/typescript.svg';
import vscode from '../../assets/images/vscode.svg';
import thymleaf from '../../assets/images/thymeleaf.svg'


const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-list">
        <div className="skills-left">
          <h1>Backend:</h1>
          <ul>
            <li><img src={css} alt="" />Java</li>
            <li><img src={spring} alt="" />Spring</li>
            <li><img src={hibernate} alt="" /> Hibernate</li>
            <li><img src={rest} alt="" /> REST API</li>
            <li><img src={thymleaf} alt="" /> Thymleaf</li>
            <li><img src={intellij} alt="" /> IntelliJ</li>
            <li><img src={junit} alt="" /> JUnit</li>
            <li><img src={mysql} alt="" /> MySQL</li>
            <li><img src={postgresql} alt="" /> Postgres</li>
            <li><img src={docker} alt="" /> Docker</li>
            <li><img src={git} alt="" /> Git</li>
          </ul>
        </div>
        <div className="skills-right">
          <h1>Front-end:</h1>
          <ul>
            <li><img src={react} alt="" /> React</li>
            <li><img src={html} alt="" /> HTML</li>
            <li><img src={css} alt="" /> CSS</li>
            <li><img src={javascript} alt="" /> JavaScript</li>
            <li><img src={typescript} alt="" /> TypedScript</li>
            <li><img src={vscode} alt="" /> VS Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
