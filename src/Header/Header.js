import React, { Component } from 'react';
import Framicons from '../Framicons/Framicons'
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header role="banner">
        <div className="sun"></div>
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
        <figure>
          <div className="island island1">
            <div className="mountain"></div>
            <div className="waterfall waterfall1"></div>
          </div>
          <div className="island island2">
            <div className="waterfall waterfall2"></div>
          </div>
        </figure>
        <h1><span>Sathya Ram</span></h1>
        <Framicons />
      </header>
    );
  }
}

export default Header;