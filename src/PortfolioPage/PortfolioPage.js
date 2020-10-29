import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import TokenService from "../Utils/TokenService";
import ProjectCard from "./ProjectCard/ProjectCard";
import Footer from "../Footer/Footer";
import "./PortfolioPage.css";

class PortfolioPage extends React.Component {
    state = {
      projects: "",
      isLoaded: false,
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
    fetch("http://localhost:8000/api/projects")
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
    const renderPortfolio = () => {
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

    return (
      <div className="projects-page">
        <Header />
        <section className="projects">
          <h2>Projects</h2>
          {renderPortfolio()}
  
        </section>
        
        <Footer />
      </div>
    );
  }
}

export default PortfolioPage;
