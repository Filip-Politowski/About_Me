import React from "react";
import "./education.scss";
import { useLanguage } from "../contexts/LanguageContext";
const Education = () => {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="education-container" id="education">
      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Data: </p>
            <p className="description">02.2018 - 11.2019</p>
          </>
        ) : (
          <>
            <p className="sub-item">Date: </p>
            <p className="description">02.2018 - 11.2019</p>
          </>
        )}
      </div>
      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Nazwa uczelni: </p>
            <p className="description">Politechnika Gdańska</p>
          </>
        ) : (
          <>
            <p className="sub-item">University name: </p>
            <p className="description">Gdańsk University of Technology</p>
          </>
        )}
      </div>
      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Stopeiń: </p>
            <p className="description">Studia dzienne II stopnia</p>
          </>
        ) : (
          <>
            <p className="sub-item">Degre: </p>
            <p className="description">2nd Degree Course</p>
          </>
        )}
      </div>
      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Kierunek: </p>
            <p className="description">Automatyka i Robotyka</p>
          </>
        ) : (
          <>
            <p className="sub-item">Major: </p>
            <p className="description">
              Automation, Robotics and Control Systems
            </p>
          </>
        )}
      </div>
      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Specjalizacja:</p>
            <p className="description">Informatyka w Systemach Sterowania</p>
          </>
        ) : (
          <>
            <p className="sub-item">Specialization:</p>
            <p className="description">Informatics in Control Systems</p>
          </>
        )}
      </div>

      <hr />

      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Data: </p>
            <p className="description">10.2014 - 02.2018</p>
          </>
        ) : (
          <>
            <p className="sub-item">Date: </p>
            <p className="description">10.2014 - 02.2018</p>
          </>
        )}
      </div>
      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Nazwa uczelni: </p>
            <p className="description">Politechnika Gdańska</p>
          </>
        ) : (
          <>
            <p className="sub-item">University name: </p>
            <p className="description">Gdańsk University of Technology</p>
          </>
        )}
      </div>
      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Stopień: </p>
            <p className="description">Studia dzienne I stopnia</p>
          </>
        ) : (
          <>
            <p className="sub-item">Degre: </p>
            <p className="description">1st Degree Course</p>
          </>
        )}
      </div>
      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Kierunek: </p>
            <p className="description">Automatyka i Robotyka</p>
          </>
        ) : (
          <>
            <p className="sub-item">Major: </p>
            <p className="description">
              Automation, Robotics and Control Systems
            </p>
          </>
        )}
      </div>
      <div className="education-item">
        {language === "pl" ? (
          <>
            <p className="sub-item">Specjalizacja:</p>
            <p className="description">Automatyka i systemy sterowania</p>
          </>
        ) : (
          <>
            <p className="sub-item">Specialization:</p>
            <p className="description">Automation and Control Systems</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Education;
