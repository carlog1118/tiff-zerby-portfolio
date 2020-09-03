import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ContactPage.css";

class ContactPage extends React.Component {
  render() {
    return (
      <div className="contact-page-cont">
        <Header />
        <section className="contact-page">
          <h2>Let's Talk</h2>
          <form
            className="email-form"
            action="mailto:someone@example.com"
            method="post"
            encType="text/plain"
          >
            Name:
            <br />
            <input type="text" name="name" />
            <br />
            E-mail:
            <br />
            <input type="text" name="mail" />
            <br />
            Comment:
            <br />
            <input type="text" name="comment" size="50" />
            <br />
            <br />
            <input type="submit" value="Send" />
            <input type="reset" value="Reset" />
          </form>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
