import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import TokenService from "../../Utils/TokenService";
import "./UpdateProjectPage.css";

class UpdateProjectPage extends React.Component {
  state = {
    projName: "",
    projClient: "",
    projDescription: "",
    image_url: "",
    isLoaded: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  renderUpdateProjPage = () => {
    if (this.state.isLoaded) {
      return (
        <section className="up-proj-page">
          <h2>Update Project</h2>
          <form className="update-form" onSubmit={this.handleSubmit}>
            <label htmlFor="projName">Project Name</label>
            <input
              type="text"
              name="projName"
              id="projName"
              value={this.state.projName}
              onChange={this.handleChange}
              required
            ></input>
            <label htmlFor="projClient">Client</label>
            <input
              type="text"
              name="projClient"
              id="projClient"
              value={this.state.projClient}
              onChange={this.handleChange}
              required
            ></input>

            <label htmlFor="projDescription">Description</label>
            <textarea
              type="text"
              name="projDescription"
              id="projDescription"
              cols={50}
              rows={10}
              value={this.state.projDescription}
              onChange={this.handleChange}
              required
            ></textarea>

            <label htmlFor="image_url">Image Url:</label>
            <input
              type="text"
              name="image_url"
              id="image_url"
              value={this.state.image_url}
              onChange={this.handleChange}
            ></input>
            <button type="submit">Update</button>
            <button type="button" onClick={this.navPortfolio}>
              Cancel
            </button>
          </form>
        </section>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { projName, projClient, projDescription, image_url } = e.target;
    const id = this.props.match.params.id;
    const updatedProject = {
      name: projName.value,
      client: projClient.value,
      description: projDescription.value,
      image_url: image_url.value,
    };
    if (updatedProject) {
      fetch(`http://localhost:8000/api/projects/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          'authorization': `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify(updatedProject),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          } else {
            alert("Project updated.");
          }
        })
        .catch((err) => alert(err));
    } else {
      alert("Project must contain some content.");
    }
  };

  navPortfolio = () => {
    this.props.history.push("/portfolio");
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    fetch(`http://localhost:8000/api/projects/${id}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          projName: res.name,
          projClient: res.client,
          projDescription: res.description,
          image_url: res.image_url,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="up-proj-cont">
        <Header />
        {this.renderUpdateProjPage()}
        <Footer />
      </div>
    );
  }
}

export default UpdateProjectPage;
