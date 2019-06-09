import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'


class Menu extends Component {

  menuTrigger = () => {
    var trigger = document.querySelector('.main-menu');
    trigger.classList.toggle('open');
  }

  render() {
    return (
      <nav> 
        <div className="social-media">
          <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sathyaram">
            <i className="fab fa-dribbble" aria-hidden="true"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://flickr.com/sathyaramphotography">
            <i className="fab fa-flickr" aria-hidden="true"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/sathyaram">
            <i className="fab fa-codepen" aria-hidden="true"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/sathyaram">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
        </div>
        
        <div className="main-menu">
          <a className="menu-trigger" onClick={this.menuTrigger}>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {/* <li><Link to="/web">Web Design/Development</Link></li>
            <li><Link to="/graphic">Graphic Design</Link></li>
            <li><Link to="/photography">Photography</Link></li>       */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;