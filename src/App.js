import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Testimonials from './Testimonials/Testimonials';
import AboutMe from './AboutMe/AboutMe';

function App() {
  return (
    <div className='App'>
      <Header/>
      <main>
        <Hero/>
        <Testimonials/>
        <AboutMe/>
      </main>
    </div>
  );
}

export default App;