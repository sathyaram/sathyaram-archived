import React from "react"
import Tilt from "react-tilt";
// import AniLink from "gatsby-plugin-transition-link/AniLink";

import Image from "../components/image"
import Menu from "../components/menu"
import Sky from "../components/sky"
import Hero from "../components/hero"
import Main from "../components/main"
import Footer from "../components/footer"

export default function App() {
  let letters = document.querySelectorAll("#bob span");
  let bg = document.querySelector(".background");


  window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
      document.body.classList.add("fade-in");
    } else {
      document.body.classList.remove("fade-in");
    }
  });

  for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("mouseover", function () {
      bg.classList.add("color-" + i);
    });
    letters[i].addEventListener("mouseout", function () {
      bg.classList.remove("color-" + i);
    });
  }

  return (
    <div className="App">
      <Sky />
      <Menu />
      <Hero />
      <section className="about">
        <div className="container">
          <div className="about-me">
            <h3>Digitally Driven.</h3>
            <p>
              I'm Sathya, a creative front-end developer and web designer in the
              D.C. area.
              <br />
              <br /> I enjoy creating things that live on the internet, whether
              that be websites, applications, or anything in between. My goal is
              to always build products that provide pixel-perfect, performant
              experiences.
              <br />
              <br /> After graduating from Lehigh University, I found joy in
              working with creative web agencies on making custom websites as a
              web developer and digital designer.
            </p>
          </div>
          <div className="framicons">
            <div className="shooter" name="web anchor">
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
            </div>
            <div className="shooter" name="graphic">
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
            </div>
            <div className="shooter" name="photography">
              <div className="photo shape"></div>
            </div>
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

