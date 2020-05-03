import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './AboutMe.scss';

function AboutMe() {
  return (
    <section className="aboutMe">
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
                <svg viewBox="0 0 78.2 54.3">
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
        <ScrollAnimation animateIn="fadeInUp" delay={1000} animateOnce={true}>
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
  );
};

export default AboutMe;