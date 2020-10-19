import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

class ProjectCard extends React.Component {
  render() {
    const renderCard = () => {
      const isLoaded = this.props.isLoaded;
      if (isLoaded) {
        const name = this.props.project.name;
        const client = this.props.project.client;
        const description = this.props.project.description;
        {/*const image = this.props.project._embedded["wp:featuredmedia"][0]
      .media_details.sizes.medium.source_url;*/}
        const id = this.props.project.id;

        return (
          <>
            <Link to={`/project/${id}`}>
              <h3>{name}</h3>
            </Link>
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
