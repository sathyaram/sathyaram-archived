import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer>
        Handcrafted with <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org">React </a>and <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a>
        <br></br><div>Hosted with <a target="_blank" rel="noopener noreferrer" href="https://netlify.com">Netlify</a></div>
      </footer>
    );
  }
}

export default Footer;