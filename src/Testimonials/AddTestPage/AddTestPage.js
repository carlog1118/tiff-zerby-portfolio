import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./AddTestPage.css";

class AddTestPage extends React.Component {
  state = {
    client: "",
    quote: "",
    author: "",
  };

  handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value,
    });
  };

  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { client, quote, author } = e.target;
    const newTest = {
      client: client.value,
      quote: quote.value,
      author: author.value,
    };

    if (newTest) {
      fetch("http://localhost:8000/api/testimonials", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTest),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          } else {
            alert("Testimonial added.");
          }
        })
        .catch((e) => alert(e));
    }
  };

  render() {
    return (
      <div className="up-test-cont">
        <Header />
        <section className="up-test-page">
          <h2>Update Hero</h2>
          <form className="update-form" onSubmit={this.handleSubmit}>
            <label htmlFor="client">Client</label>
            <input type="text" name="client" id="client" required></input>
            <label htmlFor="test-quote">Quote</label>
            <textarea
              type="text"
              name="quote"
              id="quote"
              cols={50}
              rows={10}
              required
            ></textarea>
            <label htmlFor="test-author">Author</label>
            <input type="text" name="author" id="author" required></input>
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

export default AddTestPage;
