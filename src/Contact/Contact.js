import React, { Component } from 'react';
import './Contact.scss'

class Contact extends Component {
  render() {
    return (
      <main className="contact">
         <header role="banner">
           <div className="branding">
              Let's talk about the realness.
              <a href="mailto:sathyatheram@gmail.com">sathyatheram@gmail.com</a>
              </div>
         </header>
      </main>
    );
  }
}

export default Contact;