import React from "react";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page-cont">
        <section className="home-page">
          <Hero />
          <Testimonials className="testimonials" />
        </section>
      </div>
    );
  }
}
export default HomePage;
