import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Testimonials from './Testimonials/Testimonials';

function App() {
  return (
    <div className='App'>
      <Header/>
      <main>
        <Hero/>
        <Testimonials/>
      </main>
    </div>
  );
}

export default App;