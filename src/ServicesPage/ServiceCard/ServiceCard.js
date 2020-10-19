import React from "react";
import "./ServiceCard.css";

class ServiceCard extends React.Component {
  render() {
    const renderCard = () => {
      const isLoaded = this.props.isLoaded;
      if (isLoaded) {
        const name = this.props.service.name;
        const description = this.props.service.description;
        return (
          <>
            <h3>{name}</h3>
            <p>{description}</p>
          </>
        );
      } else {
        return <p>Loading...</p>;
      }
    };

    return <div className="service-card">{renderCard()}</div>;
  }
}

export default ServiceCard;
