import React from 'react';
import './Slideshow.css';

class Slideshow extends React.Component {    
  render(){
    return (
      <>
        <h2>Testimonials</h2>
        <div className="slideshow-container"> 
          <div className="mySlides">
            <q>Bawitdaba</q>
            <p className="author">- Kid Rock</p>
          </div>
          <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
          <a className="next" onClick="plusSlides(1)">&#10095;</a>
        </div>

        <div className="dot-container">
          <span className="dot" onClick="currentSlide(1)"></span>
          <span className="dot" onClick="currentSlide(2)"></span>
          <span className="dot" onClick="currentSlide(3)"></span>
        </div>
      </>
    )
  };
};
  
export default Slideshow;