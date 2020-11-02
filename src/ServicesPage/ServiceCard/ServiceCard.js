import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../Utils/TokenService";
import "./ServiceCard.css";

class ServiceCard extends React.Component {
  handleDelete = (id, service) => {
    fetch(`http://localhost:8000/api/services/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        } else {
          alert(`${service} deleted.`);
        }
      })
      .catch((e) => alert(e));
  };

  renderCard = () => {
    const isLoaded = this.props.isLoaded;
    if (isLoaded) {
      const service = this.props.service.name;
      const description = this.props.service.description;
      return (
        <>
          <h3>{service}</h3>
          <p>{description}</p>
          {this.renderOwnerControls()}
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  renderOwnerControls = () => {
    const service = this.props.service.name;
    const id = this.props.service.id;
    if (TokenService.hasAuthToken()) {
      return (
        <>
          <button
            type="button"
            onClick={() => {
              this.handleDelete(id, service);
            }}
          >
            Delete
          </button>
          <Link to={`/updateservice/${id}`}>Update</Link>
        </>
      );
    }
  };

  render() {
    return <div className="service-card">{this.renderCard()}</div>;
  }
}

export default ServiceCard;
