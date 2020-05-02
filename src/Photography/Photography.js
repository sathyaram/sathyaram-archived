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
    // loaderTl.to(box.current,
    //   {
    //     duration: 1,
    //     y: "0",
    //     ease: Power3.easeIn
    //   });
  });

  return (
    <div className="page photography appears">
      <div className="text">
        <h2><div>Photography</div></h2>
        <h6><div>A few of my portraits. See more on my <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">Instagram</a>.</div></h6>
      </div>
      <div className="content">
        <div className="photograph">
          <img src="/images/chance.jpg" alt="chance"></img>
        </div>
        <div className="photograph">
          <img src="/images/rachel-americana.jpg" alt="rachel"></img>
        </div>
        <div className="photograph">
          <img src="/images/chance.jpg" alt="chance"></img>
        </div>
        <div className="photograph">
          <img src="/images/rachel-americana.jpg" alt="rachel"></img>
        </div>
        <div className="photograph">
          <img src="/images/chance.jpg" alt="chance"></img>
        </div>
        <div className="photograph">
          <img src="/images/rachel-americana.jpg" alt="rachel"></img>
        </div>
        <div className="photograph">
          <img src="/images/chance.jpg" alt="chance"></img>
        </div>
        <div className="photograph">
          <img src="/images/rachel-americana.jpg" alt="rachel"></img>
        </div>
        <div className="photograph">
          <img src="/images/chance.jpg" alt="chance"></img>
        </div>
        <div className="photograph">
          <img src="/images/rachel-americana.jpg" alt="rachel"></img>
        </div>
      </div>
    </div>
  );
}


export default Photography;