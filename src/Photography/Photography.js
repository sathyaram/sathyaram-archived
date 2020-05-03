import React, { useEffect } from 'react';
import './Photography.scss';
import { gsap, Power3 } from 'gsap';


function Photography() {
  useEffect(() => {
    const loaderTl = gsap.timeline();
    loaderTl.from(".photograph",
      {
        duration: 1,
        y: "0",
        opacity: 0,
        ease: Power3.easeOut,
        stagger: 0.25,
        scale: 1.5
      });
  });

  return (
    <div className="page photography appears">
      <div className="text">
        <h2><div>Photography</div></h2>
        <h6><div>A few of my portraits. See more on my <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">Instagram</a>.</div></h6>
      </div>
      <div className="content">
        <div className="photograph">
          <img alt="Peter" src="/images/photography/RAM_4378.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Luis" src="/images/photography/RAM_0645.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Katrina" src="/images/photography/RAM_0701.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Kellyn" src="/images/photography/RAM_2435.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Farrah" src="/images/photography/RAM_1145.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Purple" src="/images/photography/RAM_9879.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Ash" src="/images/photography/RAM_6210.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Ting" src="/images/photography/RAM_9912.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Helena" src="/images/photography/RAM_0085.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Danielle" src="/images/photography/RAM_0589.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Rachel" src="/images/photography/RAM_0010.jpg"></img>
        </div>
        <div className="photograph">
          <img alt="Hayden" src="/images/photography/RAM_9231.jpg"></img>
        </div>
      </div>
    </div>
  );
}


export default Photography;