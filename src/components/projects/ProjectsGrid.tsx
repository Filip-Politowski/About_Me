import React, { useEffect, useState } from "react";
import "./projects.scss";
import java from "../../assets/images/java.svg";
import Carousel from "react-multi-carousel";

type Projects = {
  id: number;
  title: string;
  description: string;
};

const projectsList: Projects[] = [
  { id: 1, title: "Projekt 1", description: "Opis projektu 1" },
  { id: 2, title: "Projekt 2", description: "Opis projektu 2" },
  { id: 3, title: "Projekt 3", description: "Opis projektu 3" },
  { id: 4, title: "Projekt 4", description: "Opis projektu 4" },
  { id: 5, title: "Projekt 5", description: "Opis projektu 5" },
];

const ProjectsGrid: React.FC = () => {
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

  const [isMobile, setIsMobile] = useState<boolean>(false);

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

  return (
    <div className="projects-container" id="projects">
      {!isMobile ?(
      <div className="grid-container">
        {projectsList.map((project) => (
          <div key={project.id} className="grid-item">
            <img src={java} alt="" />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      )
      :(
      <div className="project-carousel">
        <Carousel responsive={responsive} infinite={true} showDots={true}>
        {projectsList.map((project) => (
          <div key={project.id} className="grid-item">
            <img src={java} alt="" />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
        </Carousel>
      </div>
      )
      }
    </div>
  );
};

export default ProjectsGrid;
