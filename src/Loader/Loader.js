import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Loader.scss'
import logo from './../ram-logo-white.svg'


class Loader extends Component {

  componentDidMount() {
    var loader = document.getElementById('loader');
    loader.onclick = function () {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
    setTimeout(function () {
      loader.classList.add('gone');
    }, 2000);
  }

  render() {
    return (
      <>
        <a className="skip-main" href="#maincontent">Skip to Main content</a>
        <div id="loader">
          <div id="logo" name="logo" className="logo">
            <Link to="/">
              <img src={logo} alt="ram logo" />
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Loader;