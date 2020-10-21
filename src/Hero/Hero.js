import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

class Hero extends React.Component {
  state = {
    heroResults: "",
    isLoaded: false,
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
    const renderHero = () => {
      if (this.state.isLoaded) {
        const heroText = this.state.heroResults.content;
        return (
          <>
            <p>{heroText}</p>
            <Link className="buttons" to={"/updatehero"}>
              Update Hero
            </Link>
          </>
        );
      } else {
        return <p>Loading...</p>;
      }
    };

    return (
      <section className="hero">
        {renderHero()}
        <div className="buttons">
          <a>Strategy</a>
          <a>Content</a>
          <a>Training</a>
        </div>
      </section>
    );
  }
}

export default Hero;
