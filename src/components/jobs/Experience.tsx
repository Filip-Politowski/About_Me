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
            Na tym stanowisku byłem odpowiedzialny za projektowanie oraz wdrażanie projektów z dziedziny automatyki marketingowej, złożenie i podłączenie elektryczne finalnego produktu, oraz za prowadzenie pełnej dokumentacji projektowej.<br/>
           <p className="highlighting">Stanowisko obejmowało następujący zakres obowiązków:</p> 
            <ul>
              <li>Tworzenie <span className="highlighting">dokumentacji</span> technicznej</li>
              <li>Tworzenie <span className="highlighting">rysunków technicznych</span> i <span className="highlighting">modeli 3D</span> w programie Fusion 360</li>
              <li><span className="highlighting">Tworzenie projektów prototypowych</span></li>
              <li><span className="highlighting">Tworzenie schematów elektrycznych</span> w programie SEE Electrical</li>
              <li>Dobór komponentów dla projektowanych urządzeń</li>
              <li>Projektowanie oraz <span className="highlighting">druk modeli 3D</span></li>
              <li>Tworzenie <span className="highlighting">wyceny</span> technicznej projektów</li>
              <li>Implementacja tworzonych projektów zgodnie z dyrektywą CE</li>
              <li>Montaż zaprojektowanych urządzeń</li>
              <li>Lutowanie płytek PCB</li>
              <li><span className="highlighting">Uczestniczenie w spotkaniach z zagranicznymi kontrahentami</span></li>
              <li><span className="highlighting">Wsparcie techniczne klienta</span>, w tym na targach automatyki</li>
              <li>Korzystanie z programów <span className="highlighting">Fusion 360</span>, <span className="highlighting">SEE Electrical</span>, <span className="highlighting">Galileo</span>, <span className="highlighting">CODESYS</span>, <span className="highlighting">PrusaSlicer</span></li>
            </ul>
          </p>
        ) : (
          <p>
          In this position, I was responsible for designing and implementing projects in the field of marketing automation, assembling and electrically connecting the final product, as well as maintaining complete project documentation.<br/>
          <p className="highlighting">The position included the following responsibilities:</p>
            <ul>
              <li>Creating <span className="highlighting">technical documentation</span></li>
              <li>Creating <span className="highlighting">technical drawings</span> and <span className="highlighting">3D models</span> in Fusion 360</li>
              <li><span className="highlighting">Developing prototype projects</span></li>
              <li><span className="highlighting">Designing electrical schematics</span> in SEE Electrical</li>
              <li>Selecting components for designed devices</li>
              <li>Designing and <span className="highlighting">3D printing models</span></li>
              <li>Preparing <span className="highlighting">technical project cost estimates</span></li>
              <li>Implementing designed projects in compliance with CE directives</li>
              <li>Assembling the designed devices</li>
              <li>Soldering PCB boards</li>
              <li><span className="highlighting">Participating in meetings with international partners</span></li>
              <li><span className="highlighting">Providing technical support to clients</span>, including at automation trade fairs</li>
              <li>Using software such as <span className="highlighting">Fusion 360</span>, <span className="highlighting">SEE Electrical</span>, <span className="highlighting">Galileo</span>, <span className="highlighting">CODESYS</span>, and <span className="highlighting">PrusaSlicer</span></li>
            </ul>
          </p>
        )}
      </div>
    </div>
  );
};

export default Experience;
