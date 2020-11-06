import React from "react";
import Header from "../Header/Header";
import ServiceCard from "./ServiceCard/ServiceCard";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import TokenService from "../Utils/TokenService";
import "./ServicesPage.css";

class ServicesPage extends React.Component {
  state = {
    services: "",
    isLoaded: false,
  };

  renderServices = () => {
    if (this.state.isLoaded) {
      return (
        <>
          <div className="service-card-container">
            {this.state.services.map((service) => (
              <ServiceCard
                isLoaded={this.state.isLoaded}
                service={service}
                key={service.id}
              />
            ))}
          </div>
          {this.renderOwnerControls()}
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  renderOwnerControls = () => {
    if (TokenService.hasAuthToken()) {
      return (
        <>
          <Link to="/addservice">Add Service</Link>
        </>
      );
    }
  };
  
  componentDidMount() {
    fetch("https://fast-springs-85853.herokuapp.com/api/services")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          services: res,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    

    return (
      <div className="services-page">
        <Header />
        <section className="services">
          <h2>Services</h2>
          {this.renderServices()}
        </section>
        <Footer />
      </div>
    );
  }
}

export default ServicesPage;
