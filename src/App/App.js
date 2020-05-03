import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './Reset.scss';
import Menu from './../Menu/Menu';
import Hero from './../Hero/Hero';
import Footer from './../Footer/Footer';
import Websites from './../Websites/Websites';
import Designs from './../Designs/Designs';
import Photography from './../Photography/Photography';
import About from './../About/About';


function App() {
  // const colorChange = (e) => {
  //   e.target.style.color = "rgba(10, 153, 248, 0.9)";
  // }

  window.addEventListener('scroll', function () {
    if (window.scrollY >= 485) {
      document.body.classList.add("fade-in");
    } else {
      document.body.classList.remove("fade-in")
    }
  });

  setTimeout(function () {
    document.querySelector('.logo').classList.add("loaded");
  }, 2000);

  return (
    <>
      <Menu />
      <main role="main" name="main">
        <Switch>
          <Route path="/photography" render={() => <Photography />} />
          <Route path="/designs" render={() => <Designs />} />
          <Route path="/websites" render={() => <Websites />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/" render={() => <Hero />} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
