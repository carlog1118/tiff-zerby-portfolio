import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AuthApiService from "../Utils/AuthApiService";
import TokenService from "../Utils/TokenService";
import "./LoginForm.css";

class LoginForm extends React.Component {
  navHome = () => {
    this.props.history.push("/");
  };

  handleSubmitJwtAuth = (e) => {
    console.log("handle submit ran");
    e.preventDefault();
    this.setState({ error: null });
    const { user_name, password } = e.target;

    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.props.history.push("/");
      })
      .catch((res) => {
        alert(res.error);
      });
  };

  render() {
    return (
      <div className="login-cont">
        <Header />
        <section className="login-page">
          <h2>Log In</h2>
          <h3>
            Use username and password below for now just to test features. It's
            case sensitive.
          </h3>
          <p>username: Demouser</p>
          <p>password: Demopass123</p>
          <form className="login-form" onSubmit={this.handleSubmitJwtAuth}>
            <label htmlFor="user_name">Username</label>
            <input type="text" name="user_name" id="user-name" required></input>
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
