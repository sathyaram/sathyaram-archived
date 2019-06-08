import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'
import logo from './../ram-logo-white.svg'


class Menu extends Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="ram logo"/>
          </Link>
        </div>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Menu;