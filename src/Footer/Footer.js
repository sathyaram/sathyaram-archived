import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Footer.scss'

class Footer extends Component {

  loading = () => {
    var loader = document.getElementById('loader');
    loader.classList.add('zoom');

    setTimeout(function () {
      loader.classList.remove('zoom');
    }, 1500);
  }

  render() {
    return (
      <footer>
        <div className="filters">
          <Link onClick={this.loading} to="/web" className="web">
            <div className="vector">
              <div className="monitor shape">
                <div className="letters">W</div>
                <div className="screen">
                  <div className="code">
                    <div className="bar long"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                  </div>
                </div>
                <div className="base">
                  <div className="foot bottom"></div>
                </div>
              </div>
            </div>
          </Link>
          <Link onClick={this.loading} to="/graphic" className="graphic">
            <div className="vector">
              <div className="box shape">
                <div className="letters">G</div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
              </div>
            </div>
          </Link>
          <Link onClick={this.loading} className="photography" to="/photography">
            <div className="vector">
              <div className="photo shape">
                <div className="image">
                  <div className="letters">P</div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        {/* Handcrafted with <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org">React </a>and <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a>
        <br></br><div>Hosted with <a target="_blank" rel="noopener noreferrer" href="https://netlify.com">Netlify</a></div>
      */}
      </footer>
    );
  }
}

export default Footer;