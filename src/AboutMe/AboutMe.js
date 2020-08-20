import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
  state = {
    aboutResults: '',
    isLoaded: false
  }
  
  componentDidMount(){
    fetch('http://localhost/tiff-test/wp-json/wp/v2/about?_embed')
      .then(res => res.json())
      .then(res => this.setState({
        aboutResults: res[0],
        isLoaded: true
      }))
      .catch(err => alert(err))
  }

  render(){
    const renderAbout = () =>{    
      if(this.state.isLoaded){
        const aboutText= this.state.aboutResults.content.rendered
        return (
          <p dangerouslySetInnerHTML={{__html: aboutText}}></p>
        )
      } else {
        return <p>loading...</p>
      }
    }

    const renderImage = () => {
      if(this.state.isLoaded){
        const aboutImg = this.state.aboutResults._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
        console.log(aboutImg)
        return (
          <img src={aboutImg} alt="Tiffany Zerby's headshot"></img>
        )
      }
    }

    

    return (
      <section className="about-me">
          <h2>About me</h2>
          <div className="about-cont">
              {renderImage()}
              {renderAbout()}
          </div>
          <a>Let's Talk</a>
      </section>
    )
  };
};
  
export default AboutMe;