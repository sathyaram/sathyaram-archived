import React, { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import './Hero.scss';
import AboutMe from './AboutMe/AboutMe';
import RouteMe from './RouteMe/RouteMe';
import CheckMeOut from './CheckMeOut/CheckMeOut.js';

function Hero() {
  useEffect(() => {
    const loaderTl = gsap.timeline();
    loaderTl.from(".cls-1",
      {
        duration: 2,
        opacity: 0,
        y: "-30px",
        ease: Power3.easeOut,
        stagger: 0.5
      });

    gsap.from("h2 div",
      {
        duration: 2,
        opacity: 0,
        delay: 4,
        top: "115px",
        stagger: 0.5
      }
    );
    gsap.from("h2 span",
      {
        duration: 2,
        opacity: 0,
        delay: 4,
        top: "115px",
        stagger: 0.5
      }
    );

    gsap.from(".photobooth",
      {
        duration: 2,
        opacity: 0,
        delay: 4,
        top: "150px"
      }
    );
  });

  return (
    <>
      <header role="banner">

        <div className="keyboard">
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
          <div className="key"></div>
        </div>
        <div className="raindrops">
          <div className="rain"></div>
          <div className="rain"></div>
          <div className="rain"></div>
        </div>
      
        <div className="info">
          <div className="photobooth">
            <div className="photoOfMe1">
              <img src="/images/me1.png" alt="me1"></img>
            </div>
            
          </div>
          <div className="pronounce">Saa-thee-uh · Ram</div>
         
          <div className="heading">
             <svg className="svg1" viewBox="0 0 174.02 19.99"><path className="cls-1" d="M9.37,19.76a3.64,3.64,0,0,0,1-4.78c-.86-1.33-2.06-2-5-3.18C1.49,10.19.4,8.55.06,6.21-.38,3.07,1.77.23,4.53,0,3.36.34,2.76,2.18,3.39,3.74,4.11,5.56,5.26,6,8.14,7.25c3.77,1.67,6,3.51,6,6.84A5.73,5.73,0,0,1,9.37,19.76Zm-1.72,0c-.13-.05-6.34-1.61-7,.23L.53,12A13.17,13.17,0,0,0,7.65,19.76ZM13,.16C12.25,1.66,6.51.05,6.51.05,12,3.15,13,6.66,13,6.66Z" /><path className="cls-1" d="M19.51,19.66H14.64c1.93-.84,3.28-5.23,3.28-5.23C17.76,18.77,19.51,19.66,19.51,19.66Zm6.73,0,.44-.39L25,14.9c-.78-2.06-4-3.36-5.72-3.59l4.37,0L20.88,4,22.08.16h2.37l7,19.11.49.39Z" /><path className="cls-1" d="M36.82.16C33.73,1,32.14,6,32,7.23V.16ZM43,19.27V.16h-4.7V19.27l-.55.39h5.75ZM44.34.16C47.51,1,49,6,49.2,7.23V.16Z" /><path className="cls-1" d="M58.61,19.66H52.84l.52-.39V.55L52.84.16h5.74l-.52.36V19.27Zm5.25,0h5.77l-.52-.39V.52l.5-.36H63.86l.55.39V9.46H60.19s4.22.6,4.22,3.38v6.43Z" /><path className="cls-1" d="M84.22,19.66H78.45l.54-.39V11.36L73.27.55,72.75.16H79l-.31.39,5,9.43v9.29Zm1.4-13.94c1.64-4.5-.44-5.56-.44-5.56h5.15C88.25.81,85.62,5.72,85.62,5.72Z" /><path className="cls-1" d="M93.11,19.66H88.25c1.92-.84,3.27-5.23,3.27-5.23C91.37,18.77,93.11,19.66,93.11,19.66Zm6.74,0,.44-.39L98.65,14.9c-.78-2.06-4-3.36-5.72-3.59l4.37,0L94.49,4,95.69.16h2.36l7,19.11.5.39Z" /><path className="cls-1" d="M117.29,19.27V.52l-.55-.36H122V19.27l.46.39h-5.72Zm15.81.39a1.42,1.42,0,0,1-.81-.5c-.41-.52-.44-1.43-.44-4,0-3.4-2.7-5.12-6.6-5.38,4-.29,6.08-2,6.08-4.76,0-2.21-2.13-4.83-6.79-4.83.58.07,1.95.67,2.06,2.86,0,0,.08,1,.08,1.95s-.08,2-.08,2a2.67,2.67,0,0,1-2.5,2.83A4.47,4.47,0,0,1,127,14c0,.49,0,1,0,1.58C127.17,18.9,129.23,19.94,133.1,19.66Z" /><path className="cls-1" d="M139,19.66h-4.86c1.92-.84,3.27-5.23,3.27-5.23C137.26,18.77,139,19.66,139,19.66Zm6.73,0,.45-.39-1.64-4.37c-.78-2.06-4-3.36-5.72-3.59l4.37,0L140.38,4,141.57.16h2.37l7,19.11.5.39Z" /><path className="cls-1" d="M158.32,19.66h-4.79s1.46-.71,2.4-6C156.5,18.93,158.32,19.66,158.32,19.66Zm6.29-6.79L159.46.16h-5.87l.7.39,7.9,19.11H164l2.21-9.1Zm8.89,6.4V.52l.5-.36h-3.85L168.8,3.3v16l-.55.39H174Z" /></svg>
            <h1>
              <span>S</span>
              <span>a</span>
              <span>t</span>
              <span>h</span>
              <span>y</span>
              <span>a</span>
              <span> R</span>
              <span>a</span>
              <span>m</span>
            </h1>
            <h2><div>Web Developer</div> <span>× </span>
              <div>Digital Designer</div> <span>× </span>
              <div>Photographer</div> </h2>
          </div>
          <div className="photoOfMe2">
              <img src="/images/me2.png" alt="melol"></img>
        </div>
        </div>
       
      </header>
      <AboutMe />
      <RouteMe />
      <CheckMeOut />
    </>
  );
};

export default Hero;