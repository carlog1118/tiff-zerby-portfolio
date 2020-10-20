import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./NotFoundPage.css";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found-cont">
        <Header />
        <section className="not-found-page">
          <h2>The page you've requested doesn't exist.</h2>
        </section>
        <Footer />
      </div>
    );
  }
}

export default NotFoundPage;
