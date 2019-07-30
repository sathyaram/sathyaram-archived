import React, { Component } from 'react';
import Framicons from '../Framicons/Framicons'
import './Header.scss'

class Header extends Component {

  mouseMe = () => {
    let origin = document.querySelector("figure");

    origin.addEventListener("mousemove", e => {
      let { clientX: x, clientY: y } = e;
      origin.style.perspectiveOrigin = `${x}px ${y}px`;
    });
    
  }

  componentDidMount() {
    this.mouseMe();
  }

  render() {
    return (
      <header role="banner">
        <figure>
          <div className="sun"></div>
          <div className="cloud cloud1"></div>
          <div className="cloud cloud2"></div>
          <div className="cloud cloud3"></div>
          <div className="bridge"></div>
          <div className="islands">
            <div className="island island1">
              <div className="mountain"></div>
              <div className="waterfall waterfall1"></div>
            </div>
            <div className="island island2">
              <div className="waterfall waterfall2"></div>
            </div>
          </div>
        </figure>
        <div className="branding">
          <h1>
            <span>Sathya Ram</span>
          </h1>
          {/* <h2>
            <span>Web Designer + Developer</span>
            <span>CSS Junkie</span>
            <span>PC Gamer</span>
            <span>Film Buff</span>
            <span>Potterhead</span>
          </h2> */}
         
        </div>
        
        {/* <div className="pronounce">
            <i className="far fa-comment"></i>
            <div className="explanation">
              <span>How to pronounce my name:</span><br></br>
              Sa-thee-uhh Ram
            </div>
          </div> */}
        <Framicons />
      </header>
    );
  }
}

export default Header;