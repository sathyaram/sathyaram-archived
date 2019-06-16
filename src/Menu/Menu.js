import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'
import resume from './../SathyaRam_Resume2018.pdf';


class Menu extends Component {

  getOffOfMe = () => {
    var trigger = document.querySelector('.main-menu');
    trigger.classList.remove('open');
  }

  menuTrigger = () => {
    var trigger = document.querySelector('.main-menu');
    trigger.classList.toggle('open');
  }

  
  closeMenu = () => {
    var trigger = document.querySelector('.main-menu');
    document.addEventListener("click", function(e) {
      if (e.target.closest(".main-menu")) return;
        trigger.classList.remove("open");
    });
  }

  componentDidMount() {
    this.closeMenu();
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
              <div className="menu-title">Menu</div>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="menus">
            <ul className="menu">
              <li><Link onClick={this.getOffOfMe} to="/about">About</Link></li>
              <li><Link onClick={this.getOffOfMe} to="/blog">Blog</Link></li>
              <li><Link onClick={this.getOffOfMe} to="/contact">Contact</Link></li>
            </ul>
            <div className="mini-menu">
              <a target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>/// 
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sathya-ram/">LinkedIn</a>      
          </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;