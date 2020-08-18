import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  render(){
    return (
      <footer>
        <form>
            <label for="email"></label>
            <input type="text" id="email" placeholder="E-mail"></input>
            <input type="submit" value="Subscribe"></input>
        </form>
        <div className="social-media">
          <div className="icon">LI</div>
          <div className="icon">Email</div>
          <div className="icon">Insta</div>
        </div>
      </footer>
    );
  };
};
  
export default Footer;