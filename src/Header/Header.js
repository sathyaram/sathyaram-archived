import React, { Component } from 'react';
import Menu from '../Menu/Menu';
import './Header.scss'

class Header extends Component {
  render() {
    return (
      <header>
          <Menu />
          <h1>Sathya Ram</h1>
          <h2></h2>
      </header>
    );
  }
}

export default Header;