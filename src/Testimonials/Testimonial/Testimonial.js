import React from 'react';
import './Testimonial.css'

class Testimonial extends React.Component {
  
  render(){
    const renderCard = () => {
      if(this.props.isLoaded){
        const author= this.props.testimonial.acf.author;
        const quote= this.props.testimonial.acf.quote;
        const company= this.props.testimonial.acf.company;
        return(
          <div>
            <h3 className="company">{company}</h3>
            <q>{quote}</q>
            <p>-{author}</p>
          </div>
        ) 
      } else {
        return <p>Loading...</p>
      }
    }

    return (
      <div className="test-card-cont">{renderCard()}</div>
      )
  };
};
  
export default Testimonial;