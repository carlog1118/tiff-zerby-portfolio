import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./Utils/PrivateRoute";
import HomePage from "./HomePage/HomePage.js";
import AboutPage from "./AboutPage/AboutPage";
import PortfolioPage from "./PortfolioPage/PortfolioPage";
import ServicesPage from "./ServicesPage/ServicesPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import BlogPage from "./BlogPage/BlogPage";
import ContactPage from "./ContactPage/ContactPage";
import UpdateHeroPage from "./Hero/UpdateHeroPage/UpdateHeroPage";
import UpdateAboutPage from "./AboutPage/UpdateAboutPage/UpdateAboutPage";
import UpdateTestPage from "./Testimonials/UpdateTestPage/UpdateTestPage";
import UpdateServicePage from "./ServicesPage/UpdateServicePage/UpdateServicePage";
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import AddTestPage from "./Testimonials/AddTestPage/AddTestPage";
import AddProjectPage from "./PortfolioPage/AddProjectPage/AddProjectPage";
import AddServicePage from './ServicesPage/AddServicePage/AddServicePage';
import UpdateProjectPage from "./PortfolioPage/UpdateProjectPage/UpdateProjectPage";
import LoginForm from "./LoginForm/LoginForm";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/project/:projectId" component={ProjectPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/contact" component={ContactPage} />
          <PrivateRoute path="/updatehero" component={UpdateHeroPage} />
          <PrivateRoute path="/updateabout" component={UpdateAboutPage} />
          <PrivateRoute path="/updatetest/:id" component={UpdateTestPage} />
          <PrivateRoute path="/updateproject/:id" component={UpdateProjectPage} />
          <PrivateRoute path="/updateservice/:id" component={UpdateServicePage} />
          <PrivateRoute path="/addtest" component={AddTestPage} />
          <PrivateRoute path="/addproject" component={AddProjectPage} />
          <PrivateRoute path="/addservice" component={AddServicePage} />
          <Route path="/login" component={LoginForm}></Route>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
