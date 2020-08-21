import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import './App.css'

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HomePage}/> 
        <Route path="/about" component={AboutMe}/>
        <Route path="/portfolio" component={Projects}/>
    </div>
  );
};

export default App;