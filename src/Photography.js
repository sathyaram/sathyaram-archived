import React, { Component } from 'react';

class Photography extends Component {
  render() {
    return (
      <div className="page">
        <div className="text">
        <h2>Photography</h2>
        <p>A collection of all my photos.</p>
        </div>
        <div className="content">
        <img loading="lazy" alt="Peter" src="/images/photography/RAM_4378.jpg"></img>
        <img loading="lazy" alt="Luis" src="/images/photography/RAM_0645.jpg"></img>
        <img loading="lazy" alt="Katrina" src="/images/photography/RAM_0701.jpg"></img>
        <img loading="lazy" alt="Kellyn" src="/images/photography/RAM_2435.jpg"></img>
        <img loading="lazy" alt="Farrah" src="/images/photography/RAM_1145.jpg"></img>
        <img loading="lazy" alt="Purple" src="/images/photography/RAM_9879.jpg"></img>
        <img loading="lazy" alt="Ash" src="/images/photography/RAM_6210.jpg"></img>
        <img loading="lazy" alt="Ting" src="/images/photography/RAM_9912.jpg"></img>
        <img loading="lazy" alt="Helena" src="/images/photography/RAM_0085.jpg"></img>
        <img loading="lazy" alt="Danielle" src="/images/photography/RAM_0589.jpg"></img>
        <img loading="lazy" alt="Rachel" src="/images/photography/RAM_0010.jpg"></img>
        <img loading="lazy" alt="Hayden" src="/images/photography/RAM_9231.jpg"></img>
        </div>
      </div>
    );
  }
}

export default Photography;