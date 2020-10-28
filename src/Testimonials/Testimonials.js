import React from "react";
import { Link } from "react-router-dom";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import "./Testimonials.css";

class Testimonials extends React.Component {
  state = {
      testimonials: [],
      isLoaded: false,
  };
  
  updateTestimonials = () => {
    (console.log('update testimonials ran'))
  }

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
  }

  componentDidMount() {
    this.getTestimonials();
  }

  render() {
    const renderTestimonial = () => {
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
            <Link to="/addtest">Add Testimonial</Link>
          </div>
        );
      } else {
        return <p>Loading...</p>;
      }
    };

    return <section className="testimonials">{renderTestimonial()}</section>;
  }
}

export default Testimonials;
