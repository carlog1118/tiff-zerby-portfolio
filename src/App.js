import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';
import AboutPage from './AboutPage/AboutPage';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import ServicesPage from './ServicesPage/ServicesPage';
import ProjectPage from './ProjectPage/ProjectPage';
import BlogPage from './BlogPage/BlogPage';
import ContactPage from './ContactPage/ContactPage';
import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HomePage}/> 
        <Route path="/about" component={AboutPage}/>
        <Route path="/portfolio" component={PortfolioPage}/>
        <Route path="/services" component={ServicesPage}/>
        <Route path="/project" component={ProjectPage}/>
        <Route path="/blog" component={BlogPage}/>
        <Route path="/contact" component={ContactPage}/>
    </div>
  );
};

export default App;