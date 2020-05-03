import React from 'react';
import './RouteMe.scss';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Tilt from 'react-tilt'

function RouteMe() {
  return (
    <section className="routeMe">
      {/* <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> */}
        <Tilt className="tilt">
          <Link to="/websites" id="websites" className="router">
            <h4>Websites</h4>
            <div class="track"><img class="desktop" alt="lol" src="/images/fudtruk.gif"></img>
              <img class="tablet" alt="lol" src="/images/paulknakk.jpg"></img>
              <img class="phone" alt="lol" src="/images/ex.jpg"></img>
            </div>
          </Link>
        </Tilt>
      {/* </ScrollAnimation> */}

      {/* <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true}> */}
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
      {/* </ScrollAnimation> */}

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
  );
};

export default RouteMe;