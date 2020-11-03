import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
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
        name: this.state.name
      }
      fetch(`http://localhost:8000/api/buttons/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          'authorization': `bearer ${TokenService.getAuthToken()}`
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

    fetch(`http://localhost:8000/api/buttons/${id}`)
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
      <div className="up-butt-cont">
        <Header />
        <section className="up-butt-page">
          <h2>Update Hero</h2>
          <form className="update-form" onSubmit={this.handleSubmit}>
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
        <Footer />
      </div>
    );
  }
}

export default UpdateHeroButtonPage;
