import React, { Component } from 'react';
import Framicons from '../Framicons/Framicons'
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header role="banner">
        <h1>Sathya Ram</h1>
        <Framicons />
      </header>
    );
  }
}

export default Header;