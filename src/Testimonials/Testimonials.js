import React from 'react';
//import Slideshow from './Slideshow/Slideshow'
import './Testimonials.css';

class Testimonials extends React.Component {
  state = {
    testimonials: '',
    isLoaded: false
  }
  
  componentDidMount(){
    fetch('http://localhost/tiff-test/wp-json/wp/v2/testimonials')
      .then(res => res.json())
      .then(res => this.setState({
        testimonials: res,
        isLoaded: true
      }))
      .catch(err => alert(err))
  }

  render(){
    return (
      <section className="testimonials">
        
      </section>
    )
  };
};
  
export default Testimonials;