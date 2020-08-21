import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Testimonials from '../Testimonials/Testimonials';
import Footer from "../Footer/Footer";
import './HomePage.css';

class HomePage extends React.Component {
  render(){
    return (
      <div className="home-page">
        <Header/>
        <main>
          <Hero className="hero"/>
          <Testimonials className="testimonials"/>
        </main>
        <Footer/>
      </div>
    )
  }
}
export default HomePage;