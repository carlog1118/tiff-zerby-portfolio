import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./UpdateAboutPage.css";

class UpdateAboutPage extends React.Component {
  state = {
    about_text: "",
    image_url: "",
    isLoaded: false,
  };

  handleTextChange = (e) => {
    this.setState({
      about_text: e.target.value,
    });
  };

  handleImageChange = (e) => {
    this.setState({
      image_url: e.target.value,
    });
  };

  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.about_text || this.state.image_url) {
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
          image_url: res[0].image_url,
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
              onChange={this.handleTextChange}
              value={this.state.about_text}
              cols={50}
              rows={25}
              required
            ></textarea>
            <label htmlFor="image_url">Image Url:</label>
            <input
              type="text"
              name="image_url"
              id="image_url"
              onChange={this.handleImageChange}
              value={this.state.image_url}
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

export default UpdateAboutPage;
