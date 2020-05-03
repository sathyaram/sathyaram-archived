import React, { useEffect } from 'react';
import { gsap, Power3 } from 'gsap';

function Designs() {

  useEffect(() => {
    const loaderTl = gsap.timeline();
    loaderTl.from(".designItem",
      {
        duration: 1,
        y: "-50px",
        opacity: 0,
        ease: Power3.easeOut,
        stagger: 0.25,
      });
  });

  return (
    <div className="page designs appears">
      <div className="text">
        <h2><div>Designs</div></h2>
        <h6><div>A small set of my designs. Check out my <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sathyaram">Dribbble</a> for more. </div></h6>
      </div>
      <div className="content">
        <div className="designItem">
          <img alt="andromeda" src="images/graphic/andro.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="sexyvitamins" src="images/graphic/sexy_cover.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="shake" src="images/graphic/shake.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="gapi" src="images/graphic/gapi.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="lehighracing" src="images/graphic/lehighracing.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="indify" src="images/graphic/indify.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="rayban" src="images/graphic/charlierayban.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="environmental" src="images/graphic/envjustice.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="sexyad1" src="images/graphic/sexyad1.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="arctic" src="images/graphic/arctic.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="Poke" src="images/graphic/treeteck_logos.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="Poke" src="images/graphic/loewy.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="Poke" src="images/graphic/houndoom.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="Poke" src="images/graphic/steelixcorp.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="Poke" src="images/graphic/wingullssurfshop.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="Poke" src="images/graphic/vanilliteicecream.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="Poke" src="images/graphic/honedgepictures.jpg"></img>
        </div>
        <div className="designItem">
          <img alt="Poke" src="images/graphic/growlithehoundservices.jpg"></img>
        </div>
      </div>
    </div>
  );
}


export default Designs;