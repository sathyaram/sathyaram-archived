import React, { useEffect } from 'react';
import './Hero.scss';
import AboutMe from './AboutMe/AboutMe';
import RouteMe from './RouteMe/RouteMe';
import CheckMeOut from './CheckMeOut/CheckMeOut.js';
import { gsap, Power3 } from 'gsap';
import ScrollAnimation from 'react-animate-on-scroll';


function Hero() {


  useEffect(() => {

    const loaderTl = gsap.timeline();
    loaderTl.from("h1 span",
      {
        duration: 2,
        opacity: 0,
        ease: Power3.easeOut,
        stagger: 0.5
      });

      gsap.from("h2", 
      {
        duration:2,
         opacity: 0,
         delay: 3,
         top: "115px"
        }
      );

      gsap.from(".photobooth", 
      {
        duration:2,
         opacity: 0,
          delay: 4,
         top: "115px"
        }
      );

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

            <div class="photobooth">
              <div>
                <img src="/images/me1.png" alt="me1"></img>
              </div>
              <div>
                <img src="/images/me2.png" alt="melol"></img>
                </div></div>
          <div className="pronounce">Saa-thee-uh · Ram</div>

          <div className="heading">
          {/* <ScrollAnimation animateIn="fadeInUp" delay={4000} animateOnce={true}> */}
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
          {/* </ScrollAnimation> */}
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