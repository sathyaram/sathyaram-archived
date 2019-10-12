import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss'
import resume from './../SathyaRam_Resume2020.pdf';


class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    // Menu newly opened.
    if (this.state.isOpened && !prevState.isOpened) {
      this.addEvents();
    } else if (!this.state.isOpened && prevState.isOpened) {
      // Menu closed, we no longer need events.
      this.removeEvents();
    }
  }

  getOffOfMe = () => {
    this.setState({ isOpened: false });
  }

  menuTrigger = () => {
    this.setState(state => ({
      isOpened: !state.isOpened,
    }));
  }

  handleClick = e => {
    if (e.target.closest(".main-menu")) return;
    this.setState({ isOpened: false });
  }

  addEvents() {
    document.addEventListener("click", this.handleClick);
  }

  removeEvents() {
    document.removeEventListener("click", this.handleClick);
  }

  render() {
    const { isOpened } = this.state;
    const menuClasses = [
      'main-menu'
    ];
    if (isOpened) {
      menuClasses.push('open');
    };

    return (
      <nav role="navigation" name="navigation">
        <div className={menuClasses.join(' ')}>
          <div className="burger">
            <button className="menu-trigger" aria-label="menu trigger" name="menu-trigger" onClick={this.menuTrigger}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <div className="menu-title">Menu</div>
          </div>
          <div className="menus">
            <ul className="menu">
              <li><Link onClick={this.getOffOfMe} to="/about">About</Link></li>
            </ul>
            <div className="mcmenu">
              <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">Photography</a>
              <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sathyaram">Graphic Design</a>
            </div>
            <div className="mini-menu">
              <a target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=vpbblMR_jUo">✧</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sathya-ram/">LinkedIn</a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=cq3fwlZdWhw">✧</a>
              <a target="_blank" rel="noopener noreferrer" href="mailto:sathyatheram@gmail.com">Email</a>
            </div>
          </div>
        </div>
        <div className="social-media">
          <a aria-label="dribbble" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sathyaram">
            <i className="fab fa-dribbble" aria-hidden="true"></i>
          </a>
          <a aria-label="github" target="_blank" rel="noopener noreferrer" href="https://github.com/sathyaram">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a aria-label="instagram" target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a aria-label="flickr" target="_blank" rel="noopener noreferrer" href="https://flickr.com/sathyaramphotography">
            <i className="fab fa-flickr" aria-hidden="true"></i>
          </a>
          <a aria-label="codepen" target="_blank" rel="noopener noreferrer" href="https://codepen.io/sathyaram">
            <i className="fab fa-codepen" aria-hidden="true"></i>
          </a>
        </div>
      </nav>
    );
  }
}

export default Menu;