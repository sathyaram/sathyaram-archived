import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Loader.scss'
import logo from './../ram-logo-white.svg'


class Loader extends Component {
  
  componentDidMount() {
    var loader = document.getElementById('loader');
    setTimeout(function() {
      loader.classList.add('gone');
    }, 1000);
  }
  render() {
    return (
      <div id="loader">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="ram logo"/>
          </Link>
        </div>
      </div>
    );
  }
}

export default Loader;