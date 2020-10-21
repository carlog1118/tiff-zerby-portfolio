import React from "react";
import Header from "../Header/Header";
import ProjectCard from "./ProjectCard/ProjectCard";
import Footer from "../Footer/Footer";
import "./PortfolioPage.css";

class PortfolioPage extends React.Component {
    state = {
      projects: "",
      isLoaded: false,
    };
  

  componentDidMount() {
    fetch("http://localhost:8000/projects")
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
