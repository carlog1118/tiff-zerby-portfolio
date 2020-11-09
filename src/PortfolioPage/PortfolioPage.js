import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../Utils/TokenService";
import ProjectCard from "./ProjectCard/ProjectCard";
import "./PortfolioPage.css";

class PortfolioPage extends React.Component {
  state = {
    projects: "",
    isLoaded: false,
  };

  renderPortfolio = () => {
    if (this.state.isLoaded) {
      return (
        <>
          <div className="proj-card-container">
            {this.state.projects.map((project) => (
              <ProjectCard
                isLoaded={this.state.isLoaded}
                project={project}
                key={project.id}
              />
            ))}
            {this.renderOwnerControls()}
          </div>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  renderOwnerControls = () => {
    if (TokenService.hasAuthToken()) {
      return (
        <>
          <Link to="/addproject">Add Project</Link>
        </>
      );
    }
  };

  componentDidMount() {
    fetch("https://fast-springs-85853.herokuapp.com/api/projects")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          projects: res,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="port-page">
        <section className="port-section">
          <h2>Projects</h2>
          {this.renderPortfolio()}
        </section>
      </div>
    );
  }
}

export default PortfolioPage;
