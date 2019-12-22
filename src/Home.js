import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <header role="banner">
          <div className="headings">
            <h1><span>Sathya Ram</span></h1>
            <h2>Web Developer <span>✧</span> Digital Designer <span>✧</span> Photographer</h2>
            <div className="pronounce">/ Saa-thee-uh · Ram /</div>
          </div>
          <div className="photobooth">
            <div><img src="/images/me1.png" alt="me1"></img></div>
            <div><img src="/images/me2.png" alt="melol"></img></div>
          </div>
        </header>
        <main id="maincontent" role="main">
          <section className="aboutMe">
            <p>
              <h4>Design, honesty, and a bit of magic<span>!</span></h4><br></br><br></br> I design &amp; build digital experiences. My thing is handcrafted
              websites,
              vibrant, user-centric designs and lifestyle, portrait, studio photography. I'm all about making the internet
              sexier.
         </p>
            <br></br>
            <p className="gamer">*I'm also a huge gamer - Add me on <span className="battlenet">Battlenet</span> or <span
              className="discord">Discord</span>!</p>
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
                  <div class="draw">
                  <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78.2 54.3">
                    <path class="s-line" d="M36.4 14c-.4-.7-5-9.5-15.4-6.6h-.1c-3.4.9-5.8 3.5-6.8 6.8-1 3.6 1.2 7.1 3 10 1.5 2.5 4.3 5.8 1.8 8.7-.8.9-2.1 1.4-3.3 1.3-1.2 0-2.4-.5-3.5-1-2.7-1.3-6.3-4.2-5-7.6-1.7 4.8.9 9.8 4.9 12.5 2.3 1.5 5 2.3 7.8 2 4.4-.6 7.8-4.4 8-8.8.1-2.4-1.6-4.9-3-6.7-.7-.9-1.4-1.8-2.1-2.6-4-6.6 2.7-5.2 2.7-5.2s5.4 1.2 6.9 9.5c.4-2.6-.1-6.1 4.1-12.3z" />
                    <path class="r-line" d="M71 27.2c1.3 3.5-3 6.3-6 7.5-1.3.5-2.6.9-4 .9s-2.8-.5-3.6-1.5c-2.7-3.1.6-6.3 2.4-8.7 2.1-2.9 4.7-6.4 3.8-10-.9-3.4-3.5-6.1-7.3-7.2h-.1c-3.5-1-7.4-.4-10.7 1-2.7 1.2-5 3-6.6 5.5-1.8 2.8-3.3 6.3-3.9 9.6-.2 1.1-.3 2.3-.4 3.4-.7 10.6 5.9 20.1 5.9 20.1-.8-4.9-.8-8.7-.4-11.8.5-3.9 1.3-7 2.3-9.5 3.6-9.5 8.5-9 8.5-9s7.5-1.1 2.8 5.4c-.9.8-1.7 1.7-2.5 2.6-1.6 1.8-3.6 4.2-3.6 6.7 0 4.5 3.8 8.5 8.6 9.2 3 .5 6.2-.2 8.8-1.7 4.6-2.8 7.8-7.7 6-12.5z" />
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
                <div className="photo shape">
                <img src="/images/me.jpg" alt="me1"></img>
                </div>
              </div>
            </div>
          </section>
          <section className="routeMe">
            <Link to="/about" id="about" className="router">
              <h3>About</h3>
              <div className="container">
                <img alt="lol" src="images/RAM_2497.jpg"></img>
                <img alt="lol" src="images/RAM_2489.jpg"></img>
              </div>
            </Link>
            <Link to="/websites" id="websites" className="router">
              <h3>Websites</h3>
              <div className="track">
                <img className="desktop" alt="lol" src="images/fudtruk.gif"></img>
                <img className="tablet" alt="lol" src="images/paulknakk.jpg"></img>
                <img className="phone" alt="lol" src="images/ex.jpg"></img>
              </div>
            </Link>
            <Link to="/designs" id="designs" className="router">
              <h3>Designs</h3>
              <div className="grid">
                <img alt="lol" src="images/loewy.png"></img>
                <img alt="lol" src="images/treeteck.png"></img>
                <img alt="lol" src="images/lehighracing.png"></img>
                <img alt="lol" src="images/arcticlogo.png"></img>
              </div>
            </Link>
            <Link to="photography" id="photography" className="router">
              <h3>Photography</h3>
              <img alt="lol" src="images/RAM_2145.jpg" ></img>
            </Link>
            <Link to="/playground" id="playground" className="router">
              <h3>Playground</h3>
              <div className="scene">
                <div className="cloud cloud1"></div>
                <div className="cloud cloud2"></div>
                <div className="cloud cloud3"></div>
                <div className="island island1">
                  <div className="waterfall waterfall1"></div>
                </div>
                <div className="island island2">
                  <div className="waterfall waterfall2"></div>
                </div>
              </div>
            </Link>
          </section>
        </main>
      </>
    );
  }
}

export default Home;