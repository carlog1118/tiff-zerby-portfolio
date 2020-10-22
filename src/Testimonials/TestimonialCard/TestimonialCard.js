import React from "react";
import { Link } from 'react-router-dom';
import "./TestimonialCard.css";

class TestimonialCard extends React.Component {
  render() {
    const renderCard = () => {
      if (this.props.isLoaded) {
        const author = this.props.testimonial.author;
        const quote = this.props.testimonial.quote;
        const client = this.props.testimonial.client;
        const id = this.props.testimonial.id;
        return (
          <div>
            <h3 className="client">{client}</h3>
            <q>{quote}</q>
            <p>-{author}</p>
            <Link to={`/updatetest/${id}`}>Update</Link>
          </div>
        );
      } else {
        return <p>Loading...</p>;
      }
    };

    return <div className="test-card-cont">{renderCard()}</div>;
  }
}

export default TestimonialCard;
