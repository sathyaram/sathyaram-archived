import React, { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';
import './Hero.scss';
import AboutMe from './AboutMe/AboutMe';
import RouteMe from './RouteMe/RouteMe';
import CheckMeOut from './CheckMeOut/CheckMeOut.js';

function Hero() {
  useEffect(() => {
    const loaderTl = gsap.timeline();
    loaderTl.from("h1 span",
      {
        duration: 2,
        opacity: 0,
        delay: 1,
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
          <div class="photobooth">
            <div>
              <img src="/images/me1.png" alt="me1"></img>
            </div>
            <div>
              <img src="/images/me2.png" alt="melol"></img>
            </div></div>
          <div className="pronounce">Saa-thee-uh · Ram</div>

          <div className="heading">
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
        </div>
      </header>
      <AboutMe />
      <RouteMe />
      <CheckMeOut />
    </>
  );
};

export default Hero;