import React from "react";
import Header from "../../Header/Header.js";
import Footer from "../../Footer/Footer.js";
import "./AddProjectPage.css";

class AddProjectPage extends React.Component {
  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { projName, projClient, projDescription } = e.target;
    const newProject = {
      name: projName.value,
      client: projClient.value,
      description: projDescription.value,
    };

    if (newProject) {
      fetch("http://localhost:8000/api/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProject),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(res.status);
          } else {
            alert("Project added.");
          }
        })
        .catch((e) => alert(e));
    }
  };

  render() {
    return (
      <div className="add-proj-cont">
        <Header />
        <section className="add-proj-page">
          <h2>Add Project</h2>
          <form className="add-proj-form" onSubmit={this.handleSubmit}>
            <label htmlFor="projName">Project Name</label>
            <input type="text" name="projName" id="projName" required></input>

            <label htmlFor="projClient">Client</label>
            <input
              type="text"
              name="projClient"
              id="projClient"
              required
            ></input>

            <label htmlFor="projDescription">Description</label>
            <textarea
              type="text"
              name="projDescription"
              id="projDescription"
              cols={50}
              rows={10}
              required
            ></textarea>
            <button type="submit">Add</button>
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

export default AddProjectPage;
