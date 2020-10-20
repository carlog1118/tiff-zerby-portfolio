import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';
import AboutPage from './AboutPage/AboutPage';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import ServicesPage from './ServicesPage/ServicesPage';
import ProjectPage from './ProjectPage/ProjectPage';
import BlogPage from './BlogPage/BlogPage';
import ContactPage from './ContactPage/ContactPage';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route path="/about" component={AboutPage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/services" component={ServicesPage}/>
        <Route path="/project/:projectId" component={ProjectPage}/>
        <Route path="/blog" component={BlogPage}/>
        <Route path="/contact" component={ContactPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  );
};

export default App;