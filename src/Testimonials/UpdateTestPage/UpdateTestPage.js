import React from "react";
import TokenService from "../../Utils/TokenService";
import "./UpdateTestPage.css";

class UpdateTestPage extends React.Component {
  state = {
    test: "",
    isLoaded: false,
  };

  renderPage = () => {
    const client = this.state.test.client;
    const author = this.state.test.author;
    const quote = this.state.test.quote;
    if (this.state.isLoaded) {
      return (
        <section className="up-test-page">
          <h2>Update Testimonial</h2>
          <form className="up-test-form" onSubmit={this.handleSubmit}>
            <label htmlFor="testClient">Client</label>
            <input
              type="text"
              name="testClient"
              id="testClient"
              defaultValue={client}
            ></input>
            <label htmlFor="testQuote">Quote</label>
            <textarea
              type="text"
              name="testQuote"
              id="testQuote"
              cols={50}
              rows={10}
              defaultValue={quote}
              required
            ></textarea>
            <label htmlFor="testAuthor">Author</label>
            <input
              type="text"
              name="testAuthor"
              id="testAuthor"
              defaultValue={author}
            ></input>
            <button type="submit">Update</button>
            <button type="button" onClick={this.navHome}>
              Cancel
            </button>
          </form>
        </section>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { testClient, testQuote, testAuthor } = e.target;

    const id = this.props.match.params.id;
    const updatedTest = {
      client: testClient.value,
      quote: testQuote.value,
      author: testAuthor.value,
    };
    if (updatedTest) {
      fetch(`http://localhost:8000/api/testimonials/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(updatedTest),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          } else {
            alert("Testmonial updated.");
          }
        })
        .then()
        .catch((err) => alert(err));
    } else {
      alert("Testimonial must contain some content.");
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`https://fast-springs-85853.herokuapp.com/api/testimonials/${id}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          test: res,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    return <div className="up-test-cont">{this.renderPage()}</div>;
  }
}

export default UpdateTestPage;
