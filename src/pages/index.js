import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";


import Image from "../components/image"
import Menu from "../components/menu"

import Tilt from "react-tilt";

import "../styles/reset.scss";
import "../styles/styles.scss";
import "../styles/icons.scss";
import "../styles/main.scss";
import "../styles/footer.scss";

export default function App() {
  let letters = document.querySelectorAll("#bob span");
  let bg = document.querySelector(".background");


  const openDesc = (e) => {
    e.target.parentNode.parentNode.classList.toggle("active");
  };

  const closeDesc = (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.classList.remove(
      "active"
    );
  };

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
      <div className="background">
        <div className="rays">
          <div className="ray"></div>
          <div className="ray"></div>
          <div className="ray"></div>
        </div>
        <div className="raindrops">
          <div className="rain"></div>
          <div className="rain"></div>
          <div className="rain"></div>
        </div>
      </div>
      <Menu />
      <header className="hero" role="banner">
        <div className="branding">
          <div className="heading">
            <div className="pronounce">Saa-thee-uh · Ram</div>
            <h1 id="bob" className="myName">
              <div>
                <span>S</span>
                <span>a</span>
                <span>t</span>
                <span>h</span>
                <span>y</span>
                <span>a</span>
              </div>
              <div>
                <span>R</span>
                <span>a</span>
                <span>m</span>
              </div>
            </h1>
          </div>
          <div className="me">
            <div className="photoOfMe">
              <img alt="me" src="https://sathyaram.com/images/me1.png" />
            </div>
            <div className="photoOfMe2">
              <img
                src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/15sL-me2.png"
                alt="me1"
              />
            </div>
          </div>
          <h2>
            <div>Front-End Developer</div>
            <div>UI/UX Web Designer</div>
            <div>Photographer</div>
          </h2>
        </div>
      </header>
      <div className="eyebrow">
        <nav className="social-media" role="navigation">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/sathya.ram"
          >
            <svg viewBox="0 0 512 512">
              <g>
                <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                <circle cx="351.5" cy="160.5" r="21.5"></circle>
              </g>
            </svg>
            <span>Instagram</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/sathyaram"
          >
            <svg viewBox="0 0 512 512">
              <path d="M256 68.4C152.4 68.4 68.4 152.4 68.4 256c0 103.6 84 187.6 187.6 187.6S443.6 359.6 443.6 256C443.6 152.4 359.6 68.4 256 68.4zM410.6 247.3c-40.3-6.6-77.3-7-111-1.1 -3.8-8.8-7.8-17.6-12-26.3 36.1-15.6 65.1-36.9 86.7-63.8C395.4 181 408.6 212.6 410.6 247.3zM350.5 133.4c-18.8 24.3-44.8 43.5-78 57.5 -15.9-29.1-34-57.5-54.5-85 12.2-3.1 24.9-4.9 38-4.9C291.6 101 324.3 113.2 350.5 133.4zM186.1 117.9c20.8 27.2 39.3 55.3 55.3 84.1 -38 11.2-83.4 16.9-135.8 17.3C116.4 175 146.3 138.1 186.1 117.9zM101 256c0-1.3 0.2-2.7 0.2-4 60.2-0.1 112.1-7 155.6-20.7 3.6 7.4 7.1 14.9 10.5 22.4 -52.8 16.5-96.4 50.4-130.3 101.3C114.5 328.2 101 293.6 101 256zM160.9 378.1c30.8-48.3 70.1-79.7 118.8-94.2 14.5 37.8 25.2 76.8 31.9 116.6 -17.3 6.7-36 10.5-55.6 10.5C220.1 411 187.2 398.6 160.9 378.1zM342 384.8c-6.9-36.8-16.9-72.8-30-107.8 29.3-4.1 61.6-3.1 96.9 3.1C402.1 323.6 377.2 361.3 342 384.8z" />
            </svg>
            <span>Dribbble</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sathyaram"
          >
            <svg viewBox="0 0 512 512">
              <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
            </svg>
            <span>Github</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/sathyaram"
          >
            <svg viewBox="0 0 512 512">
              <path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z" />
            </svg>
            <span>Codepen</span>
          </a>
        </nav>
        <div className="scroll-down">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className="contact" role="navigation">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/images/SathyaRam_Resume2020.pdf"
          >
            Resume
          </a>
          <a
            className="music"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=MXkZ-eeGs6A"
          >
            ✧
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/sathya-ram/"
          >
            LinkedIn
          </a>
          <a
            className="music"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=-4FWJmHfLC0"
          >
            ✧
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:sathyatheram@gmail.com"
          >
            Email
          </a>
        </nav>
      </div>
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
              <li>Drupal & Wordpress</li>
              <li>React & Gatsby</li>
              <li>HTML & (S)CSS</li>
              <li>JavaScript & jQuery</li>
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
      <main role="main">
        <section id="websites" className="websites">
          <div className="section-text">
            <h3 className="section-title">Website Development</h3>
            <p className="section-desc">
              I build and activate brands through cultural insight and strategic
              vision.
            </p>
          </div>
          <div className="section-content">
            <Tilt className="tilt">
              <div className="section-info">
                <div className="left">
                  <div className="title">Vilcek Foundation</div>
                  <div className="subtitle">Arts + Immigrant Foundation</div>
                  <div className="description">
                    <button onClick={closeDesc}>✕</button>
                    <p>
                      {" "}
                      Everything everything Everything everything Everything
                      everything Everything everything Everything everything
                      Everything everything Everything everything.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://vilcek.org"
                    className="link"
                  >
                    vilcek.org
                  </a>
                  <ul className="tags">
                    <li>WordPress</li>
                    <li>JavaScript</li>
                    <li>HTML/SCSS</li>
                  </ul>
                </div>
              </div>
              <div className="links">
                <a
                  target="_blank"
                  href="https://vilcek.org"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
                <button onClick={openDesc} className="read-more">
                  Read More
                </button>
              </div>
              <div className="overflow-wrapper">
                <div className="section-media">
                  <img
                    alt="me"
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/EImO-pngguru.com.png"
                  />
                </div>
              </div>
            </Tilt>
            <Tilt className="tilt">
              <div className="section-info">
                <div className="left">
                  <div className="title">Fudtruk</div>
                  <div className="subtitle">
                    Lehigh Valley's Freshest Food Truck
                  </div>
                  <div className="description">
                    <button onClick={closeDesc}>✕</button>
                    <p>
                      {" "}
                      Everything everything Everything everything Everything
                      everything Everything everything Everything everything
                      Everything everything Everything everything.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://fudtruk.lehigh.edu"
                    className="link"
                  >
                    fudtruk.lehigh.edu
                  </a>
                  <ul className="tags">
                    <li>Drupal 7</li>
                    <li>Web Design</li>
                    <li>Graphic Design</li>
                    <li>Photo + Video</li>
                  </ul>
                </div>
              </div>
              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fudtruk.lehigh.edu"
                >
                  View Website
                </a>
                <button onClick={openDesc} className="read-more">
                  Read More
                </button>
              </div>
              <div className="overflow-wrapper">
                <div className="section-media">
                  <img
                    alt="me"
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/wjlR-fudtruk-uc.png"
                  />
                </div>
              </div>
            </Tilt>
            <Tilt className="tilt">
              <div className="section-info">
                <div className="left">
                  <div className="title">HHMI</div>
                  <div className="subtitle">
                    Howard Hughes Medical Institute
                  </div>
                  <div className="description">
                    <button onClick={closeDesc}>✕</button>
                    <p>
                      {" "}
                      Everything everything Everything everything Everything
                      everything Everything everything Everything everything
                      Everything everything Everything everything.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://biointeractive.org"
                    className="link"
                  >
                    biointeractive.org
                  </a>
                  <ul className="tags">
                    <li>Drupal 8</li>
                    <li>Pattern Lab</li>
                    <li>Twig/YAML</li>
                    <li>SCSS</li>
                  </ul>
                </div>
              </div>
              <div className="links">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://biointeractive.org"
                >
                  View Website
                </a>
                <button onClick={openDesc} className="read-more">
                  Read More
                </button>
              </div>
              <div className="overflow-wrapper">
                <div className="section-media">
                  <div className="phone-screen">
                    <img
                      alt="me"
                      src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/Lx_D-ss+(2020-10-11+at+05.32.59).png"
                    />
                  </div>
                </div>
              </div>
            </Tilt>
            <Tilt className="tilt">
              <div className="section-info">
                <div className="left">
                  <div className="title">Amanda Foundation</div>
                  <div className="subtitle">
                    A Mission Driven Adoption Shelter
                  </div>
                  <div className="description">
                    <button onClick={closeDesc}>✕</button>
                    <p>
                      {" "}
                      Everything everything Everything everything Everything
                      everything Everything everything Everything everything
                      Everything everything Everything everything.
                    </p>
                  </div>
                </div>
                <div className="right">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://amandafoundation.org"
                    className="link"
                  >
                    amandafoundation.org
                  </a>
                  <ul className="tags">
                    <li>Squarespace</li>
                    <li>Web Design</li>
                    <li>(S)CSS</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
              </div>
              <div className="links">
                <a
                  href="https://amandafoundation.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Website
                </a>
                <button onClick={openDesc} className="read-more">
                  Read More
                </button>
              </div>
              <div className="overflow-wrapper">
                <div className="section-media">
                  <img
                    alt="me"
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/SxIr-dog_PNG50329.png"
                  />
                </div>
              </div>
            </Tilt>
          </div>
        </section>
        <section id="designs" className="designs">
          <div className="section-text">
            <h3 className="section-title">Web & Interface Design</h3>
            <p className="section-desc">
              I build and activate brands through cultural insight and strategic
              vision.
            </p>
          </div>
          <div className="section-content">
            <Tilt className="tilt">
              <div className="section-media">
                <img
                  alt="me"
                  src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/Es1_-FrostShot.png"
                />
              </div>
              <div className="section-info">
                <div className="title">Frost</div>
                <div className="subtitle">Financial Stock App</div>
                <p className="description">So awesome.</p>
                <div className="links">
                  <a href="/">View Designs</a>
                </div>
              </div>
            </Tilt>
            <Tilt className="tilt">
              <div className="section-media">
                <img
                  alt="me"
                  src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/WPjP-AAD.jpg"
                />
              </div>
              <div className="section-info">
                <div className="title">Lehigh AAD</div>
                <div className="subtitle">Arts, Architecture & Design</div>
                <p className="description">So awesome.</p>
                <div className="links">
                  <a
                    href="https://dribbble.com/shots/5383863-Art-Architecture-and-Design-Website"
                    rel="noopener noreferrer"
                  >
                    View Designs
                  </a>
                </div>
              </div>
            </Tilt>
            <Tilt className="tilt">
              <div className="section-media">
                <img
                  alt="me"
                  src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gV0Z-LehighEngineering.jpg"
                />
              </div>
              <div className="section-info">
                <div className="title">Lehigh Engineering</div>
                <div className="subtitle">
                  P.C Rossin College of Engineering
                </div>
                <p className="description">So awesome.</p>
                <div className="links">
                  <a
                    rel="noopener noreferrer"
                    href="https://dribbble.com/shots/5384304-Lehigh-Engineering-Website"
                  >
                    View Designs
                  </a>
                </div>
              </div>
            </Tilt>
            <Tilt className="tilt">
              <div className="section-media">
                <img
                  alt="me"
                  src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/Vzbn-GnarlyKnots.jpg"
                />
              </div>
              <div className="section-info">
                <div className="title">Gnarly Knots</div>
                <div className="subtitle">Gourmet Pretzel Company</div>
                <p className="description">So awesome.</p>
                <div className="links">
                  <a
                    rel="noopener noreferrer"
                    href="https://dribbble.com/shots/5384304-Lehigh-Engineering-Website"
                  >
                    View Designs
                  </a>
                </div>
              </div>
            </Tilt>
          </div>
        </section>
        <section id="projects" className="projects">
          <div className="section-text">
            <h3 className="section-title">Projects</h3>
            <p className="section-desc">A multi award winning photographer</p>
          </div>
          <div className="section-content">
            <Tilt className="tilt">
              <div className="tech">React</div>
              <div className="title">Exhaust Notes</div>
              <div className="subtitle">A Car Engine Sound Library</div>
              <a
                href="https://exhaustnotes.co"
                rel="noopener noreferrer"
                className="url"
              >
                exhaustnotes.co
              </a>
              <div className="laptop">
                <div className="laptop-top">
                  <img
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/fh5M-ss+(2020-10-10+at+08.07.49).jpg"
                    alt="me"
                  />
                </div>
                <div className="laptop-base"></div>
              </div>
              <div className="section-media"></div>
            </Tilt>
            <Tilt className="tilt">
              <div className="tech">React</div>
              <div className="title">That's A Cool Website</div>
              <div className="subtitle">A Cool Collection of Websites</div>
              <a
                href="https://thatsacoolwebsite.com"
                rel="noopener noreferrer"
                className="url"
              >
                thatsacoolwebsite.com
              </a>
              <div className="laptop">
                <div className="laptop-top">
                  <img
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/uYC9-ss+(2020-10-10+at+08.01.24).png"
                    alt="me"
                  />
                </div>
                <div className="laptop-base"></div>
              </div>
              <div className="section-media"></div>
            </Tilt>
            <Tilt className="tilt">
              <div className="tech">JavaScript</div>
              <div className="title">Oscars Trivia</div>
              <div className="subtitle">
                A JavaScript Quiz of 2018’s Oscars Trivia
              </div>
              <a
                href="https://oscarstrivia.com"
                rel="noopener noreferrer"
                className="url"
              >
                oscarstrivia.com
              </a>
              <div className="laptop">
                <div class="laptop-top">
                  <img
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/nidg-ss+(2020-10-10+at+08.04.26).jpg"
                    alt="me"
                  />
                </div>
                <div className="laptop-base"></div>
              </div>
              <div className="section-media"></div>
            </Tilt>
            <Tilt className="tilt">
              <div className="tech">Graphic Design</div>
              <div className="title">Poke Logos</div>
              <div className="subtitle">Pokemon as branded companies!</div>
              <a
                href="https://dribbble.com/sathyaram/projects/3425099-Pok-Logos"
                rel="noopener noreferrer"
                className="url"
              >
                View All Logos
              </a>
              <div className="section-media">
                <img
                  alt="dang"
                  src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/NzsU-wingullssurfshop.jpg"
                />
                <img
                  alt="dang"
                  src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/0At3-sunkernhome_garden.jpg"
                />
                <img
                  alt="dang"
                  src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/rBM1-houndoom.jpg"
                />
                <img
                  alt="dang"
                  src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/ThZq-combeehoney.jpg"
                />
              </div>
            </Tilt>
          </div>
        </section>
        <section id="photography" className="photography">
          <div className="section-text">
            <h3 className="section-title">Photography</h3>
            <p className="section-desc">A multi award winning photographer</p>
          </div>
          <div className="section-content">
            <Tilt className="tilt">
              <h5>Portraits</h5>
              <img alt="me" src="https://sathyaram.com/images/chance.jpg" />
            </Tilt>
            <Tilt className="tilt">
              <h5>Lifestyle</h5>

              <img
                alt="me"
                src="https://sathyaram.com/images/rachel-americana.jpg"
              />
            </Tilt>
            <Tilt className="tilt">
              <h5>Cosplay</h5>
              <img
                alt="me"
                src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/gEp3-DSC00985.jpg"
              />
            </Tilt>
            <Tilt className="tilt">
              <h5>Studio</h5>
              <img
                alt="me"
                src="https://sathyaram.com/images/photography/RAM_0645.jpg"
              />
            </Tilt>
            <Tilt className="tilt">
              <h5>Space</h5>
              <img
                alt="me"
                src="https://live.staticflickr.com/577/22402285915_8e46315458_n.jpg"
              />
            </Tilt>
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonial-text">
            <h4>Real folks. Real results.</h4>
            <p>
              I've worked with many brands and it seems people like my work.
            </p>
          </div>
          <div className="testimonial-content">
            <div className="testimonial">
              <div className="quote">
                <div className="quote-text">
                  Sathya delivered on his skill set, he gave us the exact kind
                  of photos we wanted.
                </div>
                <div className="quote-cite">Thaisi Da Silva</div>
                <div className="quote-role">Director, Reporting Labs</div>
                <div className="quote-company">PBS NewsHour</div>
              </div>
              <span>PBS NewsHour</span>
              <svg viewBox="0 0 400 358">
                <g>
                  <path
                    d="M392.8,52.8c-0.7-6.5-2.4-12.3-4.6-17.4c-4.4-10.1-11.2-18.2-19.7-24.3C360,4.9,349.6,0.6,335.7,0h-3.1v0
		c-9.1,0.3-16.7,2.4-23.3,5.5c-6.6,3.1-12.1,7.1-16.9,11.9c-4.8,4.8-8.8,10.4-11.8,16.9c-3.1,6.6-5.1,14.3-5.4,23.4v3.1
		c0.6,13.9,4.9,24.4,11,32.9c6.1,8.6,14.2,15.3,24.2,19.7c5,2.2,10.8,4,17.3,4.7c6.9,0.7,14.3,0.2,20.1-1.2
		c11.7-2.9,20.8-8.5,28.1-15.8c7.3-7.3,13-16.5,15.7-28.2C392.9,66.9,393.6,59.7,392.8,52.8z M348,72c-1.4,3-4.4,4.1-9.1,3.8v16.8
		h-23.4V75.1c-6.6-1.1-11.1-4.1-14.4-8.6c-3.2-4.4-5.1-10.9-4.1-18.3c0.9-6.6,4-11.5,8-15c3.1-2.7,6.9-4.7,11.6-5.7
		c4.1-0.9,9.4-0.7,14.6-0.7l9.3,0c4.8,11,9.7,21.8,14.5,32.8h-6.3v6.5C348.6,68.4,348.7,70.4,348,72z M367.4,72
		c-1.4,3-4.1,4.2-9,3.8v16.8h-9.3V75.8c4.4,0,7.7-0.7,8.8-3.9c1.2-3.2,0.2-8.1,0.5-12.2h6.5c-4.6-10.9-9.5-21.8-14.3-32.7v0
		c0,0-0.1-0.1,0-0.1h9.3c4.8,10.9,9.6,21.9,14.3,32.8H368v6.4C368,68.3,368.1,70.4,367.4,72z"
                  />
                  <path
                    d="M335.2,43.2L335.2,43.2c-1.7,0.2-3.1,1-3.9,2c-0.9,1-1.6,2.5-1.5,4.3c0.1,1.8,0.8,3.1,1.8,4.1c1,0.9,2.4,1.7,4.2,1.7
		c3,0,5.8-2.3,6-5.5c0.1-1.8-0.4-3.2-1.1-4.2C339.7,44.3,337.7,43,335.2,43.2z"
                  />
                </g>
                <g>
                  <path
                    d="M40.4,3.8H0.1v109H24V70.3h17.5c22.8,0,40.2-7.9,40.2-33.4C81.7,11.1,62.9,3.8,40.4,3.8z M39.9,50H24V24.2h12.3
		c9.2,0,20.5,1.5,20.5,12.8C56.8,47.1,48.4,50,39.9,50z"
                  />
                </g>
                <g>
                  <path
                    d="M154,55.9v-0.3c11.2-3.5,18.7-11.9,18.7-24C172.7,7.8,152,3.8,133,3.8H92.5v109H137c19.3,0,40.8-7.5,40.8-30.3
		C177.8,68.3,168.3,57.7,154,55.9z M116.5,24.2h16.3c7.5,0,16.1,2.3,16.1,11.4c0,8.8-7.7,11.9-15,11.9h-17.3V24.2z M137.9,92.5
		h-21.5V67.7h18.1c7.8,0,19.3,1.7,19.3,12C153.9,89.3,145.4,92.5,137.9,92.5z"
                  />
                </g>
                <path
                  className="st0"
                  d="M244.5,30.5c-3.8-4.9-11.5-7.2-17.3-7.2c-6.7,0-16.1,3.1-16.1,11.2c0,19.9,50,7.1,50,45.3
	c0,24.3-19.5,35.9-41.9,35.9c-14,0-26.2-4.2-36.5-13.7l17-18.8c4.9,6.5,12.9,10.3,20.9,10.3c7.8,0,16.6-3.7,16.6-11.4
	c0-20-50.9-9.2-50.9-45.6c0-23.2,20.1-35.4,41.4-35.4c12.3,0,24.1,3.2,33.3,11.4L244.5,30.5z"
                />
                <polygon
                  id="polygon6"
                  className="st0"
                  points="0,132.2 30.5,132.2 73.7,203.2 74,203.2 74,132.2 96.4,132.2 96.4,234.4 67.1,234.4 
	22.7,161.7 22.4,161.7 22.4,234.4 0,234.4 "
                />
                <polygon
                  id="polygon8"
                  className="st0"
                  points="109.4,132.2 178.5,132.2 178.5,153 131.8,153 131.8,172.1 175.9,172.1 175.9,192.8 
	131.8,192.8 131.8,213.6 181.1,213.6 181.1,234.4 109.4,234.4 "
                />
                <polygon
                  id="polygon10"
                  className="st0"
                  points="256.3,163.7 256,163.7 233.6,234.4 214.3,234.4 184.1,132.2 208.6,132.2 224.8,197.7 
	225.1,197.7 246.4,132.2 267.2,132.2 288.3,199.5 288.6,199.5 305.7,132.2 328.4,132.2 298.7,234.4 278.7,234.4 "
                />
                <path
                  id="path12"
                  className="st0"
                  d="M384.5,157.2c-3.6-4.6-10.8-6.8-16.2-6.8
	c-6.3,0-15.1,2.9-15.1,10.5c0,18.6,46.9,6.6,46.9,42.4c0,22.8-18.3,33.6-39.2,33.6c-13.1,0-24.6-3.9-34.2-12.8l16-17.6
	c4.6,6.1,12.1,9.7,19.5,9.7c7.3,0,15.5-3.5,15.5-10.7c0-18.8-47.7-8.7-47.7-42.7c0-21.8,18.8-33.2,38.8-33.2
	c11.5,0,22.6,3,31.2,10.7L384.5,157.2z"
                />
                <polygon
                  id="polygon14"
                  className="st0"
                  points="0,253.3 22.4,253.3 22.4,291.4 66,291.4 66,253.3 88.4,253.3 88.4,355.4 66,355.4 
	66,311.3 22.4,311.3 22.4,355.4 0,355.4 "
                />
                <g>
                  <path
                    d="M151.5,250.7c-31.8,0-54.9,20.9-54.9,53.7s23.1,53.7,54.9,53.7c31.8,0,54.9-20.9,54.9-53.7
		C206.4,271.6,183.3,250.7,151.5,250.7z M151.5,337.3c-19.1,0-31.6-13.9-31.6-32.9c0-19,12.5-32.9,31.6-32.9
		c19.1,0,31.6,13.8,31.6,32.9C183.1,323.4,170.6,337.3,151.5,337.3z"
                  />
                </g>
                <path
                  className="st0"
                  d="M300.1,316.1c0,24.1-14.7,42-42.8,42c-28.3,0-43-17.9-43-42v-62.8h22.4v61.9c0,12.6,8.6,22.1,20.6,22.1
	c11.8,0,20.4-9.5,20.4-22.1v-61.9h22.4V316.1z"
                />
                <g>
                  <path
                    d="M367.9,312.3c14.4-2.6,22-13.7,22-28c0-23.8-17.5-31-38.4-31h-39.4v102.1h22.4v-40.8h11.1l21.3,40.8h26.9L367.9,312.3z
		 M347.8,295.6h-13.2v-23.2h14.7c8.2,0,17.4,1.6,17.4,11.8C366.7,295.3,356,295.6,347.8,295.6z"
                  />
                </g>
              </svg>
            </div>
            <div className="testimonial">
              <div className="quote">
                <div className="quote-text">
                  Sathya delivered on his skill set, he gave us the exact kind
                  of photos we wanted.
                </div>
                <div className="quote-cite">David Joseph</div>
                <div className="quote-role">Executive Director</div>
                <div className="quote-company">Sodexo</div>
              </div>
              <span>Sodexo</span>
              <svg viewBox="0 0 162 53">
                <path
                  d="M77.1,33l-1.8,8.9c-0.8,3.6-3,6-7.4,6c-5.1,0-6.5-3.2-5.4-7.6C64.1,34,69.3,32.1,77.1,33 M85.2,20.2l-5.4,0.3L78,29.3
	c-2.1-0.1-2.7-0.1-5.2-0.1c-7.7,0-14.4,3.2-16.1,10.8c-1.6,6.8,2.3,12.1,10.7,12.1c8.6,0,12.4-4.5,13.8-10.9L85.2,20.2z"
                />
                <path
                  d="M26,33.4c-8-0.7-14.9-0.1-15,2.6c-0.2,4.1,13.2,0.5,12.9,8c-0.4,11-18.9,8.5-23.5,7.1l0.8-3.3c7.9,1.3,16.3,1.4,16.4-3
	c0.2-4.6-13.2-0.5-12.9-8c0.2-5.6,8.6-8.6,22.3-6.6L26,33.4"
                />
                <path
                  d="M47.6,40.9c-1.2,4.6-4.8,7.5-9.1,7.5c-4.5,0-6.6-2.6-5.4-7.5c1.2-4.6,4.8-7.7,9.2-7.7C46.6,33.2,48.7,36.3,47.6,40.9
	 M43,29.4c-7.9,0-14.3,4.6-15.9,11.4c-1.6,6.8,2.7,11.4,10.6,11.4c7.9,0,14.3-4.6,15.9-11.4C55.2,34,50.9,29.4,43,29.4z"
                />
                <path d="M134.8,52.2h-6.9c-4.2-3.9-12.2-13-18.1-22.6h5.1C120.4,37.4,134.8,52.2,134.8,52.2" />
                <polyline
                  points="142,7.4 145.2,0.8 146.1,7.5 152.6,5.2 148,11 152.9,14.8 146.4,15.3 146,22.3 142.4,17.2 137,22.1 139,15.2 
	132.7,14.3 138.9,10.8 136.3,4.8 142,7.4 "
                />
                <path
                  d="M155.5,40.9c-1.2,4.7-4.9,7.6-9.3,7.6c-4.6,0-6.7-2.7-5.4-7.6c1.2-4.7,4.9-7.8,9.3-7.8C154.5,33.1,156.6,36.3,155.5,40.9
	 M150.8,29.3c-8.1,0-14.6,4.7-16.2,11.6c-1.6,7,2.7,11.6,10.8,11.6c8.1,0,14.6-4.7,16.2-11.6C163.2,34,158.8,29.3,150.8,29.3z"
                />
                <path d="M104.5,50.3c13-7.2,24.4-18.4,32.4-28C131.2,40.4,117.2,50.1,104.5,50.3" />
                <path
                  d="M99.4,32.8c2.5,0,3.9,0.9,3.9,2.6c0,4.6-9,4.3-12.9,3.5C91.7,35.5,94.8,32.8,99.4,32.8 M108.6,35.2c0-3.3-2.7-5.8-8.7-5.8
	c-9.8,0-16.1,6.3-16.1,14.2c0,5.1,4.2,9.3,11.9,9.3c5.3,0,8.8-2.6,8.8-2.6c-6.7,0.7-15,0-15-7.2c0-0.3,0-0.6,0-0.9
	C98.7,44.1,108.6,41.8,108.6,35.2z"
                />
              </svg>
            </div>
            <div className="testimonial">
              <div className="quote">
                <div className="quote-text">
                  Sathya delivered on his skill set, he gave us the exact kind
                  of photos we wanted.
                </div>
                <div className="quote-cite">Greg Skinner</div>
                <div className="quote-role">
                  Assistant Director of Enterprise Systems
                </div>
                <div className="quote-company">Lehigh University</div>
              </div>
              <span>Lehigh University</span>
              <svg viewBox="0 0 256.2 71.3">
                <path
                  className="st0"
                  d="M11.4,54.2v0.6l0.8,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4v5.9c0,3-1.8,3.8-3.8,3.8
	c-2.4,0-3.8-0.8-3.8-3.4v-6.3c0-0.7,0-1.2,0.2-1.4c0.1-0.2,0.3-0.3,0.8-0.3l0.9-0.1v-0.6c-1,0-1.8,0.1-2.7,0.1c-0.9,0-1.8,0-2.7-0.1
	v0.6L3,54.9c0.4,0,0.7,0.1,0.8,0.3C3.9,55.4,4,55.9,4,56.6V63c0,3.4,1.8,4.3,5,4.3c3.7,0,5.2-1.6,5.2-5.5v-5.3c0-0.7,0-1.2,0.2-1.4
	c0.1-0.2,0.3-0.2,0.8-0.3l0.8-0.1v-0.6c-0.8,0-1.5,0.1-2.2,0.1C12.9,54.3,12.2,54.2,11.4,54.2"
                />
                <path
                  className="st0"
                  d="M42.2,54.2v0.6l0.8,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4V65h-0.1l-8.8-10.8c-0.3,0-0.7,0.1-1,0.1
	c-0.7,0-1.4,0-2.2-0.1v0.6l0.8,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4
	c-0.1,0.2-0.3,0.2-0.8,0.3l-0.8,0.1V67c0.7,0,1.5-0.1,2.1-0.1c0.7,0,1.4,0,2.2,0.1v-0.6l-0.8-0.1c-0.4,0-0.7-0.1-0.8-0.3
	c-0.1-0.2-0.2-0.7-0.2-1.4v-8.5l0,0L43.2,67l1.7,0.3c0-0.2-0.1-0.5-0.1-0.7V56.5c0-0.7,0-1.2,0.2-1.4c0.1-0.2,0.3-0.2,0.8-0.3
	l0.8-0.1v-0.6c-0.8,0-1.5,0.1-2.2,0.1C43.7,54.3,42.9,54.2,42.2,54.2"
                />
                <path
                  className="st0"
                  d="M62.7,54.2v0.6l0.9,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4
	c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1v-0.6l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3
	c-0.1-0.2-0.2-0.7-0.2-1.4v-8.2c0-0.7,0-1.2,0.2-1.4c0.1-0.2,0.3-0.3,0.8-0.3l0.9-0.1V54c-1,0-1.8,0.1-2.7,0.1
	C64.5,54.3,63.7,54.2,62.7,54.2"
                />
                <path
                  className="st0"
                  d="M93,54.2v0.6l1,0.1c0.4,0,0.6,0.1,0.6,0.5c0,0.2-0.1,0.4-0.2,0.7L91,64.8l-3.6-9.3c0-0.1,0-0.1,0-0.2
	c0-0.3,0.3-0.4,0.6-0.4l1-0.1v-0.6c-0.8,0-1.6,0.1-2.4,0.1s-1.6,0-2.4-0.1v0.6l0.7,0.1c0.3,0,0.6,0.2,0.8,0.8l3.4,8.5
	c0.4,0.9,0.8,1.9,1.1,3h0.9c0.3-1.1,0.7-2.2,1.2-3.2l3.2-7.7c0.4-0.9,0.6-1.3,1-1.3l0.6-0.1v-0.6c-0.7,0-1.3,0.1-2,0.1
	C94.3,54.3,93.6,54.2,93,54.2"
                />
                <path
                  className="st0"
                  d="M121.9,66c-0.3,0.2-2.2,0.2-3.7,0.2c-0.5,0-1,0-1.5-0.1V61c0.6-0.1,1.2-0.1,2.1-0.1c1.1,0,1.7,0.1,1.9,0.2
	c0.1,0.1,0.1,0.2,0.1,0.5l0.1,1.1h0.6c0-0.7-0.1-1.4-0.1-2c0-0.7,0-1.4,0.1-2.1h-0.6l-0.1,1c0,0.2-0.1,0.4-0.1,0.5
	c-0.2,0.1-0.8,0.2-1.9,0.2c-0.9,0-1.5,0-2.1-0.1v-4.9c0.5-0.3,1-0.3,1.5-0.3c1.2,0,2.6,0,3.6,0.4c0.1,0.1,0.2,0.3,0.2,0.5v1.2h0.6
	c0-0.9,0.1-2,0.3-2.8c-0.7,0-1.5-0.1-2.4-0.1c-1,0-2.7,0.1-4.3,0.1c-0.5,0-1,0-1.6,0c-0.5,0-1,0-1.5,0v0.6L114,55
	c0.4,0,0.7,0.1,0.8,0.3s0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4c-0.1,0.2-0.3,0.2-0.8,0.3l-0.7,0.1V67c0.7,0,1.3-0.1,2-0.1
	c1.1,0,2.6,0,4,0.1h0.6c1.2,0,2.3,0,3-0.1c0-1,0.1-2.1,0.3-3h-0.6C122.4,65,122.2,65.8,121.9,66"
                />
                <path
                  className="st0"
                  d="M146.4,60.5c1.8-0.4,3.6-1.5,3.6-3.5c0-1.3-0.7-2.8-3.5-2.8h-0.3c-1.1,0-2.1,0.1-3.2,0.1c-1.1,0-2.1,0-3.1-0.1
	v0.6l0.8,0.1c0.4,0,0.7,0.1,0.8,0.3s0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67
	c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1v-0.6l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3c-0.1-0.2-0.2-0.7-0.2-1.4V55c0.5-0.1,1-0.2,1.9-0.2
	c1.4,0,2.9,0.5,2.9,2.5c0,1.4-1.1,2.3-2.4,2.6c-0.4,0.1-0.8,0.1-1.1,0.1c-0.2,0-0.3,0-0.5,0l-0.1,0.2c0.3,0.4,0.7,0.7,1,1.1l3.4,4.5
	c0.2,0.3,0.5,0.6,0.8,1c0.4,0,0.8-0.1,1.2-0.1s0.8,0,1.3,0.1v-0.6c-0.4,0-0.8-0.1-1.1-0.5L146.4,60.5z"
                />
                <path
                  className="st0"
                  d="M172.1,59.6c-2.3-0.3-3-1-3-2.3c0-1.8,1.4-2.7,2.7-2.7c0.7,0,1.5,0.1,2,0.4c0.7,0.4,0.8,0.6,0.8,1.1l0.1,1h0.6
	c0-0.9,0.1-1.7,0.3-2.6c-0.8-0.3-1.9-0.8-3.3-0.8c-2.2,0-4.7,1.3-4.7,4.2c0,1.9,1.1,2.8,4,3.1c1.9,0.2,3.2,0.7,3.2,2.5
	c0,1.8-1.6,2.8-3.3,2.8c-1.4,0-2.9-0.7-3-1.5l-0.1-1.2h-0.6v0.7c0,0.7,0,1.4-0.1,2.1c0.6,0.3,1.9,0.7,3.1,0.7c2.7,0,5.5-1.5,5.5-4.6
	C176.3,60.5,174.7,59.9,172.1,59.6"
                />
                <path
                  className="st0"
                  d="M192.6,54.2v0.6l0.9,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4
	c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1v-0.6l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3
	c-0.1-0.2-0.2-0.7-0.2-1.4v-8.2c0-0.7,0-1.2,0.2-1.4c0.1-0.2,0.3-0.3,0.8-0.3l0.9-0.1V54c-1,0-1.8,0.1-2.7,0.1
	C194.4,54.3,193.5,54.2,192.6,54.2"
                />
                <path
                  className="st0"
                  d="M220.8,54.3h-2.7c-1.3,0-2.6-0.1-4-0.1c0.1,1,0.1,2,0.1,3h0.6l0.1-1.4c0-0.4,0.2-0.6,0.7-0.6h2.8
	c0.1,0.6,0.1,1.1,0.1,1.8v7.8c0,0.7,0,1.2-0.2,1.4c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1
	v-0.5l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3c-0.1-0.2-0.2-0.7-0.2-1.4v-7.8c0-0.7,0-1.3,0.1-1.8h2.8c0.6,0,0.7,0.2,0.7,0.6l0.1,1.4h0.6
	c0-1,0-2,0.1-3c-0.7,0-1.3,0-2,0C222.1,54.3,221.5,54.3,220.8,54.3"
                />
                <path
                  className="st0"
                  d="M249.1,57.7l-1.9,3l-2.6-4.8c-0.2-0.4-0.5-0.8-0.8-1.2s-0.5-0.7-0.9-0.7h-0.1l-2.1,0.4V55l0.5,0.1
	c0.5,0,1.4,0.7,2.3,2.4l2.3,4c0.1,0.2,0.2,0.4,0.2,0.7v2.6c0,0.7,0,1.2-0.2,1.4c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67
	c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1v-0.5l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3c-0.1-0.2-0.2-0.7-0.2-1.4v-2.4c0-0.4,0-0.9,0.3-1.4
	c0.8-1.6,3-4.7,4.5-6.5v-0.3h-1.5C250.5,55.3,249.8,56.5,249.1,57.7"
                />
                <path
                  className="st0"
                  d="M36.4,35.4h-2l-0.8,3.1c-0.3,1.3-0.7,3.5-1.3,4c-1.1,1-8.7,1.2-13.9,1.2c-1.7,0-3.5-0.1-5.3-0.5V10.4
	c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2c-3.1,0-6-0.1-9.3-0.2v1.9l3,0.2
	c1.5,0.1,2.3,0.3,2.6,0.9C6.9,6.4,7.1,8,7.1,10.4v29.8c0,1.7-0.5,3.1-1.6,3.7l-1.9,1v1.4c1.6-0.1,3.2-0.2,5.3-0.2
	c3.9,0,8,0.1,13.7,0.2h1.9c4,0,8-0.1,10.4-0.2C35.5,43,36,38.8,36.4,35.4"
                />
                <path
                  className="st0"
                  d="M69.4,42.9c-1.1,0.6-7.5,0.8-12.7,0.8c-1.7,0-3.5-0.1-5.3-0.5V25.6c1.9-0.2,4.3-0.2,7.3-0.2
	c3.8,0,6,0.3,6.7,0.7c0.3,0.2,0.4,0.8,0.5,1.6l0.3,3.7h1.9c-0.1-2.3-0.2-4.6-0.2-7c0-2.3,0.1-4.7,0.2-7.3h-1.9l-0.3,3.3
	c-0.1,0.8-0.2,1.4-0.5,1.6c-0.7,0.4-2.8,0.7-6.7,0.7c-3,0-5.3-0.1-7.3-0.2V5.8c1.8-0.4,3.6-0.5,5.3-0.5c4,0,9,0.1,12.3,1.3
	c0.5,0.2,0.6,0.9,0.6,1.7v4.1h2.2c0-3.2,0.3-6.8,1-9.5c-2.5-0.1-5.3-0.2-8.1-0.2c-3.6,0-9.4,0.2-14.8,0.2c-1.8,0-3.6-0.1-5.3-0.1
	c-1.8-0.1-3.5-0.1-5.3-0.1v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v28.2c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.8-2.6,0.9L40,44.4v1.9c2.3-0.1,4.3-0.2,6.7-0.2c3.9,0,8.9,0.1,13.7,0.2h1.9c4,0,8-0.1,10.4-0.2
	c0-3.4,0.4-7.3,1-10.3h-2.2C71.2,39.6,70.4,42.4,69.4,42.9"
                />
                <path
                  className="st0"
                  d="M109.5,2.7v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v11.2c-0.8,0.1-2.4,0.1-5.2,0.1H95.8
	c-2.8,0-4.5-0.1-5.2-0.1V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	c-3.1,0-6-0.1-9.3-0.2v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v28.2c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7v-14c0.8-0.1,2.4-0.1,5.2-0.1h14.7c2.8,0,4.5,0.1,5.2,0.1v14c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	C115.7,2.9,112.8,2.8,109.5,2.7"
                />
                <path
                  className="st0"
                  d="M133.4,2.7v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v28.2c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	C139.6,2.9,136.6,2.8,133.4,2.7"
                />
                <path
                  className="st0"
                  d="M192.4,29.3c-2.5,0-5.1-0.1-7.7-0.1V31l5.2,0.4c1.6,0.1,2.1,0.8,2.1,2.2V40c0,1.6-0.1,1.9-0.3,2.6
	c-0.4,1.1-4,2.2-8.8,2.2c-12.9,0-20.2-9-20.2-21.5c0-11.2,6.2-19,18.2-19c4.1,0,6.8,0.4,8.8,1.1c3,1.1,5.2,2.1,5.2,5v3.3h1.9
	c0-3.3,0.5-6.6,1.3-9.5c-2.9-0.8-7.8-2.6-15.6-2.6c-15.1,0-26.5,8.9-26.5,22.7c0,15.8,11.3,23.1,25.3,23.1c4.3,0,11.1-1.6,16.5-3.2
	V33.7c0-1.8,0-2.1,0.7-2.3l1.8-0.6l-0.2-1.6C197.6,29.2,195,29.3,192.4,29.3"
                />
                <path
                  className="st0"
                  d="M235.3,2.7v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v11.2c-0.8,0.1-2.4,0.1-5.2,0.1h-14.7
	c-2.8,0-4.5-0.1-5.2-0.1V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	c-3.1,0-6-0.1-9.3-0.2v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v28.2c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7v-14c0.8-0.1,2.4-0.1,5.2-0.1h14.7c2.8,0,4.5,0.1,5.2,0.1v14c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	C241.5,2.9,238.6,2.8,235.3,2.7"
                />
              </svg>
            </div>
            <div className="testimonial">
              <div className="quote">
                <div className="quote-text">
                  Sathya delivered on his skill set, he gave us the exact kind
                  of photos we wanted.
                </div>
                <div className="quote-cite">Emily Farr</div>
                <div className="quote-role">Agency Director</div>
                <div className="quote-company">
                  South Carolina Licensing Board
                </div>
              </div>
              <span>South Carolina</span>
              <svg viewBox="0 0 87 107.9">
                <g>
                  <g transform="translate(0 .717)">
                    <defs>
                      <filter
                        id="Adobe_OpacityMaskFilter"
                        filterUnits="userSpaceOnUse"
                        x="3.6"
                        y="3.3"
                        width="80.3"
                        height="64.9"
                      >
                        <feColorMatrix
                          type="matrix"
                          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                        />
                      </filter>
                    </defs>
                    <mask
                      maskUnits="userSpaceOnUse"
                      x="3.6"
                      y="3.3"
                      width="80.3"
                      height="64.9"
                      id="b_2_"
                    >
                      <g className="st0">
                        <path
                          id="a_2_"
                          class="st1"
                          d="M-30,134.2h213.7V0.1H-30V134.2z"
                        />
                      </g>
                    </mask>
                    <path
                      className="st2"
                      d="M11,10.6h24c-0.5-1.2-0.7-2.4-0.7-3.7c0-1.3,0.3-2.5,0.7-3.7H3.6v57.3l7.4-8.7L11,10.6L11,10.6z M52.6,10.6
			h24v51.7l7.4,5.9V3.3H52.6c0.5,1.2,0.7,2.4,0.7,3.7C53.3,8.2,53.1,9.4,52.6,10.6"
                    />
                    <defs>
                      <filter
                        id="Adobe_OpacityMaskFilter_1_"
                        filterUnits="userSpaceOnUse"
                        x="1.8"
                        y="0.1"
                        width="82.2"
                        height="111.3"
                      >
                        <feColorMatrix
                          type="matrix"
                          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                        />
                      </filter>
                    </defs>
                    <mask
                      maskUnits="userSpaceOnUse"
                      x="1.8"
                      y="0.1"
                      width="82.2"
                      height="111.3"
                      id="b_5_"
                    >
                      <g className="st3">
                        <path
                          id="a_5_"
                          className="st1"
                          d="M-30,134.2h213.7V0.1H-30V134.2z"
                        />
                      </g>
                    </mask>
                    <path
                      className="st4"
                      d="M49.2,3.2c-1.2-1.9-3.3-3.1-5.6-3.2c1.4,1.1,2.3,2.8,2.3,4.6c0,3.2-2.6,5.8-5.8,5.9c0,0-0.1,0-0.1,0
			c0,0-0.1,0-0.1,0c-0.9,0-1.8-0.2-2.6-0.7c0.1,0.2,0.2,0.4,0.4,0.7c1.3,2,3.4,3.2,5.8,3.2c2.3,0,4.5-1.2,5.8-3.2
			C50.7,8.4,50.7,5.5,49.2,3.2 M43.9,101.3L11.9,70l8-9.4l18.2,0l6.5,6.6l17.2,0l10.8,8.7L43.9,101.3L43.9,101.3z M64.4,59.8
			l-16.7,0l-6.5-6.6l-24.7,0.1L1.8,70.5l41.8,40.9L84,75.6l0,0C84.1,75.5,64.4,59.8,64.4,59.8z M22.1,22.6h-4.6v20.8h15v-4.2H22.1
			V22.6z M39.3,22.6h-4.6v20.8h15v-4.2H39.3V22.6z M64.8,29.8c0,1.8-1.3,2.9-3.5,2.9h-4.7v-6h4.6C63.4,26.7,64.8,27.7,64.8,29.8
			L64.8,29.8L64.8,29.8z M69.5,29.5L69.5,29.5c0-2-0.6-3.7-1.8-4.8c-1.4-1.4-3.4-2.1-6.1-2.1H52v20.8h4.6v-6.7h3.6l4.5,6.7h5.4
			L65,36C67.7,35,69.5,32.9,69.5,29.5L69.5,29.5z"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </section>
        <div id="circle">
          <svg viewBox="0 0 300 300">
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use href="#circlePath" fill="none"></use>
              <text>
                <textPath href="#circlePath">
                  Check Me Out · Across The Internet ·
                </textPath>
              </text>
            </g>
          </svg>
        </div>
        <section className="social-media-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/sathya.ram"
          >
            <div className="social-wrapper">
              <div className="social-text">
                <h5>Instagram</h5>
                <span>@sathya.ram</span>
              </div>
              <div className="social-images">
                <div className="social-image">
                  <img
                    alt="jack"
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/DpLw-120138295_216234946509729_2571446367039451377_n.jpg"
                  />
                </div>
                <div className="social-image">
                  <img
                    alt="bossjane"
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/dEKD-84157797_528666187744043_164292724461882664_n.jpg"
                  />{" "}
                </div>
                <div className="social-image">
                  <img
                    alt="daniel"
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/LoIS-93616582_228170555080866_5086578158414777207_n.jpg"
                  />{" "}
                </div>
                <div className="social-image">
                  <img
                    alt="katrina"
                    src="https://uploads.codesandbox.io/uploads/user/e07fd652-6bd5-4bc0-a542-41d98d7af4e0/nD2e-82457871_553548395242427_6843821579115814330_n.jpg"
                  />{" "}
                </div>
              </div>
            </div>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://dribbble.com/sathyaram"
          >
            <div class="social-wrapper">
              <div className="social-text">
                <h5>Dribbble</h5>
                <span>sathyaram</span>
              </div>
              <div className="social-images">
                <div className="social-image">
                  {" "}
                  <img
                    alt="me"
                    src="https://sathyaram.com/images/graphic/sexyad1.jpg"
                  />
                </div>
                <div className="social-image">
                  <img
                    alt="me"
                    src="https://sathyaram.com/images/graphic/shake.jpg"
                  />
                </div>
                <div className="social-image">
                  {" "}
                  <img
                    alt="me"
                    src="https://sathyaram.com/images/graphic/lehighracing.jpg"
                  />
                </div>
                <div className="social-image">
                  {" "}
                  <img
                    alt="me"
                    src="https://sathyaram.com/images/graphic/indify.jpg"
                  />
                </div>
              </div>
            </div>
          </a>
        </section>
      </main>
      <footer role="contentinfo">
        <Tilt className="freelance">
          <a href="mailto:sathyatheram@gmail.com">
            <div className="freelance-text">
              <h5>Let's work together.</h5>
              <p>I'm available to make you a website, or take photos.</p>
            </div>
            <button>Let's Chat!</button>
          </a>
        </Tilt>
        <div className="villain">
          <h4>Washington, D.C.</h4>
          <a className="email" href="mailto:sathyatheram@gmail.com">
            sathyatheram@gmail.com
          </a>
          <nav className="social-media-footer" role="navigation">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://instagram.com/sathya.ram"
            >
              <svg viewBox="0 0 512 512">
                <g>
                  <path d="M256 109.3c47.8 0 53.4 0.2 72.3 1 17.4 0.8 26.9 3.7 33.2 6.2 8.4 3.2 14.3 7.1 20.6 13.4 6.3 6.3 10.1 12.2 13.4 20.6 2.5 6.3 5.4 15.8 6.2 33.2 0.9 18.9 1 24.5 1 72.3s-0.2 53.4-1 72.3c-0.8 17.4-3.7 26.9-6.2 33.2 -3.2 8.4-7.1 14.3-13.4 20.6 -6.3 6.3-12.2 10.1-20.6 13.4 -6.3 2.5-15.8 5.4-33.2 6.2 -18.9 0.9-24.5 1-72.3 1s-53.4-0.2-72.3-1c-17.4-0.8-26.9-3.7-33.2-6.2 -8.4-3.2-14.3-7.1-20.6-13.4 -6.3-6.3-10.1-12.2-13.4-20.6 -2.5-6.3-5.4-15.8-6.2-33.2 -0.9-18.9-1-24.5-1-72.3s0.2-53.4 1-72.3c0.8-17.4 3.7-26.9 6.2-33.2 3.2-8.4 7.1-14.3 13.4-20.6 6.3-6.3 12.2-10.1 20.6-13.4 6.3-2.5 15.8-5.4 33.2-6.2C202.6 109.5 208.2 109.3 256 109.3M256 77.1c-48.6 0-54.7 0.2-73.8 1.1 -19 0.9-32.1 3.9-43.4 8.3 -11.8 4.6-21.7 10.7-31.7 20.6 -9.9 9.9-16.1 19.9-20.6 31.7 -4.4 11.4-7.4 24.4-8.3 43.4 -0.9 19.1-1.1 25.2-1.1 73.8 0 48.6 0.2 54.7 1.1 73.8 0.9 19 3.9 32.1 8.3 43.4 4.6 11.8 10.7 21.7 20.6 31.7 9.9 9.9 19.9 16.1 31.7 20.6 11.4 4.4 24.4 7.4 43.4 8.3 19.1 0.9 25.2 1.1 73.8 1.1s54.7-0.2 73.8-1.1c19-0.9 32.1-3.9 43.4-8.3 11.8-4.6 21.7-10.7 31.7-20.6 9.9-9.9 16.1-19.9 20.6-31.7 4.4-11.4 7.4-24.4 8.3-43.4 0.9-19.1 1.1-25.2 1.1-73.8s-0.2-54.7-1.1-73.8c-0.9-19-3.9-32.1-8.3-43.4 -4.6-11.8-10.7-21.7-20.6-31.7 -9.9-9.9-19.9-16.1-31.7-20.6 -11.4-4.4-24.4-7.4-43.4-8.3C310.7 77.3 304.6 77.1 256 77.1L256 77.1z"></path>
                  <path d="M256 164.1c-50.7 0-91.9 41.1-91.9 91.9s41.1 91.9 91.9 91.9 91.9-41.1 91.9-91.9S306.7 164.1 256 164.1zM256 315.6c-32.9 0-59.6-26.7-59.6-59.6s26.7-59.6 59.6-59.6 59.6 26.7 59.6 59.6S288.9 315.6 256 315.6z"></path>
                  <circle cx="351.5" cy="160.5" r="21.5"></circle>
                </g>
              </svg>
              <span>Instagram</span>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/sathyaram"
            >
              <svg viewBox="0 0 512 512">
                <path d="M256 68.4C152.4 68.4 68.4 152.4 68.4 256c0 103.6 84 187.6 187.6 187.6S443.6 359.6 443.6 256C443.6 152.4 359.6 68.4 256 68.4zM410.6 247.3c-40.3-6.6-77.3-7-111-1.1 -3.8-8.8-7.8-17.6-12-26.3 36.1-15.6 65.1-36.9 86.7-63.8C395.4 181 408.6 212.6 410.6 247.3zM350.5 133.4c-18.8 24.3-44.8 43.5-78 57.5 -15.9-29.1-34-57.5-54.5-85 12.2-3.1 24.9-4.9 38-4.9C291.6 101 324.3 113.2 350.5 133.4zM186.1 117.9c20.8 27.2 39.3 55.3 55.3 84.1 -38 11.2-83.4 16.9-135.8 17.3C116.4 175 146.3 138.1 186.1 117.9zM101 256c0-1.3 0.2-2.7 0.2-4 60.2-0.1 112.1-7 155.6-20.7 3.6 7.4 7.1 14.9 10.5 22.4 -52.8 16.5-96.4 50.4-130.3 101.3C114.5 328.2 101 293.6 101 256zM160.9 378.1c30.8-48.3 70.1-79.7 118.8-94.2 14.5 37.8 25.2 76.8 31.9 116.6 -17.3 6.7-36 10.5-55.6 10.5C220.1 411 187.2 398.6 160.9 378.1zM342 384.8c-6.9-36.8-16.9-72.8-30-107.8 29.3-4.1 61.6-3.1 96.9 3.1C402.1 323.6 377.2 361.3 342 384.8z" />
              </svg>
              <span>Dribbble</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/sathyaram"
            >
              <svg viewBox="0 0 512 512">
                <path d="M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"></path>
              </svg>
              <span>Github</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://codepen.io/sathyaram"
            >
              <svg viewBox="0 0 512 512">
                <path d="M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z" />
              </svg>
              <span>Codepen</span>
            </a>
          </nav>
          <address>
            <div className="credits">
              <div>Made with Gatsby + (S)CSS</div>
              <div>All photos by Sathya Ram</div>
            </div>
            <p className="copyright">© 2020 Sathya Ram. All rights reserved.</p>
          </address>
        </div>
      </footer>
    </div>
  );
}

