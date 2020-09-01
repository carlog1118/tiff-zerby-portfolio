import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  render() {
    const renderCard = () => {
      const isLoaded = this.props.isLoaded;
      if (isLoaded) {
        const name = this.props.project.acf.project_name;
        const client = this.props.project.acf.client;
        const description = this.props.project.acf.description;
        const image = this.props.project._embedded["wp:featuredmedia"][0]
          .media_details.sizes.medium.source_url;
        const id = this.props.project.id;

        return (
          <>
            <Link to="/project">
              <h3>{name}</h3>
            </Link>
            <img className="proj-img" src={image} alt="project one"></img>
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
