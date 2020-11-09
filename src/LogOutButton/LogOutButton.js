import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from "../Utils/TokenService";
import "./LogOutButton.css";

class LogOutButton extends React.Component{
  handleLogOut = () => {
    TokenService.clearAuthToken();
    alert('logged out')
  };

  render(){
    return(
      <div className="log-out-cont">
        <Link to="/login" onClick={this.handleLogOut} className="log-out-butt">
            Log Out
        </Link>
      </div>
    )
  }
}

export default LogOutButton;