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
        Zawodowo oraz z wykształcenia jestem automatykiem, jednak od dłuższego czasu przebranżawiam się na programistę backendowego, wplatając w to także elementy frontendu.  
        Głównym językiem programowania, którego się uczę, jest <span className="highlighting">Java</span> z wykorzystaniem frameworka <span className="highlighting">Spring Boot</span>. Dodatkowo rozwijam swoje umiejętności na frontendzie, programując w <span className="highlighting">React</span>.  
        Każdego dnia staram się poszerzać swoją wiedzę z zakresu programowania, realizując własne projekty. Ukończyłem również dwa kursy programowania, aby zainicjować swoją przygodę z tą dziedziną.<br/><br/>
    
        Obecnie poszukuję możliwości zatrudnienia na stanowisku <span className="highlighting">Junior Java Developer</span> lub <span className="highlighting">Junior Java Full Stack Developer</span>. Choć nie posiadam jeszcze komercyjnego doświadczenia w programowaniu, wyróżniam się dużą zdolnością do <span className="highlighting">szybkiego uczenia się nowych rzeczy</span>.  
        W pracy najbardziej cenię <span className="highlighting">swobodną atmosferę</span> oraz <span className="highlighting">zespołową współpracę</span> – uważam, że najlepsze projekty powstają dzięki dobrej kooperacji.<br/><br/>
    
        Jestem gotowy do podjęcia nowej pracy <span className="highlighting">od zaraz</span>. Pracę mogę podjąć stacjonarnie w <span className="highlighting">Gdańsku/Toruniu lub Bydgoszczy</span> oraz zdalnie w reszcie świata. Jeśli jesteś zainteresowany/a, zapraszam do zapoznania się z <span className="highlighting">moją stroną</span> oraz do kontaktu.
              </p>
            ) : (
              <p>
              Professionally and by education, I am an automation engineer, but for some time now, I have been transitioning into a backend developer role, also incorporating some frontend elements.  
              The main programming language I am learning is <span className="highlighting">Java</span> with the use of the <span className="highlighting">Spring Boot</span> framework. Additionally, I am developing my frontend skills by programming in <span className="highlighting">React</span>.  
              Every day, I strive to expand my programming knowledge by working on my own projects. I also completed two programming courses to kickstart my journey in this field.<br/><br/>
          
              I am currently seeking employment opportunities as a <span className="highlighting">Junior Java Developer</span> or <span className="highlighting">Junior Java Full Stack Developer</span>. Although I do not yet have commercial experience in programming, I stand out for my strong ability to <span className="highlighting">quickly learn new things</span>.  
              In my work, I most value a <span className="highlighting">relaxed atmosphere</span> and <span className="highlighting">team collaboration</span> – I believe that the best projects are created through good cooperation.<br/><br/>
          
              I am ready to start a new job <span className="highlighting">ASAP</span>. I can work onsite in <span className="highlighting">Gdańsk/Toruń or Bydgoszcz</span>, as well as remotely from anywhere in the world. If you are interested, feel free to check out <span className="highlighting">my website</span> and get in touch.
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
         Lista projektów jakie robiłem w ostatnim czasie, w celu poszerzenia swoich umiejętności. 
         Wszystkie projekty znajdują się na <span className="highlighting">GitHub</span> i można przenieść się do nich bezpośrednio ze strony poprzez kliknięcie w kafelek danego projektu. 
        </p> : <p>
        A list of projects I have worked on recently to expand my skills.
        All the projects are available on <span className="highlighting">GitHub</span>, and you can navigate directly to them from the website by clicking on the respective project tile.
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
