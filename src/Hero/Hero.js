import React from "react";
import { Link } from "react-router-dom";
import HeroButtons from "./HeroButtons/HeroButtons";
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
          <img src={imageUrl} alt="hero"></img>
          <p className="hero-text">{heroText}</p>
          {this.renderOwnerControls()}
          <HeroButtons />
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  renderOwnerControls = () => {
    if (TokenService.hasAuthToken()) {
      return <Link to={"/updatehero"}>Update Hero</Link>;
    }
  };

  componentDidMount() {
    fetch("https://fast-springs-85853.herokuapp.com/api/hero")
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
      <section className="hero-sect">
        {this.renderHero()}
        <div className="hero-buttons"></div>
      </section>
    );
  }
}

export default Hero;
