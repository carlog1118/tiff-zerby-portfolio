import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./UpdateProjectPage.css";

class UpdateProjectPage extends React.Component {
  state = {
    project: "",
    isLoaded: false,
  };

  /*handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };*/

  handleSubmit = (e) => {
    e.preventDefault();
    const { projName, projClient, projDescription } = e.target;
    const id = this.props.match.params.id;
    const updatedProject = {
      name: projName.value,
      client: projClient.value,
      description: projDescription.value,
    };
    if (updatedProject) {
      fetch(`http://localhost:8000/api/projects/${id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
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
          project: res,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    const renderPage = () => {
      const projName= this.state.project.name;
      const projClient= this.state.project.client;
      const projDescription= this.state.project.description;

      if (this.state.isLoaded) {
        return (
          <section className="up-proj-page">
            <h2>Update Project</h2>
            <form className="update-form" onSubmit={this.handleSubmit}>
              <label htmlFor="projName">Project Name</label>
              <input type="text" name="projName" id="projName" defaultValue={projName}required></input>
              <label htmlFor="projClient">Client</label>
              <input
                type="text"
                name="projClient"
                id="projClient"
                defaultValue={projClient}
                required
              ></input>

              <label htmlFor="projDescription">Description</label>
              <textarea
                type="text"
                name="projDescription"
                id="projDescription"
                cols={50}
                rows={10}
                defaultValue={projDescription}
                required
              ></textarea>
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
    return (
      <div className="up-proj-cont">
        <Header />
        {renderPage()}
        <Footer />
      </div>
    );
  }
}

export default UpdateProjectPage;
