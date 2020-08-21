import React from 'react';
import Header from '../Header/Header';
import Project from './ProjectCard/ProjectCard';
import Footer from '../Footer/Footer';
import './Projects.css';


class Projects extends React.Component {
  state = {
    projects: '',
    isLoaded: false
  }
  
  componentDidMount(){
    fetch('http://localhost/tiff-test/wp-json/wp/v2/projects?_embed')
      .then(res => res.json())
      .then(res => this.setState({
        projects: res,
        isLoaded: true
      }))
      .catch(err => alert(err))
  }

  render(){
    
    const renderProject = () => {
      if(this.state.isLoaded){
        return (
          <>
            <h2>Projects</h2>
            <div className="proj-card-container">            
              {this.state.projects.map(project => (
                <Project 
                  isLoaded={this.state.isLoaded} 
                  project={project}
                  key={project.id}
                />
              ))}
            </div>
          </>            
        )
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <div className= "projects-page">
        <Header/>
        <section className="projects">        
          {renderProject()}
        </section>
        <Footer/>
      </div>
    )
  };
};
  
export default Projects;