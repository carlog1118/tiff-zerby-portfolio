import React from "react";
import { Link } from "react-router-dom";
import "./HeroButtons.css";
import TokenService from "../../Utils/TokenService";

class HeroButtons extends React.Component {
  state = {
    buttons: [],
    isLoaded: false,
  };

  renderOwnerControls = (id) => {
    if (TokenService.hasAuthToken()) {
      return <Link to={`/updatebutton/${id}`}>Update</Link>;
    }
  };

  renderButtons = () => {
    if (this.state.isLoaded) {
      const [buttonOne, buttonTwo, buttonThree] = this.state.buttons;
      return (
        <div className={TokenService.hasAuthToken ? "owner-hero-buttons" : "hero-buttons"}>
          <Link to={"/services"}>{buttonOne.name}</Link>
          {this.renderOwnerControls(buttonOne.id)}
          <Link to={"/services"}>{buttonTwo.name}</Link>
          {this.renderOwnerControls(buttonTwo.id)}
          <Link to={"/services"}>{buttonThree.name}</Link>
          {this.renderOwnerControls(buttonThree.id)}
        </div>
      );
    }
  };

  componentDidMount() {
    fetch("https://fast-springs-85853.herokuapp.com/api/buttons")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          buttons: res,
          isLoaded: true,
        });
      })
      .catch((err) => alert(err));
  }

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}

export default HeroButtons;
