import React from "react";
import { Link } from "react-router-dom";
import HeroButtons from './HeroButtons/HeroButtons';
import TokenService from "../Utils/TokenService";
import "./Hero.css";

class Hero extends React.Component {
  state = {
    heroResults: "",
    isLoaded: false,
  };

  renderHero = () => {
    if (this.state.isLoaded) {
      const heroText = this.state.heroResults.content;
      const imageUrl = this.state.heroResults.image_url.replace(
        "?dl=0",
        "?raw=1"
      );

      return (
        <>
          <img src={imageUrl} alt="hero image"></img>
          <p>{heroText}</p>
          {this.renderOwnerControls()}
          <HeroButtons/>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  renderOwnerControls = () => {
    if (TokenService.hasAuthToken()) {
      return <Link to={"/updatehero"}>Update</Link>;
    }
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/hero")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          heroResults: res[0],
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    return (
      <section className="hero">
        {this.renderHero()}
        <div className="buttons">

        </div>
      </section>
    );
  }
}

export default Hero;
