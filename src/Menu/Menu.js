import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'


class Menu extends Component {
  render() {
    return (
      <nav> 
        <div class="social-media">
          <a target="_blank" href="https://instagram.com/sathya.ram">
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a target="_blank" href="https://dribbble.com/sathyaram">
            <i class="fab fa-dribbble" aria-hidden="true"></i>
          </a>
          <a target="_blank" href="https://flickr.com/sathyaramphotography">
            <i class="fab fa-flickr" aria-hidden="true"></i>
          </a>
          <a target="_blank" href="https://codepen.io/sathyaram">
            <i class="fab fa-codepen" aria-hidden="true"></i>
          </a>
          <a target="_blank" href="https://github.com/sathyaram">
            <i class="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
        
        <div className="main-menu">
          <a class="menu-trigger" href="#">
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;