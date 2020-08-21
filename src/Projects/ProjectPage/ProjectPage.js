import React from 'react';

class ProjectPage extends React.Component{
  render(){
    const renderPage = () => {
      const isLoaded= this.props.isLoaded;
      const client= this.props.client;
      const name= this.props.name;
      const image= this.props.image;
      const description= this.props.description;

      if(isLoaded) {
        return (
          <>
            <h2>{name}</h2>
            <h3>{client}</h3>
            <img src={image} alt={name}></img>
            <p>{description}</p>    
          </>
        ) 
      }
    }


    return <section className="project-page">{renderPage()}</section>    
  }
}

export default ProjectPage;