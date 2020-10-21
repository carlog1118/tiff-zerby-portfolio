import React from "react";
import Header from "../Header/Header";
import ServiceCard from "./ServiceCard/ServiceCard";
import Footer from "../Footer/Footer";
import "./ServicesPage.css";

class ServicesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: "",
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/services")
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
    const renderServices = () => {
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
          </>
        );
      } else {
        return <p>Loading...</p>;
      }
    };

    return (
      <div className="services-page">
        <Header />
        <section className="services">
          <h2>Services</h2>
          {renderServices()}
        </section>
        <Footer />
      </div>
    );
  }
}

export default ServicesPage;
