import React from "react";
import Hero from "../Hero/Hero";
import TestCar from "../Testimonials/Carousel/TestCar"
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page-cont">
        <section className="home-page">
          <Hero />
          <TestCar/>
        </section>
      </div>
    );
  }
}
export default HomePage;
