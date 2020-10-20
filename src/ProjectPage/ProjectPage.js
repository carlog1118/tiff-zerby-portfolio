import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ProjectPage.css";

class ProjectPage extends React.Component {
  render() {
    const name = this.props.location.projectProps.name;
    const client = this.props.location.projectProps.client;
    const description = this.props.location.projectProps.description;

    return (
      <div className="project-page-cont">
        <Header />
        <section className="project-page">
          <h2>{name}</h2>
          <h3>{client}</h3>
          <p>{description}</p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ProjectPage;
