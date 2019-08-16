import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Loader.scss'
import logo from './../ram-logo-white.svg'


class Loader extends Component {
  
  componentDidMount() {
    var loader = document.getElementById('loader');
    window.addEventListener("load", function() {
      loader.classList.add('gone');
    });
  }
  render() {
    return (
      <div id="loader">
        <div id="logo" name="logo" className="logo">
          <Link to="/">
            <img src={logo} alt="ram logo"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default Loader;