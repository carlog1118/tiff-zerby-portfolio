import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ServicesPage.css";

class ServicesPage extends React.Component {
  render() {
    return (
      <div className="services-page-container">
        <Header />
        <section className="services-section">
          <h3>Services</h3>
          <p>Service 1</p>
          <p>Service 2</p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ServicesPage;
