import React from 'react';
import Slideshow from './Slideshow/Slideshow'
import './Testimonials.css';

class Testimonials extends React.Component {
  render(){
    return (
      <section className="testimonials">
        <Slideshow/>
      </section>
    )
  };
};
  
export default Testimonials;