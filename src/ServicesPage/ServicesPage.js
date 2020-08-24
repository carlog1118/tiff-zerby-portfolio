import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServicesPage.css';

class ServicesPage extends React.Component {
  render(){
    return (
      <> 
        <Header/> 
        <h3 className="services">Services</h3>
        <p>Service 1</p>
        <p>Service 2</p>
        <Footer/>
      </>  
    )
  }
}

export default ServicesPage;