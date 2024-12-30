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
       <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into</p>
      </div>
    </div>
  );
};

export default Experience;
