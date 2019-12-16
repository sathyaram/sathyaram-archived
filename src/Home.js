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
        <section className="aboutMe">
          <p>
            Design, honesty, and a bit of magic. <br></br><br></br> I design &amp; build digital experiences. My thing is handcrafted
            websites,
            vibrant, user-centric designs and lifestyle, portrait, studio photography. I'm all about making the internet
            sexier.
    </p>
          <br></br>
          <p className="gamer">*I'm also a huge gamer - Add me on <span className="battlenet">Battlenet</span> or <span
            className="discord">Discord</span>!</p>
          <div className="framicons">
            <a className="shooter" name="web anchor" href="#web">
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

            <a className="shooter" name="graphic" href="#graphic">
              <div className="box shape">
                <div className="letters">G</div>
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
            <a className="shooter" name="photography" href="#photography">
              <div className="photo shape">
                <div className="letters">P</div>
              </div>
            </a>
          </div>
        </section>
        <main id="maincontent" role="main">
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
        </main>
      </>
    );
  }
}

export default Home;