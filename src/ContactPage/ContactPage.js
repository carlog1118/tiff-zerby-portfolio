import React from "react";

import emailjs from "emailjs-com";
import "./ContactPage.css";

class ContactPage extends React.Component {
  /*Hello tiff,

You got a new message {{from_name}}:

{{from_email}}

{{message}}

Best wishes,
EmailJS team*/

  sendEmail = (e) => {
    e.preventDefault();
    //(service_id, template_id, e_target, user_id)
    emailjs
      .sendForm(
        "service_dtwjim6",
        "template_k4jv3x9",
        e.target,
        "user_YvYoxq48ilj781xjFyTkO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <div className="contact-page-cont">
        <section className="contact-page">
          <h2>Let's Talk</h2>
          <form className="contact-form">
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="from_name" />
            <label>Email</label>
            <input type="email" name="from_email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </form>
        </section>
      </div>
    );
  }
}

export default ContactPage;
