import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./ProjectPage.css";

class ProjectPage extends React.Component {
  state = {
    project: {},
    isLoaded: false,
  };

  renderProjectPage = () => {
    if (this.state.isLoaded) {
      const name = this.state.project.name;
      const client = this.state.project.client;
      const description = this.state.project.description;
      const imageUrl = this.state.project.image_url.replace("?dl=0", "?raw=1");
      return (
        <>
          <h2>{name}</h2>
          <img src={imageUrl}></img>
          <h3>{client}</h3>
          <p>{description}</p>
        </>
      );
    } else {
      return <p>Loading...</p>;
    }
  };

  componentDidMount() {
    const id = this.props.match.params.projectId;

    fetch(`https://fast-springs-85853.herokuapp.com/api/projects/${id}`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          project: res,
          isLoaded: true,
        })
      )
      .catch((err) => alert(err));
  }

  render() {
    return (
      <div className="project-page-cont">
        <Header />
        <section className="project-page">{this.renderProjectPage()}</section>
        <Footer />
      </div>
    );
  }
}

export default ProjectPage;
