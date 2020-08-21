import React from 'react';
import './Project.css';

class Project extends React.Component{

  render(){
    const renderCard = () => {
        if(this.props.isLoaded){
          const name= this.props.project.acf.project_name
          const client= this.props.project.acf.client
          const description= this.props.project.acf.description
          const image= this.props.project._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
        
          return(
              <>
                <h3>{name}</h3>
                <h4>{client}</h4>
                <img className="proj-img"src={image} alt="project one"></img>
                <p>{description}</p>
              </>
          )
        
        } else {
            return <p>Loading...</p>
        }
    }

    return <div className="project-card">{renderCard()}</div>

  }
}

export default Project;
