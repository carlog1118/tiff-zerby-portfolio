import React from "react";
import TokenService from "../../Utils/TokenService";
import "./AddProjectPage.css";

class AddProjectPage extends React.Component {
  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { projName, projClient, projDescription, image_url } = e.target;
    const newProject = {
      name: projName.value,
      client: projClient.value,
      description: projDescription.value,
      image_url: image_url.value,
    };

    if (newProject) {
      fetch("https://fast-springs-85853.herokuapp.com/api/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${TokenService.getAuthToken()}`,
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
            <label htmlFor="image_url">Image Url:</label>
            <input type="text" name="image_url" id="image_url"></input>
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

export default AddProjectPage;
