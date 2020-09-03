import React from "react";
import "./Hero.css";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heroResults: "",
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost/tiff-test/wp-json/wp/v2/hero")
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
        const heroText = this.state.heroResults.acf.hero_text;
        return <p>{heroText}</p>;
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
