import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./LoginForm.css";

class LoginForm extends React.Component {
  navHome = () => {
    this.props.history.push("/");
  };
  
  render(){
      return (
        <div className="login-cont">
          <Header />
          <section className="login-page">
            <h2>Add Test</h2>
            <form className="login-form" onSubmit={this.handleSubmit}>
              <label htmlFor="user-name">Username</label>
              <input type="text" name="user-name" id="user-name" required></input>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" id="password" required></input>
              <button type="submit">Log In</button>
              <button type="button" onClick={this.navHome}>
                Cancel
              </button>
            </form>
          </section>
          <Footer />
        </div>
      );
    
  }
}

export default LoginForm;