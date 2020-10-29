import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../Utils/TokenService";
import Logo from "./logo400-black.png";
import "./Header.css";

class Header extends React.Component {
  handleLogOut = () => {
    console.log("handle logout ran");
    TokenService.clearAuthToken();
  };

  render() {
    const renderLogOut = () => {
      if (TokenService.hasAuthToken()) {
        return (
          <li>
            <Link to="/login" onClick={() => this.handleLogOut()}>
              Log Out
            </Link>
          </li>
        );
      }
    };

    return (
      <header>
        <Link className="img-link" to="/">
          <img src={Logo} className="nav-logo" alt="Tiffany Zerby's logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link className="text-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-link" to="/contact">
                Let's Talk
              </Link>
            </li>
            {renderLogOut()}
          </ul>
        </nav>
        <div className="placeholder"></div>
      </header>
    );
  }
}

export default Header;
