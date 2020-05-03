
import React from 'react';
import './CheckMeOut.scss';
import ScrollAnimation from 'react-animate-on-scroll';


function CheckMeOut() {
  return (
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

  );
};

export default CheckMeOut;