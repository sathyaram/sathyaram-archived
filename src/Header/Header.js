import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {

  render() {
    return (
      <header role="banner">
        <div className="planet"></div>
        <div className="branding">
          <div className="hoverwrap">
            <div className="pronounce">
              <i className="fas fa-comment"></i>
              <div className="explanation">
                / Saa-thee-uh · Ram /
              </div>
            </div>
            <h1><span>Sathya Ram</span></h1>
            <h2>
              <div className="skills">
                <span>Front-End</span>
                Developer
              </div>
              <div className="skills">
                <span>Graphic &amp; Web</span>
                Designer
              </div>
              <div className="skills">
                <span>Professional</span>
                Photographer
                </div>
            </h2>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;