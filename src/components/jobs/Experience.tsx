import React from "react";
import "./experience.scss";
import { useLanguage } from "../contexts/LanguageContext";

const Experience = () => {
  const { language} = useLanguage();
  return (
    <div className="job-container" id="experience">
      <div className="job-information">
        <div className="job-information-fields">
          {language === "pl" ? (
            <>
              <p className="information-title">Data: </p>
              <p className="details">10.2018 - 11.2024</p>
            </>
          ) : (
            <>
              <p className="information-title">Date: </p>
              <p className="details">10.2018 - 11.2024</p>
            </>
          )}
        </div>
        <div className="job-information-fields">
          {language === "pl" ? (
            <>
              <p className="information-title">Tytuł zawodowy: </p>
              <p className="details">Inżynier Automatyk</p>
            </>
          ) : (
            <>
              <p className="information-title">Job title: </p>
              <p className="details">Automation Engineer</p>
            </>
          )}
        </div>
        <div className="job-information-fields">
          {language === "pl" ? (
            <>
              <p className="information-title">Nazwa firmy: </p>
              <p className="details">Zaczarowany Ołówek</p>
            </>
          ) : (
            <>
              <p className="information-title">Company name: </p>
              <p className="details">Zaczarowany Ołówek</p>
            </>
          )}
        </div>
        <div className="job-information-fields">
          {language === "pl" ? (
            <>
              <p className="information-title">Adres firmy: </p>
              <p className="details">Juszkowo - Polska</p>
            </>
          ) : (
            <>
              <p className="information-title">Company address: </p>
              <p className="details">Juszkowo - Poland</p>
            </>
          )}
        </div>
        <hr />
      </div>
      <div className="job-description">
        {language === "pl" ? (
          <p>
            Creation of technical documentation • Creation of technical drawings
            and 3D models in Fusion 360 • Development of prototype projects •
            Design of electrical diagrams in SEE Electrical • Selection of
            components for designed devices • Design and 3D printing of models •
            Preparation of project quotations • Implementation of projects in
            accordance with CE directives • Assembling designed devices •
            Participation in meetings with foreign contractors • Providing
            technical support to customers, including at automation fairs •
            Proficient in Fusion 360, SEE Electrical, Galileo, CODESYS, and
            PrusaSlicer asdasd
          </p>
        ) : (
          <p>
            Creation of technical documentation • Creation of technical drawings
            and 3D models in Fusion 360 • Development of prototype projects •
            Design of electrical diagrams in SEE Electrical • Selection of
            components for designed devices • Design and 3D printing of models •
            Preparation of project quotations • Implementation of projects in
            accordance with CE directives • Assembling designed devices •
            Participation in meetings with foreign contractors • Providing
            technical support to customers, including at automation fairs •
            Proficient in Fusion 360, SEE Electrical, Galileo, CODESYS, and
            PrusaSlicer
          </p>
        )}
      </div>
    </div>
  );
};

export default Experience;
