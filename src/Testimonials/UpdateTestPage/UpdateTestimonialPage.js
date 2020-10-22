import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./UpdateTestPage.css";

class UpdateTestPage extends React.Component {
  /*state = {
    content: "",
    isLoaded: false,
  };

  handleChange = (e) => {
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
          } else {
            alert("Hero updated.");
          }
        })
        .catch((err) => alert(err));
      //.then(this.navHome());
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
      <div className="up-test-cont">
        <Header />
        <section className="up-test-page">
          <h2>Update Hero</h2>
          <form className="update-form">
            <label htmlFor="test-client">Client</label>
            <input type="text" name="test-client" id="test-client"></input>
            <label htmlFor="test-quote">Quote</label>
            <textarea
              type="text"
              name="test-quote"
              id="test-quote"
              
      
              cols={50}
              rows={10}
              required
            ></textarea>
            <label htmlFor="test-author">Author</label>
            <input type="text" name="test-author" id="test-author"></input>
            <button type="submit">Update</button>
            <button type="button">
              Cancel
            </button>
          </form>
        </section>
        <Footer />
      </div>
    );
  }
}

export default UpdateTestPage;
