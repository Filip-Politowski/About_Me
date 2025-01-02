import React from "react";
import "./experience.scss";

const Experience = () => {
  return (
    <div className="job-container" id="experience">
      <div className="job-information">
        <div className="job-information-fields">
          <p className="information-title">Date: </p>
          <p className="details">10.2018 - 11.2024</p>
        </div>
        <div className="job-information-fields">
          <p className="information-title">Job title: </p>
          <p className="details">Automation Engineer</p>
        </div>
        <div className="job-information-fields">
          <p className="information-title">Company name: </p>
          <p className="details">Zaczarowany Ołówek</p>
        </div>
        <div className="job-information-fields">
          <p className="information-title">Company address: </p>
          <p className="details">Juszkowo - Poland</p>
          
        </div>
        <hr/>
       
      </div>
      <div className="job-description">
       <p>Creation of technical documentation
• Creation of technical drawings and 3D models in
Fusion 360
• Development of prototype projects
• Design of electrical diagrams in SEE Electrical
• Selection of components for designed devices
• Design and 3D printing of models
• Preparation of project quotations
• Implementation of projects in accordance with
CE directives
• Assembling designed devices
• Participation in meetings with foreign
contractors
• Providing technical support to customers,
including at automation fairs
• Proficient in Fusion 360, SEE Electrical, Galileo,
CODESYS, and PrusaSlicer</p>
      </div>
    </div>
  );
};

export default Experience;
