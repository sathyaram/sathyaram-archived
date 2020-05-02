import React, { useEffect, useState, useRef } from 'react';
import { gsap, Power3 } from 'gsap';
import { Route, Switch } from 'react-router-dom';
import './Reset.scss';
import Menu from './../Menu/Menu';
import Hero from './../Hero/Hero';
import Footer from './../Footer/Footer';
import Websites from './../Websites/Websites';
import Designs from './../Designs/Designs';
import Photography from './../Photography/Photography';


function App() {
  const colorChange = (e) => {
    e.target.style.color = "rgba(10, 153, 248, 0.9)";
  }

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 485) {
      document.body.classList.add("fade-in");
    } else {
      document.body.classList.remove("fade-in")
    }
  });

  setTimeout(function () {
    document.querySelector('.logo').classList.add("loaded");
  }, 3200);

  useEffect(() => {

    // loaderTl.to(box.current,
    //   {
    //     duration: 1,
    //     y: "0",
    //     ease: Power3.easeIn
    //   });
  });

  return (
    <>
      <Menu />
      <main>
        <Switch>
          <Route path="/photography" render={() => <Photography />} />
          <Route path="/designs" render={() => <Designs />} />
          <Route path="/websites" render={() => <Websites />} />
          <Route path="/" render={() => <Hero />} />
        </Switch>
      </main>
      {/* <button onClick={colorChange}>Arun</button>
      <div onClick={toggleMenu} className="logo">Hello!</div> */}
      <Footer />
    </>
  );
}

export default App;
