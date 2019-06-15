import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'


class Menu extends Component {

  getOffOfMe = () => {
    var trigger = document.querySelector('.main-menu');
    trigger.classList.remove('open');
  }

  menuTrigger = () => {
    var trigger = document.querySelector('.main-menu');
    trigger.classList.toggle('open');
  }

  render() {
    return (
      <nav>
        <div className="social-media">
          <a aria-label="instagram" target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a aria-label="dribbble" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sathyaram">
            <i className="fab fa-dribbble" aria-hidden="true"></i>
          </a>
          <a aria-label="flickr" target="_blank" rel="noopener noreferrer" href="https://flickr.com/sathyaramphotography">
            <i className="fab fa-flickr" aria-hidden="true"></i>
          </a>
          <a aria-label="codepen" target="_blank" rel="noopener noreferrer" href="https://codepen.io/sathyaram">
            <i className="fab fa-codepen" aria-hidden="true"></i>
          </a>
          <a aria-label="github" target="_blank" rel="noopener noreferrer" href="https://github.com/sathyaram">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>

        <div className="main-menu">
          <button className="menu-trigger" aria-label="menu trigger" name="menu-trigger" onClick={this.menuTrigger}>
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <ul className="menu">
            <li><Link onClick={this.getOffOfMe} to="/about">About</Link></li>
            <li><Link onClick={this.getOffOfMe} to="/blog">Blog</Link></li>
            <li><Link onClick={this.getOffOfMe} to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;