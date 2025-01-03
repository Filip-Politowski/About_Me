import React from "react";
import "./courses.scss";
import java_dev from "../../assets/images/Java_dev.png";
import react_dev from "../../assets/images/react_dev.png";
import { useLanguage } from "../contexts/LanguageContext";
type Projects = {
  id: number;
  title: string;
  img: string;
  description: string;
};


const Courses = () => {
  const {language} = useLanguage();

  const coursestList: Projects[] = [
    { id: 1, title: "Java Developer", img: java_dev, description: language ==="pl" ? `Zakres: podstawy Java, programowanie obiektowe (OOP), bazy danych SQL, Servlety, JSP, podstawy JavaScript, Spring, Hibernate, Spring Boot, Rest API, własny projekt. ` : `Scope: basics of Java, OOP programming, SQL databases, Servlets, JSP, basics of
  JavaScript, Spring, Hibernate, Spring Boot, Rest API, own project.`},
    { id: 1, title: "JavaScript Specialist: React + Redux", img: react_dev, description: language ==="pl" ? `Zakres: zaawansowany JavaScript, projektowanie aplikacji jednostronicowych (SPA) z wykorzystaniem React Router, biblioteki React Redux oraz REST API.` : `Scope: advanced JavaScript, SPA (single-page-application) design with the
  using React Router, React Redux library, REST API.` },
  ];
  

  return (
    <div className="courses-container" id="courses">
      <div className="grid-container">
        {coursestList.map((course) => (
          <div key={course.id} className="grid-item">
            <img src={course.img} alt="" />
            <div className="overlay">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
