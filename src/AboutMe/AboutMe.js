import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
  render(){
    return (
      <section className="about-me">
          <h2>About Me</h2>
          <div className="about-cont">
              <div className="head">Img</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <a>Let's Talk</a>
      </section>
    )
  };
};
  
export default AboutMe;