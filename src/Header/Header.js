import React from 'react';
import Logo from './logo400-black.png';
import './Header.css';

class Header extends React.Component {
  render(){
    return (
      <header>
        <img src={Logo} className="nav-logo" alt="Tiffany Zerby's logo"/>
        <nav>
          <ul>  
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li className="lets-talk">Lets Talk</li>  
          </ul>
        </nav>
        <div className="social-media">
          <div className="icon">LI</div>
          <div className="icon">Email</div>
          <div className="icon">Insta</div>
        </div>
      </header>
    )
  };
};

export default Header;