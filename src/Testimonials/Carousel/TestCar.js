import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../Utils/TokenService";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import Carousel from "react-elastic-carousel";
import './TestCar.css'

class TestCar extends React.Component {
  state = {
    testimonials: [],
    isLoaded: false,
  };

  getTestimonials = () => {
    fetch("https://fast-springs-85853.herokuapp.com/api/testimonials")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          testimonials: res,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  };

  renderCarousel = () => {
    return this.state.isLoaded ? (
      <Carousel>
        {this.state.testimonials.map((test) => (
          <TestimonialCard
            isLoaded={this.state.isLoaded}
            testimonial={test}
            key={test.id}
          />
        ))}
      </Carousel>
    ) : (
      <h1>Loading...</h1>
    );
  };

  renderOwnerControls = () => {
    if (TokenService.hasAuthToken()) {
      return (
        <div className="add-test-butt-cont">
          <Link to="/addtest" className="add-test-link">Add Testimonial</Link>
        </div>
      );
    }
  };

  componentDidMount() {
    this.getTestimonials();
  }

  render() {
    return (
      <div className="test-container">
        {this.renderCarousel()}
        {this.renderOwnerControls()}
      </div>
    );
  }
}

export default TestCar;
