import React, { useEffect, useRef } from 'react';
import { useIntersection } from 'react-use'
import { Link } from 'react-router-dom';
import './Hero.scss';
import { gsap, Power3 } from 'gsap';
import ScrollAnimation from 'react-animate-on-scroll';
import Tilt from 'react-tilt'


function Hero() {

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
  });

  const fadeIn = element => {
    gsap.to(element, {
      duration: 2,
      opacity: 1,
      y: -60,
      ease: Power3.easeOut,
      stagger: 0.25
    })
  }

  const fadeOut = element => {
    gsap.to(element, {
      opacity: 0,
      y: -20,
      ease: Power3.easeOut
    })
  }


  useEffect(() => {

    // fadeIn(".fadeIn");
    // intersection && intersection.intersectionRatio < 0.25 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");

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

      <section ref={sectionRef} className="aboutMe">
        <div className="framicons">
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
            <div className="shooter" name="web anchor">
              <div className="monitor shape">
                <div className="screen">
                  <div className="code">
                    <div className="bar long"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar long"></div>
                    <div className="bar long"></div>
                  </div>
                </div>
                <div className="base">
                  <div className="foot bottom"></div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true}>

            <div className="shooter" name="graphic">
              <div className="box shape">
                <div className="draw">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.2 54.3">
                    <path className="s-line" d="M36.4 14c-.4-.7-5-9.5-15.4-6.6h-.1c-3.4.9-5.8 3.5-6.8 6.8-1 3.6 1.2 7.1 3 10 1.5 2.5 4.3 5.8 1.8 8.7-.8.9-2.1 1.4-3.3 1.3-1.2 0-2.4-.5-3.5-1-2.7-1.3-6.3-4.2-5-7.6-1.7 4.8.9 9.8 4.9 12.5 2.3 1.5 5 2.3 7.8 2 4.4-.6 7.8-4.4 8-8.8.1-2.4-1.6-4.9-3-6.7-.7-.9-1.4-1.8-2.1-2.6-4-6.6 2.7-5.2 2.7-5.2s5.4 1.2 6.9 9.5c.4-2.6-.1-6.1 4.1-12.3z" />
                    <path className="r-line" d="M71 27.2c1.3 3.5-3 6.3-6 7.5-1.3.5-2.6.9-4 .9s-2.8-.5-3.6-1.5c-2.7-3.1.6-6.3 2.4-8.7 2.1-2.9 4.7-6.4 3.8-10-.9-3.4-3.5-6.1-7.3-7.2h-.1c-3.5-1-7.4-.4-10.7 1-2.7 1.2-5 3-6.6 5.5-1.8 2.8-3.3 6.3-3.9 9.6-.2 1.1-.3 2.3-.4 3.4-.7 10.6 5.9 20.1 5.9 20.1-.8-4.9-.8-8.7-.4-11.8.5-3.9 1.3-7 2.3-9.5 3.6-9.5 8.5-9 8.5-9s7.5-1.1 2.8 5.4c-.9.8-1.7 1.7-2.5 2.6-1.6 1.8-3.6 4.2-3.6 6.7 0 4.5 3.8 8.5 8.6 9.2 3 .5 6.2-.2 8.8-1.7 4.6-2.8 7.8-7.7 6-12.5z" />
                  </svg>
                </div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
                <div className="anchor"></div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInUp" delay={1000} animateOnce={true}>

            <div className="shooter" name="photography">
              <div className="photo shape"></div>
            </div>
          </ScrollAnimation>
        </div>

        <div className="wrapper">
          <ScrollAnimation animateIn="fadeInUp" delay={1000} animateOnce={true}>
            <h3>
              <span>Design</span>,
            <span> strategy</span>,
            &amp; a bit of <span>magic!</span>
            </h3>
          </ScrollAnimation>
          <br></br>
          <br></br>
          <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>

            <p>I design &amp; build digital experiences. My thing is  vibrant, handcrafted websites, user-centric designs and lifestyle, portrait, studio photography. I'm all about making the internet sexier.</p>
          </ScrollAnimation>

        </div>
        {/* <ScrollAnimation animateIn="fadeIn" offset={}> */}

        <div className="spaceScene">
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
          <div className="planet"></div>
        </div>
        {/* </ScrollAnimation> */}

      </section>
      <section className="routeMe">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <Tilt className="tilt">
          <Link to="/websites" id="websites" className="router">
            <h4>Websites</h4>
            <div class="track"><img class="desktop" alt="lol" src="/images/fudtruk.gif"></img>
              <img class="tablet" alt="lol" src="/images/paulknakk.jpg"></img>
              <img class="phone" alt="lol" src="/images/ex.jpg"></img>
            </div>
          </Link>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true}>
        <Tilt className="tilt">
          <Link to="/designs" id="designs" className="router">
            <h4>Designs</h4>
            <div class="routerGrid">
              <img alt="lol" src="/images/loewy.png"></img>
              <img alt="lol" src="/images/treeteck.png"></img>
              <img alt="lol" src="/images/lehighracing.png"></img>
              <img alt="lol" src="/images/arcticlogo.png"></img>
            </div>
          </Link>
          </Tilt>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInUp" delay={1000} animateOnce={true}>
        <Tilt className="tilt">
          <Link to="photography" id="photography" className="router">
            <h4>Photography</h4>
            <div class="container">
              <div className="photoOne">
                <img alt="lol" src="/images/RAM_2145.jpg"></img>
              </div>
              <div className="photoTwo">
                <img alt="lol" src="/images/RAM_2146.jpg"></img>
              </div>
            </div>
          </Link>
          </Tilt>
        </ScrollAnimation>

      </section>
      <section className="checkMeOut">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h3>Check me out across the internet</h3>
        </ScrollAnimation>
        <a className="instaLink" target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">
          <h4>Instagram <span>@sathya.ram</span></h4>
          <div className="instagramGrid">
            <div className="instagramItem">
              <ScrollAnimation animateIn="fadeInRight">
                <img src="/images/chance.jpg" alt="chance"></img></ScrollAnimation></div>

            <div className="instagramItem"><ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={500}><img src="/images/rachel-americana.jpg" alt="rachel"></img></ScrollAnimation></div>

            <div className="instagramItem"><ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={1000}><img src="/images/katrina.jpg" alt="galactic"></img></ScrollAnimation></div>

            <div className="instagramItem"><ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={1500}><img src="/images/yaboi.jpg" alt="david"></img></ScrollAnimation></div>

            <div className="instagramItem"><ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={2000}><img src="/images/dani2.jpg" alt="dani"></img></ScrollAnimation></div>
          </div>
        </a>
        <a className="dribLink" target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sathyaram">
          <h4>Dribbble <span>sathyaram</span></h4>
          <div className="dribbbleGrid">
            <div className="dribbbleItem"><ScrollAnimation animateOnce={true} animateIn="fadeInRight"><img src="/images/fudtruk.jpg" alt="fudtruk"></img></ScrollAnimation></div>
            <div className="dribbbleItem"><ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={500}><img src="/images/sexyad1.jpg" alt="sexyad1"></img></ScrollAnimation></div>
            <div className="dribbbleItem"><ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={1000}><img src="/images/shakespeare.jpg" alt="shakespeare"></img></ScrollAnimation></div>
            <div className="dribbbleItem"><ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={1500}><img src="/images/androcover_07.jpg" alt="david"></img></ScrollAnimation></div>
            <div className="dribbbleItem"><ScrollAnimation animateOnce={true} animateIn="fadeInRight" delay={2000}><img src="/images/sexy_cover.jpg" alt="sexycover"></img></ScrollAnimation></div>
          </div>
        </a>
      </section>
    </>
  );
};

export default Hero;