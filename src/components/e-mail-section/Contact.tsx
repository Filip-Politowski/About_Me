import React from "react";
import "./contact.scss";
import email from "../../assets/images/email.svg";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-info-section">
        <div className="information-container">
          <h3>Contact directly via:</h3>
          <p>
            Phone No.: <strong>+48 785 106 215</strong>
          </p>
          <p>
            E-mail: <strong>fil.politowski@gmail.com</strong>
          </p>
          <img src={email} alt="email-icon" />
        </div>
      </div>
      <div className="form-section">
        <div className="form-container">
          <form action="" className="email-form">
            <h3>Or contact using the form</h3>
            <div className="item">
              <label>First Name: </label>
              <input type="text" placeholder="Type first name..." />
            </div>
            <div className="item">
              <label>Last Name: </label>
              <input type="text" placeholder="Type last name..." />
            </div>
            <div className="item">
              <label>Email Address: </label>
              <input type="text" placeholder="Type email address..." />
            </div>
            <div className="item">
              <label>Phone No.: </label>
              <input type="text" placeholder="Type phone number..." />
            </div>
            <div className="item item-message">
              <label>Message: </label>
              <textarea placeholder="Type your message..."></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
