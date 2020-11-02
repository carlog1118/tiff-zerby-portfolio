import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./UpdateAboutPage.css";

class UpdateAboutPage extends React.Component {
  state = {
    about_text: "",
    isLoaded: false,
  };

  handleChange = (e) => {
    this.setState({
      about_text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.about_text) {
      fetch("http://localhost:8000/api/about/1", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          } else {
            alert("About updated.");
          }
        })
        .catch((err) => alert(err));
    } else {
      alert("About must contain some content.");
    }
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/about")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          about_text: res[0].about_text,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="up-about-cont">
        <Header />
        <section className="up-about-page">
          <h2>Update About</h2>
          <form className="update-form" onSubmit={this.handleSubmit}>
            <label htmlFor="aboutText">Hero Text:</label>
            <textarea
              type="text"
              name="aboutText"
              id="aboutText"
              onChange={this.handleChange}
              value={this.state.about_text}
              cols={50}
              rows={25}
              required
            ></textarea>
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

export default UpdateAboutPage;
