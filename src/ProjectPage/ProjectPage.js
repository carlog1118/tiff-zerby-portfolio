import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ProjectPage.css";

class ProjectPage extends React.Component {
  render() {
    return (
      <div className="project-page-cont">
        <Header />
        <section className="project-page">
          <h2>Project Title</h2>
          <h3>Client</h3>
          <p>Project image</p>
          <p>Project description</p>
        </section>
        <Footer />
      </div>
    );
  }
}

export default ProjectPage;
