import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  handleDelete = (id, name) => {
    fetch(`http://localhost:8000/api/projects/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
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
    const renderCard = () => {
      const isLoaded = this.props.isLoaded;
      if (isLoaded) {
        const name = this.props.project.name;
        const client = this.props.project.client;
        const description = this.props.project.description;
        {
          /*const image = this.props.project._embedded["wp:featuredmedia"][0]
      .media_details.sizes.medium.source_url;*/
        }
        const id = this.props.project.id;

        return (
          <>
            <Link
              to={{
                pathname: `/project/${id}`,
                projectProps: {
                  name: `${name}`,
                  client: `${client}`,
                  description: `${description}`,
                },
              }}
            >
              <h3>{name}</h3>
            </Link>
            <button
              type="button"
              onClick={() => {
                this.handleDelete(id, name);
              }}
            >
              Delete
            </button>
            {/*<img className="proj-img" src={image} alt="project screen shot"></img>*/}
          </>
        );
      } else {
        return <p>Loading...</p>;
      }
    };

    return <div className="project-card">{renderCard()}</div>;
  }
}

export default ProjectCard;
