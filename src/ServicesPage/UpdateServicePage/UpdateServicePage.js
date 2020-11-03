import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import TokenService from "../../Utils/TokenService";
import "./UpdateServicePage.css";

class UpdateServicePage extends React.Component {
  state = {
    service: "",
    description: "",
    isLoaded: false,
  };

  navHome = () => {
    this.props.history.push("/");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const updatedService = {
      name: this.state.service,
      description: this.state.description,
    };
    if (updatedService) {
      fetch(`http://localhost:8000/api/services/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          "authorization": `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify(updatedService),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          } else {
            alert("Service updated.");
          }
        })
        .then()
        .catch((err) => alert(err));
    } else {
      alert("Service must contain some content.");
    }
  };

  renderPage = () => {
    const service = this.state.service;
    const description = this.state.description;
    if (this.state.isLoaded) {
      return (
        <section className="up-serv-page">
          <h2>Update Service</h2>
          <form className="update-form" onSubmit={this.handleSubmit}>
            <label htmlFor="service">Service</label>
            <input
              type="text"
              name="service"
              id="service"
              value={service}
              onChange={this.handleChange}
            ></input>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              id="description"
              cols={50}
              rows={10}
              value={description}
              onChange={this.handleChange}
              required
            ></textarea>
            <button type="submit">Update</button>
            <button type="button" onClick={this.navHome}>
              Cancel
            </button>
          </form>
        </section>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:8000/api/services/${id}`, {
      method: "GET",
      headers: {
        "authorization": `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          service: res.name,
          description: res.description,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="up-serv-cont">
        <Header />
        {this.renderPage()}
        <Footer />
      </div>
    );
  }
}

export default UpdateServicePage;
