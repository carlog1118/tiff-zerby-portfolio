import React from "react";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page-cont">
        <Header />
        <section className="home-page">
          <Hero className="hero" />
          <Testimonials className="testimonials" />
        </section>
        <Footer />
      </div>
    );
  }
}
export default HomePage;
