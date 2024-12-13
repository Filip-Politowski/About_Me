import React from "react";
import "./projects.scss";
import java from "../../assets/images/java.svg";

type Projects = {
  id: number;
  title: string;
  description: string;
};

const projects: Projects[] = [
  { id: 1, title: "Projekt 1", description: "Opis projektu 1" },
  { id: 2, title: "Projekt 2", description: "Opis projektu 2" },
  { id: 3, title: "Projekt 3", description: "Opis projektu 3" },
  { id: 4, title: "Projekt 4", description: "Opis projektu 4" },
  { id: 5, title: "Projekt 5", description: "Opis projektu 5" },
];

const Projects: React.FC = () => {
  // const [isMobile, setIsMobile] = useState<boolean>(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);


  return (
    <div className="grid-container">
      {projects.map((project) => (
        <div key={project.id} className="grid-item">
          <img src={java} alt="" />
          <div className="overlay">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
