import React, { Component } from 'react';
import Tilt from 'react-tilt'


class Header extends Component {


  componentDidMount = () => {
    window.addEventListener('scroll', function () {
      let scrollpos = window.scrollY;
      if (scrollpos >= 500) { document.body.classList.add("fade-in"); }
      else { document.body.classList.remove("fade-in") }
    })
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    var scrollMore = document.querySelector('.scroll-more');
    scrollMore.onclick = function () {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
  }

  render() {
    return (
      <header>
        <figure>
          <div className="planet" id="planet1"></div>
          <div className="planet" id="planet2"></div>
          <div className="planet" id="planet3"></div>
          <div className="planet" id="planet4"></div>
          <div className="planet" id="planet5"></div>
          <div className="planet" id="planet6"></div>
        </figure>
        <Tilt style={{ width: `fit-content` }}>
          <div className="pronounce">/ Saa-thee-uh · Ram /</div>
          <h1>Sathya Ram</h1>
        </Tilt>
        <h2>
          <div className="skills">
            <span>Front-End </span>
            Developer</div>
            <div className="skills">
              <span>Graphic &amp; Web </span>
              Designer
              </div>
              <div className="skills">
                <span>Professional </span>
                Photographer
              </div>
        </h2>
        <p>i design &amp; build digital experiences. my thing is handcrafted <u>websites</u>, vibrant, user-centric <u>designs</u> and lifestyle, portrait, studio <u>photography</u>. i'm all about making the internet sexier.</p>
      </header>
    );
  }
}

export default Header;