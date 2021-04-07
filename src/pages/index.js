import React from "react"
import Menu from "../components/menu"
import Sky from "../components/sky"
import Hero from "../components/hero"
import Main from "../components/main"
import Footer from "../components/footer"
import SEO from "../components/seo"
import { window, document } from 'browser-monads';


export default function App() {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
      document.body.classList.add("fade-in");
    } else {
      document.body.classList.remove("fade-in");
    }
  });

  const [bgClass, setBgClass] = React.useState('');

  return (
    <div className="App">
      <div className="loader">
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <div className="slide"></div>
        <svg version="1.1" viewBox="0 0 62.5 28.7">
          <g>
            <polygon
              className="s-line"
              points="27.9,14.4 13,8.1 23.4,19.8 4.5,28.4 15.7,18.4 0.4,0.3 27.9,7.1 	"
            />
            <polyline
              className="r-line"
              points="30.1,6.8 30.1,28.4 35.8,13.9 49.6,8.1 39.2,19.8 58,28.5 46.9,18.4 62.3,0.4 30.1,6.8 	"
            />
          </g>
        </svg>
      </div>
      <SEO title="Home" />
      <Sky bgClass={bgClass} />
      <Menu />
      <Hero setBgClass={setBgClass}/>
      <section className="about">
        <div className="container">
          <div className="about-me">
            <h3>Digitally Driven.</h3>
            <p>
              I'm Sathya, a creative technologist specializing in frontend development and web interface design.
              <br />
              <br /> I enjoy creating things that live on the internet, whether
              that be websites, applications, or anything in between. My goal is
              to always build pixel-perfect experiences.
              <br />
              <br /> After graduating from Lehigh University, I found joy in
              working with creative web agencies on making custom websites as a
              web developer and digital designer.
            </p>
          </div>
          <div className="framicons">
            <a href="#websites" className="shooter" name="web anchor" aria-label="web anchor">
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
            </a>
            <a href="#designs" className="shooter" name="designs" aria-label="designs anchor">
              <div className="box shape">
                <div className="draw">
                  <svg viewBox="0 0 78.2 54.3">
                    <path
                      className="s-line"
                      d="M36.4 14c-.4-.7-5-9.5-15.4-6.6h-.1c-3.4.9-5.8 3.5-6.8 6.8-1 3.6 1.2 7.1 3 10 1.5 2.5 4.3 5.8 1.8 8.7-.8.9-2.1 1.4-3.3 1.3-1.2 0-2.4-.5-3.5-1-2.7-1.3-6.3-4.2-5-7.6-1.7 4.8.9 9.8 4.9 12.5 2.3 1.5 5 2.3 7.8 2 4.4-.6 7.8-4.4 8-8.8.1-2.4-1.6-4.9-3-6.7-.7-.9-1.4-1.8-2.1-2.6-4-6.6 2.7-5.2 2.7-5.2s5.4 1.2 6.9 9.5c.4-2.6-.1-6.1 4.1-12.3z"
                    ></path>
                    <path
                      className="r-line"
                      d="M71 27.2c1.3 3.5-3 6.3-6 7.5-1.3.5-2.6.9-4 .9s-2.8-.5-3.6-1.5c-2.7-3.1.6-6.3 2.4-8.7 2.1-2.9 4.7-6.4 3.8-10-.9-3.4-3.5-6.1-7.3-7.2h-.1c-3.5-1-7.4-.4-10.7 1-2.7 1.2-5 3-6.6 5.5-1.8 2.8-3.3 6.3-3.9 9.6-.2 1.1-.3 2.3-.4 3.4-.7 10.6 5.9 20.1 5.9 20.1-.8-4.9-.8-8.7-.4-11.8.5-3.9 1.3-7 2.3-9.5 3.6-9.5 8.5-9 8.5-9s7.5-1.1 2.8 5.4c-.9.8-1.7 1.7-2.5 2.6-1.6 1.8-3.6 4.2-3.6 6.7 0 4.5 3.8 8.5 8.6 9.2 3 .5 6.2-.2 8.8-1.7 4.6-2.8 7.8-7.7 6-12.5z"
                    ></path>
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
            </a>
            <a href="#photography" className="shooter" name="photography" aria-label="photography anchor">
              <div className="photo shape"></div>
            </a>
          </div>
          <div className="skills">
            <ul>
              <li>Drupal &amp; Wordpress</li>
              <li>React &amp; Gatsby</li>
              <li>HTML &amp; (S)CSS</li>
              <li>JavaScript &amp; jQuery</li>
            </ul>
            <ul>
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
              <li>Brand Identity</li>
              <li>Adobe Creative Suite</li>
            </ul>
            <ul>
              <li>Art Direction</li>
              <li>Professional Editing</li>
              <li>Studio Lighting</li>
              <li>Videography</li>
            </ul>
          </div>
        </div>
      </section>
      <Main />
      <Footer />
    </div>
  );
}

