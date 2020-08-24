import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ContactPage.css';

class ContactPage extends React.Component{
  render(){
    return(
      <div className="contact-page-cont">
        <Header/>
        <h2>Let's Talk</h2>
        <section className="contact-page">
          
        </section>
        <Footer/>
      </div>  
    )
  }
}

export default ContactPage;