import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage.js";
import AboutPage from "./AboutPage/AboutPage";
import PortfolioPage from "./PortfolioPage/PortfolioPage";
import ServicesPage from "./ServicesPage/ServicesPage";
import ProjectPage from "./ProjectPage/ProjectPage";
import BlogPage from "./BlogPage/BlogPage";
import ContactPage from "./ContactPage/ContactPage";
import UpdateHeroPage from './Hero/UpdateHeroPage/UpdateHeroPage';
import UpdateAboutPage from './AboutPage/UpdateAboutPage/UpdateAboutPage';
import UpdateTestPage from './Testimonials/UpdateTestPage/UpdateTestPage';
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import AddTestPage from "./Testimonials/AddTestPage/AddTestPage";
import AddProjectPage from "./PortfolioPage/AddProjectPage/AddProjectPage";
import "./App.css";

function App() {
  

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
        <Route path="/updatehero" component={UpdateHeroPage} />
        <Route path="/updateabout" component={UpdateAboutPage} />
        <Route path="/updatetest/:id" component={UpdateTestPage} />
        <Route path="/addtest" component={AddTestPage}></Route>
        <Route path="/addproject" component={AddProjectPage}></Route>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
