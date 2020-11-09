import React from "react";
import TokenService from "../../Utils/TokenService";
import "./UpdateHeroButtonPage.css";

class UpdateHeroButtonPage extends React.Component {
  state = {
    name: "",
    isLoaded: false,
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name) {
      const id = this.props.match.params.id;
      const updatedButton = {
        name: this.state.name,
      };
      fetch(`https://fast-springs-85853.herokuapp.com/api/buttons/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(updatedButton),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          } else {
            alert("Button updated.");
          }
        })
        .catch((err) => alert(err));
    } else {
      alert("Button must contain some text.");
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`https://fast-springs-85853.herokuapp.com/api/buttons/${id}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          name: res.name,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="up-hero-butt-cont">
        <section className="up-hero-butt-page">
          <h2>Update Hero</h2>
          <form className="up-hero-butt-form" onSubmit={this.handleSubmit}>
            <label htmlFor="name">Button Text</label>
            <input
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            ></input>
            <button type="submit">Update</button>
            <button type="button" onClick={this.navHome}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default UpdateHeroButtonPage;
