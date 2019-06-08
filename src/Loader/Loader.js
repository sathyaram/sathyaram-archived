import React, { Component } from 'react';
import './Loader.scss'

class Loader extends Component {
  
  componentDidMount() {
    var loader = document.getElementById('loader');
    setTimeout(function() {
      loader.classList.add('gone');
    }, 2000);
  }
  render() {
    return (
      <div id="loader">
      </div>
    );
  }
}

export default Loader;