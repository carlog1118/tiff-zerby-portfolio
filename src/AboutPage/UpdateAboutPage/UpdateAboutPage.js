import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./UpdateAboutPage.css";

class UpdateAboutPage extends React.Component {
  state = {
    content: "",
    isLoaded: false,
  };

  /*handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };

  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.content) {
      fetch("http://localhost:8000/api/hero/1", {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          }
        })
        .catch((err) => alert(err))
        .then(this.navHome());
    } else {
      alert("Hero must contain some content.");
    }
  };

  componentDidMount() {
    fetch("http://localhost:8000/api/hero")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          content: res[0].content,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }*/

  render() {
    return (
      <div className="up-about-cont">
        <Header />
        <section className="up-about-page">
          <h2>Update Hero</h2>
          <form className="update-form">
            <label htmlFor="aboutText">Hero Text:</label>
            <textarea
              type="text"
              name="aboutText"
              id="aboutText"
              onChange={this.handleChange}
              value={this.state.content}
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
