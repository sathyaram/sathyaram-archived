import React, { useEffect } from 'react';
import './Hero.scss';
import AboutMe from './AboutMe/AboutMe';
import RouteMe from './RouteMe/RouteMe';
import CheckMeOut from './CheckMeOut/CheckMeOut.js';
import { gsap, Power3 } from 'gsap';
import ScrollAnimation from 'react-animate-on-scroll';


function Hero() {


  useEffect(() => {


    // const loaderTl = gsap.timeline();
    // loaderTl.from(".instagramItem",
    //   {
    //     duration: 3,
    //     y: "20px",
    //     opacity: 0,
    //     ease: Power3.easeOut,
    //     stagger: 0.25,
    //     scale: 1.5
    //   });

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
          <ScrollAnimation animateIn="fadeIn" delay={6000} animateOnce={true}>

            <div class="photobooth">
              <div>
                <img src="/images/me1.png" alt="me1"></img>
              </div>
              <div>
                <img src="/images/me2.png" alt="melol"></img>
                </div></div>
          <div className="pronounce">Saa-thee-uh · Ram</div>
          </ScrollAnimation>

          <div className="heading">
          <ScrollAnimation animateIn="fadeInUp" delay={4000} animateOnce={true}>
            <h1>Sathya Ram</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={5000} animateOnce={true}>
            <h2>Web Developer <span>× </span>
              Digital Designer <span>× </span>
              Photographer </h2>
          </ScrollAnimation>
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