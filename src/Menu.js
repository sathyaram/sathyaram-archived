import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Menu extends Component {


  componentDidMount() {
    document.querySelector('.logo').addEventListener("click", classToggle);
    function classToggle() {
      document.body.classList.toggle('is-open');
    }

    document.querySelectorAll('.menu a').forEach((ix) => {
      ix.addEventListener('click', () => {
        document.body.classList.remove('is-open');
      });
    });
  
    window.addEventListener('scroll', function () {
      let scrollpos = window.scrollY;
      if (scrollpos >= 485) { document.body.classList.add("fade-in"); }
      else { document.body.classList.remove("fade-in") }
    })
  
    var scrollMore = document.querySelector('.scroll-more');
    scrollMore.onclick = function () {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };
  }

  render() {
    return (
      <>
        <nav className="menu" role="navigation">
          <ul>
            <li><Link to="/"><span>Home</span>Take me back!</Link></li>
            <li><Link to="/about"><span>About</span>Who even is this guy?</Link></li>
            <li><Link to="/websites"><span>Websites</span>Real sites. Real code.</Link></li>
            <li><Link to="/designs"><span>Designs</span>Graphic, Web, UI</Link></li>
            <li><Link to="/photography"><span>Photography</span>Life through lenses</Link></li>
            <li><Link to="/playground"><span>Playground</span>My nerdy lil sandbox</Link></li>
          </ul>
          <div className="logo">
            <button className="menuTrigger" aria-label="menu trigger" name="menu trigger">
              <img src="images/ram-logo-white.svg" alt="ram logo" aria-label="ram logo" />
            </button>
          </div>
        </nav>
        <div className="triangles"></div>
        <div className="eyebrow">
          <a className="scroll-more" href="#maincontent">↓</a>
          <nav className="social-media" role="navigation">
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">Instagram</a>

            <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sathyaram">Dribbble</a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sathyaram">Github</a>
            <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/sathyaram">Codepen</a>
          </nav>
          <nav className="contact">
            <a target="_blank" rel="noopener noreferrer" href="/SathyaRam_Resume2020.pdf">Resume</a>
            <a className="music" target="_blank" rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=vpbblMR_jUo">✧</a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sathya-ram/">LinkedIn</a>
            <a className="music" target="_blank" rel="noopener noreferrer"
              href="https://www.youtube.com/watch?v=cq3fwlZdWhw">✧</a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:sathyatheram@gmail.com">Email</a>
          </nav>
        </div>
      </>
    );
  }
}

export default Menu;