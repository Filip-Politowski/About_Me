import React from "react";
import "./content.scss";

import TypingEffect from "../typing-effect/TypingEffect";
import Skills from "../skills/Skills";
import profile from "../../assets/images/filip.jpeg";
import Projects from "../projects/ProjectsGrid";
import Experience from "../jobs/Experience";
import Courses from "../courses/Courses";
import Education from "../education/Education";
import Contact from "../e-mail-section/Contact";
import { useLanguage } from "../contexts/LanguageContext";
const Content: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className="content-container">
      <div className="welcome-container" id="welcome">
        <img src={profile} alt="colors" />
        <div className="welcome-text-container">
          <div className="welcome-header">
            <TypingEffect
              text1={
                language === "pl"
                  ? "Cześć nazywam się Filip Politowski"
                  : "Hi I'm Filip Politowski"
              }
              text2={
                language === "pl"
                  ? "I aktualnie szukam nowych możliwości podjęcia pracy"
                  : "And I am currently looking for new job opportunities"
              }
              eraseSpeed={40}
              typingSpeed={70}
              loop={true}
            />
          </div>
          <div className="welcome-text">
            {language === "pl" ? (
              <p>
                tutaj sobie pisze po polsku asoduihqw
                eianosdfuoiqhnaoifhqwoujandcouqijlhapikjar
                oajlhbqwoiehasdnioqajandfiopqhenaipsdfklhneoqijerbnqdfiohn
                dihjqwipj dq wdqw
                eianosdfuoiqhnaoifhqwoujandcouqijlhapikjarqwepo oidh qowidhnqdcn
                qwiodhqnwe qdcopjqwe ikqd mqpidkj ipkc;mqiper jqwdmop;fkcm
                ioqwjklen qiklcndqioljken qwcpklq wne lkn
              </p>
            ) : (
              <p>
                tutaj pisze po angielsku asoduihqw
                eianosdfuoiqhnaoifhqwoujandcouqijlhapikjar
                oajlhbqwoiehasdnioqajandfiopqhenaipsdfklhneoqijerbnqdfiohn
                dihjqwipj dq wdqw
                eianosdfuoiqhnaoifhqwoujandcouqijlhapikjarqwepo oidh qowidhnqdcn
                qwiodhqnwe qdcopjqwe ikqd mqpidkj ipkc;mqiper jqwdmop;fkcm
                ioqwjklen qiklcndqioljken qwcpklq wne lkn
              </p>
            )}
          </div>
        </div>
      </div>
      {language === "pl" ? (
        <p className="title">Umiejętności</p>
      ) : (
        <p className="title">Skills</p>
      )}

      <Skills />

      <div className="chapter-description">
        {language === "pl" ? (
          <p className="title project-title">Projekty</p>
        ) : (
          <p className="title project-title">Projects</p>
        )}
        {language === "pl" ? <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into asdqwe
        </p> : <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into
        </p>}
        
      </div>
      <Projects />

      <div className="chapter-description">
        {language === "pl" ? (
          <p className="title courses-title">Kursy</p>
        ) : (
          <p className="title courses-title">Courses</p>
        )}
      </div>
      <Courses />

      <div className="chapter-description">
        {language === "pl" ? (
          <p className="title experience-title">Doświadczenie</p>
        ) : (
          <p className="title experience-title">Experience</p>
        )}
      </div>
      <Experience />
      <div className="chapter-description">
        {language === "pl" ? (
          <p className="title education-title">Edukacja</p>
        ) : (
          <p className="title education-title">Education</p>
        )}
      </div>
      <Education />
      <div className="chapter-description">
        {language === "pl" ? (
          <p className="title contact-title">Skontaktuj się</p>
        ) : (
          <p className="title contact-title">Get In Touch</p>
        )}
      </div>
      <Contact />
    </div>
  );
};

export default Content;
