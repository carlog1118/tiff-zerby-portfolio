import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TokenService from "../Utils/TokenService";
import { Link } from "react-router-dom";
import "./AboutPage.css";

class AboutPage extends React.Component {
  state = {
    aboutResults: "",
    isLoaded: false,
  };

  renderAbout = () => {
    if (this.state.isLoaded) {
      const aboutText = this.state.aboutResults.about_text;
      const imageUrl = this.state.aboutResults.image_url.replace(
        "?dl=0",
        "?raw=1"
      );
      return (
        <>
          <img src={imageUrl} alt="dog"></img>
          <p>{aboutText}</p>
          {this.renderOwnerControls()}
        </>
      );
    } else {
      return <p>loading...</p>;
    }
  };

  renderOwnerControls = () => {
    if (TokenService.hasAuthToken()) {
      return (
        <>
          <Link to={"/updateabout"}>Update About</Link>
        </>
      );
    }
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/about")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          aboutResults: res[0],
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="about-page-container">
        <Header />
        <section className="about-section">
          <h2>About me</h2>
          <div className="about-cont">{this.renderAbout()}</div>
          <Link to={"/contact"}>Let's Talk</Link>
        </section>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
