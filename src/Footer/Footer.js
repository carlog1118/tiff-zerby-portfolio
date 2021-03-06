import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./Footer.css";

/* create new, signup form, begin, action="" */

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-section">
        <p>Subscribe to Newsletter</p>
        <MailchimpSubscribe url="https://gmail.us17.list-manage.com/subscribe/post?u=282d8fce867cb528332793893&amp;id=bc6a6da0df" />
        <div className="social-media-cont">
          <div className="footer-icon">LI</div>
          <div className="footer-icon">Email</div>
          <div className="footer-icon">Insta</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
