import React from "react";
import TokenService from "../../Utils/TokenService";
import "./AddTestPage.css";

class AddTestPage extends React.Component {
  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { client, quote, author } = e.target;
    const newTest = {
      client: client.value,
      quote: quote.value,
      author: author.value,
    };

    if (newTest) {
      fetch("https://fast-springs-85853.herokuapp.com/api/testimonials", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`,
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
        <section className="up-test-page">
          <h2>Add Test</h2>
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
            <button type="submit">Add</button>
            <button type="button" onClick={this.navHome}>
              Cancel
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default AddTestPage;
