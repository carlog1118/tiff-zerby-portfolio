import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../Utils/TokenService";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import "./Testimonials.css";

class Testimonials extends React.Component {
  state = {
    testimonials: [],
    isLoaded: false,
  };

  renderTestimonial = () => {
    if (this.state.isLoaded) {
      return (
        <div>
          <h2>Testimonials</h2>
          {this.state.testimonials.map((test) => (
            <TestimonialCard
              isLoaded={this.state.isLoaded}
              testimonial={test}
              key={test.id}
            />
          ))}
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  renderOwnerControls = () => {
    if (TokenService.hasAuthToken()) {
      return (
        <>
          <Link to="/addtest">Add Testimonial</Link>
        </>
      );
    }
  };

  getTestimonials = () => {
    fetch("http://localhost:8000/api/testimonials")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          testimonials: res,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  };

  componentDidMount() {
    this.getTestimonials();
  }

  render() {
    return (
      <section className="testimonials">{this.renderTestimonial()}</section>
    );
  }
}

export default Testimonials;
