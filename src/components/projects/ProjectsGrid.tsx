import React, { useEffect, useState } from "react";
import "./projects.scss";
import java from "../../assets/images/java.svg";
import react_img from "../../assets/images/react.svg";
import Carousel from "react-multi-carousel";
import { useLanguage } from "../contexts/LanguageContext";

type Projects = {
  id: number;
  title: string;
  description: string;
  link: string;
  img: string;
  img2?: string;
};

const responsive = {
  superLargeDesktop: {
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

const ProjectsGrid: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { language } = useLanguage();
  const navigateToProject = (link: string) => {
    window.open(link);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projectsList: Projects[] = [
    {
      id: 1,
      title: "Fines",
      description:
        language === "pl"
          ? "Główne technologie: Java/Thymleaf; Projekt dodawania mandatów"
          : "Main technologies: Java/Thymleaf; Mandate addition project",
      link: "https://github.com/Filip-Politowski/Fines_V2",
      img: java,
    },
    {
      id: 2,
      title: "WealthVoyage",
      description:
        language === "pl"
          ? "Główne technologie: Java/React; Zarządzanie finansami osobistymi"
          : "Main technologies: Java/React; Managing personal finances",
      link: "https://github.com/Filip-Politowski/WealthVoyage",
      img: java,
      img2: react_img,
    },
    {
      id: 3,
      title: "ShopMateList",
      description:
        language === "pl"
          ? "Główne technologie: Java; Tworzenie list zakupowych"
          : "Main technologies: Java; Creation of shopping lists",
      link: "https://github.com/Filip-Politowski/ShopeMateList",
      img: java,
    },
    {
      id: 4,
      title: "AboutMePage",
      description:
        language === "pl"
          ? "Główne technologie: React; Strona z informacjami o mnie dla rekruterów"
          : "Main technologies: React; Page with information about me for recruiters",
      link: "https://github.com/Filip-Politowski/ShopeMateList",
      img: react_img,
    },
  ];

  return (
    <div className="projects-container" id="projects">
      {!isMobile ? (
        <div className="grid-container">
          {projectsList.map((project) => (
            <div key={project.id} className="grid-item">
              <img src={project.img} alt="" />
              {project.img2 && <img src={react_img} alt="" />}

              <div
                className="overlay"
                onClick={() => navigateToProject(project.link)}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="project-carousel">
          <Carousel responsive={responsive} infinite={true} showDots={true}>
            {projectsList.map((project) => (
              <div key={project.id} className="grid-item">
                <img src={project.img} alt="" />
                {project.img2 && <img src={react_img} alt="" />}
                <div
                  className="overlay"
                  onClick={() => navigateToProject(project.link)}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default ProjectsGrid;
