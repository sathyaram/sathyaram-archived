import React, { useEffect } from 'react';
import './Menu.scss';
import { gsap, Power3 } from 'gsap';
import { Link } from 'react-router-dom';

function Menu() {
  
  const toggleMenu = (e) => {
    document.body.classList.toggle('is-open');
  }

  useEffect(() => {

    document.querySelectorAll('.menu a').forEach((ix) => {
      ix.addEventListener('click', () => {
        document.body.classList.remove('is-open');
        
        var elems = document.querySelectorAll('.menu a');
        
        [].forEach.call(elems, function(el) {
          el.classList.remove("is-active");
        });
        ix.classList.add('is-active');
      });
    });
    
    const loaderTl = gsap.timeline();
    loaderTl.to(".slide",
      {
        duration: 3,
        height: 0,
        delay: 1,
        ease: Power3.easeOut,
        stagger: 0.25
      });

  });
  return (
    <>
      
      {/* <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.2 54.3"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-9.3" y1="29.5" x2="86.5" y2="29.5" gradientTransform="matrix(1 0 0 -1 0 56)"><stop offset="0" stop-color="#29abe2"></stop><stop offset="1" stop-color="#0059bc"></stop></linearGradient><path class="st1" d="M36.4 14.1c-.4-.7-5-9.5-15.4-6.6h-.1c-3.4.9-5.8 3.5-6.8 6.8-1 3.6 1.2 7.1 3 10 1.5 2.5 4.3 5.8 1.8 8.7-.8.9-2.1 1.4-3.3 1.3-1.2 0-2.4-.5-3.5-1-2.7-1.3-6.3-4.2-5-7.6C5.4 30.4 8 35.4 12 38c2.3 1.5 5 2.3 7.8 2 4.4-.6 7.8-4.4 8-8.8.1-2.4-1.6-4.9-3-6.7-.7-.9-1.4-1.8-2.1-2.6-4-6.6 2.7-5.2 2.7-5.2s5.4 1.2 6.9 9.5c.4-2.4-.1-5.8 4.1-12.1zM71 27.3c1.3 3.5-3 6.3-6 7.5-1.3.5-2.6.9-4 .9s-2.8-.5-3.6-1.5c-2.7-3.1.6-6.3 2.4-8.7 2.1-2.9 4.7-6.4 3.8-10-.9-3.4-3.5-6.1-7.3-7.2h-.1c-3.5-1-7.4-.4-10.7 1-2.7 1.2-5 3-6.6 5.5-1.8 2.8-3.3 6.3-3.9 9.6-.2 1.1-.3 2.3-.4 3.4-.7 10.6 5.9 20.1 5.9 20.1-.8-4.9-.8-8.7-.4-11.8.5-3.9 1.3-7 2.3-9.5 3.6-9.5 8.5-9 8.5-9s7.5-1.1 2.8 5.4c-.9.8-1.7 1.7-2.5 2.6-1.6 1.8-3.6 4.2-3.6 6.7 0 4.5 3.8 8.5 8.6 9.2 3 .5 6.2-.2 8.8-1.7 4.5-2.7 7.7-7.6 6-12.5z"></path><linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="6.5709" y1="32.511" x2="36.4" y2="32.511" gradientTransform="matrix(1 0 0 -1 0 56)"><stop offset="0" stop-color="#29abe2"></stop><stop offset="1" stop-color="#0059bc"></stop></linearGradient><path class="s-line" d="M36.4 14c-.4-.7-5-9.5-15.4-6.6h-.1c-3.4.9-5.8 3.5-6.8 6.8-1 3.6 1.2 7.1 3 10 1.5 2.5 4.3 5.8 1.8 8.7-.8.9-2.1 1.4-3.3 1.3-1.2 0-2.4-.5-3.5-1-2.7-1.3-6.3-4.2-5-7.6-1.7 4.8.9 9.8 4.9 12.5 2.3 1.5 5 2.3 7.8 2 4.4-.6 7.8-4.4 8-8.8.1-2.4-1.6-4.9-3-6.7-.7-.9-1.4-1.8-2.1-2.6-4-6.6 2.7-5.2 2.7-5.2s5.4 1.2 6.9 9.5c.4-2.6-.1-6.1 4.1-12.3z" fill="url(#SVGID_2_)"></path><path class="r-line" d="M71 27.2c1.3 3.5-3 6.3-6 7.5-1.3.5-2.6.9-4 .9s-2.8-.5-3.6-1.5c-2.7-3.1.6-6.3 2.4-8.7 2.1-2.9 4.7-6.4 3.8-10-.9-3.4-3.5-6.1-7.3-7.2h-.1c-3.5-1-7.4-.4-10.7 1-2.7 1.2-5 3-6.6 5.5-1.8 2.8-3.3 6.3-3.9 9.6-.2 1.1-.3 2.3-.4 3.4-.7 10.6 5.9 20.1 5.9 20.1-.8-4.9-.8-8.7-.4-11.8.5-3.9 1.3-7 2.3-9.5 3.6-9.5 8.5-9 8.5-9s7.5-1.1 2.8 5.4c-.9.8-1.7 1.7-2.5 2.6-1.6 1.8-3.6 4.2-3.6 6.7 0 4.5 3.8 8.5 8.6 9.2 3 .5 6.2-.2 8.8-1.7 4.6-2.8 7.8-7.7 6-12.5z"></path></svg>
      </div>
      <nav className="menu" role="navigation" name="menu">

        <div className="triangle"></div>
      </nav>
      <div className="eyebrow">
        <nav class="social-media" role="navigation"><a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">Instagram</a><a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sathyaram">Dribbble</a><a target="_blank" rel="noopener noreferrer" href="https://github.com/sathyaram">Github</a><a target="_blank" rel="noopener noreferrer" href="https://codepen.io/sathyaram">Codepen</a></nav>
        <nav class="contact"><a target="_blank" rel="noopener noreferrer" href="/images/SathyaRam_Resume2020.pdf">Resume</a><a class="music" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=vpbblMR_jUo">✧</a><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sathya-ram/">LinkedIn</a><a class="music" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=cq3fwlZdWhw">✧</a><a target="_blank" rel="noopener noreferrer" href="mailto:sathyatheram@gmail.com">Email</a></nav>
      </div> */}

      <div className="loader">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
      </div>
      <div className="logo" onClick={toggleMenu}>
          <button className="menuTrigger" aria-label="menu trigger" name="menu trigger">
            <svg viewBox="0 0 78.2 54.3">
              <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="-9.3" y1="29.5" x2="86.5" y2="29.5" gradientTransform="matrix(1 0 0 -1 0 56)">
                <stop offset="0" stopColor="#29abe2" />
                <stop offset="1" stopColor="#0059bc" />
              </linearGradient>
              <path className="st1" d="M36.4 14.1c-.4-.7-5-9.5-15.4-6.6h-.1c-3.4.9-5.8 3.5-6.8 6.8-1 3.6 1.2 7.1 3 10 1.5 2.5 4.3 5.8 1.8 8.7-.8.9-2.1 1.4-3.3 1.3-1.2 0-2.4-.5-3.5-1-2.7-1.3-6.3-4.2-5-7.6C5.4 30.4 8 35.4 12 38c2.3 1.5 5 2.3 7.8 2 4.4-.6 7.8-4.4 8-8.8.1-2.4-1.6-4.9-3-6.7-.7-.9-1.4-1.8-2.1-2.6-4-6.6 2.7-5.2 2.7-5.2s5.4 1.2 6.9 9.5c.4-2.4-.1-5.8 4.1-12.1zM71 27.3c1.3 3.5-3 6.3-6 7.5-1.3.5-2.6.9-4 .9s-2.8-.5-3.6-1.5c-2.7-3.1.6-6.3 2.4-8.7 2.1-2.9 4.7-6.4 3.8-10-.9-3.4-3.5-6.1-7.3-7.2h-.1c-3.5-1-7.4-.4-10.7 1-2.7 1.2-5 3-6.6 5.5-1.8 2.8-3.3 6.3-3.9 9.6-.2 1.1-.3 2.3-.4 3.4-.7 10.6 5.9 20.1 5.9 20.1-.8-4.9-.8-8.7-.4-11.8.5-3.9 1.3-7 2.3-9.5 3.6-9.5 8.5-9 8.5-9s7.5-1.1 2.8 5.4c-.9.8-1.7 1.7-2.5 2.6-1.6 1.8-3.6 4.2-3.6 6.7 0 4.5 3.8 8.5 8.6 9.2 3 .5 6.2-.2 8.8-1.7 4.5-2.7 7.7-7.6 6-12.5z" />
              <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="6.5709" y1="32.511" x2="36.4" y2="32.511" gradientTransform="matrix(1 0 0 -1 0 56)">
                <stop offset="0" stopColor="#29abe2" />
                <stop offset="1" stopColor="#0059bc" />
              </linearGradient>
              <path className="s-line" d="M36.4 14c-.4-.7-5-9.5-15.4-6.6h-.1c-3.4.9-5.8 3.5-6.8 6.8-1 3.6 1.2 7.1 3 10 1.5 2.5 4.3 5.8 1.8 8.7-.8.9-2.1 1.4-3.3 1.3-1.2 0-2.4-.5-3.5-1-2.7-1.3-6.3-4.2-5-7.6-1.7 4.8.9 9.8 4.9 12.5 2.3 1.5 5 2.3 7.8 2 4.4-.6 7.8-4.4 8-8.8.1-2.4-1.6-4.9-3-6.7-.7-.9-1.4-1.8-2.1-2.6-4-6.6 2.7-5.2 2.7-5.2s5.4 1.2 6.9 9.5c.4-2.6-.1-6.1 4.1-12.3z" />
              <path className="r-line" d="M71 27.2c1.3 3.5-3 6.3-6 7.5-1.3.5-2.6.9-4 .9s-2.8-.5-3.6-1.5c-2.7-3.1.6-6.3 2.4-8.7 2.1-2.9 4.7-6.4 3.8-10-.9-3.4-3.5-6.1-7.3-7.2h-.1c-3.5-1-7.4-.4-10.7 1-2.7 1.2-5 3-6.6 5.5-1.8 2.8-3.3 6.3-3.9 9.6-.2 1.1-.3 2.3-.4 3.4-.7 10.6 5.9 20.1 5.9 20.1-.8-4.9-.8-8.7-.4-11.8.5-3.9 1.3-7 2.3-9.5 3.6-9.5 8.5-9 8.5-9s7.5-1.1 2.8 5.4c-.9.8-1.7 1.7-2.5 2.6-1.6 1.8-3.6 4.2-3.6 6.7 0 4.5 3.8 8.5 8.6 9.2 3 .5 6.2-.2 8.8-1.7 4.6-2.8 7.8-7.7 6-12.5z" />
            </svg>
          </button>
        </div>
        <nav className="menu" role="navigation">
          <ul>
            <li><Link to="/"><span>Home</span>Take me back!</Link></li>
            {/* <li><Link to="/about"><span>About</span>Who even is this guy?</Link></li> */}
            <li><Link to="/websites"><span>Websites</span>Real sites. Real code.</Link></li>
            <li><Link to="/designs"><span>Designs</span>Graphic, Web, UI</Link></li>
            <li><Link to="/photography"><span>Photography</span>Life through lenses</Link></li>
          </ul>
        </nav>
        <div className="triangles"></div>
        <div className="eyebrow">
          {/* <div className="scroll-more">↓</div> */}
          <nav className="social-media" role="navigation">
            <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">Instagram</a>

            <a target="_blank" rel="noopener noreferrer" href="https://dribbble.com/sathyaram">Dribbble</a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sathyaram">Github</a>
            <a target="_blank" rel="noopener noreferrer" href="https://codepen.io/sathyaram">Codepen</a>
          </nav>
          <nav className="contact">
            <a target="_blank" rel="noopener noreferrer" href="/images/SathyaRam_Resume2020.pdf">Resume</a>
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
};

export default Menu;