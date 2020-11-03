import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../Utils/TokenService";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  renderCard = () => {
    const isLoaded = this.props.isLoaded;
    if (isLoaded) {
      const name = this.props.project.name;
      const id = this.props.project.id;
      return (
        <>
          <Link to={`/project/${id}`}>
            <h3>{name}</h3>
          </Link>
          {this.renderOwnerControls()}
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  renderOwnerControls = () => {
    const name = this.props.project.name;
    const id = this.props.project.id;
    if (TokenService.hasAuthToken()) {
      return (
        <>
          <Link to={`/updateproject/${id}`}>Update</Link>
          <button
            type="button"
            onClick={() => {
              this.handleDelete(id, name);
            }}
          >
            Delete
          </button>
        </>
      );
    }
  };

  handleDelete = (id, name) => {
    fetch(`http://localhost:8000/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        "authorization": `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        } else {
          alert(`${name} project deleted.`);
        }
      })
      .catch((e) => alert(e));
  };

  render() {
    return <div className="project-card">{this.renderCard()}</div>;
  }
}

export default ProjectCard;
