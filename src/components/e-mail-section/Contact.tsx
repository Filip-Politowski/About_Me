
import { useLanguage } from "../contexts/LanguageContext";
import "./contact.scss";
import emailjs from "emailjs-com";
const Contact = () => {
  const { language, setLanguage } = useLanguage();
 
  
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("service_b0a8dsa", "template_6h3p7dc", e.target,"8rV0UWR7gaEsObUTV")
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
      e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-info-section">
        <div className="information-container">
          {language === "pl" ? (
            <h3 id="contact">Skontaktuj sie bezpośrednio poprzez:</h3>
          ) : (
            <h3 id="contact">Contact directly via:</h3>
          )}
          {language === "pl" ? (
            <p>
              Numer Telefonu: <strong>+48 785 106 215</strong>
            </p>
          ) : (
            <p>
              Phone No.: <strong>+48 785 106 215</strong>
            </p>
          )}
          <p>
            E-mail: <strong>fil.politowski@gmail.com</strong>
          </p>
        </div>
      </div>
      <div className="form-section">
        <div className="form-container">
          <form action="" className="email-form" onSubmit={sendEmail}>
            {language === "pl" ? (
              <h3>lub skontaktuj sie poprzez formularz</h3>
            ) : (
              <h3>Or contact using the form</h3>
            )}

            <div className="item">
              {language === "pl" ? (
                <label>Imię: </label>
              ) : (
                <label>First Name: </label>
              )}
              <input
                type="text"
                placeholder={
                  language === "pl" ? "Wpisz imię..." : "Type first name..."
                }
                name="firstname"
              />
            </div>
            <div className="item">
              {language === "pl" ? (
                <label>Nazwisko: </label>
              ) : (
                <label>Last Name: </label>
              )}
              <input
                type="text"
                placeholder={
                  language === "pl" ? "Wpisz nazwisko..." : "Type last name..."
                }
                name="lastname"
              />
            </div>
            <div className="item">
              {language === " pl" ? (
                <label>Adres Email: </label>
              ) : (
                <label>Email Address: </label>
              )}
              <input
                type="text"
                placeholder={
                  language === "pl"
                    ? "Wpisz adres email..."
                    : "Type email address..."
                }
                name="email"
              />
            </div>
            <div className="item">
              {language === "pl" ? (
                <label>Numer telefonu: </label>
              ) : (
                <label>Phone No.: </label>
              )}
              <input
                type="text"
                placeholder={
                  language === "pl"
                    ? "Wpisz numer telefonu..."
                    : "Type phone number..."
                }
                name="phone"
              />
            </div>
            <div className="item item-message">
              {language === "pl" ? (
                <label>Wiadomość: </label>
              ) : (
                <label>Message: </label>
              )}
              <textarea
                placeholder={
                  language === "pl"
                    ? "Wpisz swoją wiadomość..."
                    : "Type your message..."
                }
                name="message"
              ></textarea>
            </div>
            <button>{language === "pl" ? "Wyślij" : "Send"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
