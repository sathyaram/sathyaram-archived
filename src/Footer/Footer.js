import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer role="footer">
        Handcrafted with <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React.js </a>and <a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a>.
      </footer>
    );
  }
}

export default Footer;