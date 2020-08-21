import React from 'react';
import Project from './Project/Project';
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
          <div className="proj-card-container">
            <h2>Projects</h2>
            {this.state.projects.map(project => (
              <Project 
                isLoaded={this.state.isLoaded} 
                project={project}
                key={project.id}
              />
            ))}
          </div>            
        )
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <section className="projects">        
        {renderProject()}
      </section>
    )
  };
};
  
export default Projects;