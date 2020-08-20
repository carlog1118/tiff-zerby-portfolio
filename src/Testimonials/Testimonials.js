import React from 'react';
//import Slideshow from './Slideshow/Slideshow'
import './Testimonials.css';
import Testimonial from './Testimonial/Testimonial';

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
    const renderTestimonial = () => {
      if(this.state.isLoaded){
        return (
          <div>
            <h2>Testimonials</h2>
            {this.state.testimonials.map(test => (
              <Testimonial 
                isLoaded={this.state.isLoaded} 
                testimonial={test}
                key={test.id}
              />
            ))}
          </div>            
        )
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <section className="testimonials">        
        {renderTestimonial()}
      </section>
    )
  };
};
  
export default Testimonials;