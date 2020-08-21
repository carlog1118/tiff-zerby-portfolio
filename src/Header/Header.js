import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo400-black.png';
import './Header.css';

class Header extends React.Component {
  render(){
    return (
      <header>
        <Link className="img-link" to="/"><img src={Logo} className="nav-logo" alt="Tiffany Zerby's logo"/></Link>
        <nav>
          <ul>  
            <li><Link className="text-link" to="/about">About</Link></li>
            <li><Link className="text-link" to="/">Services</Link></li>
            <li><Link className="text-link" to="/portfolio">Portfolio</Link></li>
            <li className="lets-talk">Lets Talk</li>  
          </ul>
        </nav>
        <div className="placeholder"></div>
      </header>
    );
  };
};

export default Header;