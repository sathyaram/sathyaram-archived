import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header role="banner">         
          <h1>Sathya Ram</h1>
          <h2>
            <div>
              <span>Front-End</span> 
              Developer 
            </div>
            <div>
              <span>Graphic &amp; Web</span>
              Designer 
            </div>
            <div>
              <span>Everything</span>
              Photographer
            </div>
          </h2>
      </header>
    );
  }
}

export default Header;