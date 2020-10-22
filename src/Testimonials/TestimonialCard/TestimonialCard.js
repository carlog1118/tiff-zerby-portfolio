import React from "react";
import { Link } from "react-router-dom";
import "./TestimonialCard.css";

class TestimonialCard extends React.Component {
  handleDelete = (id, client) => {
    fetch(`http://localhost:8000/api/testimonials/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        } else {
          alert(`${client} testimonial deleted.`);
        }
      })
      .catch((e) => alert(e));
  };

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
            <button
              type="button"
              onClick={() => {
                this.handleDelete(id, client);
              }}
            >
              Delete
            </button>
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
