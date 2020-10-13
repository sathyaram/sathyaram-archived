import React from "react"

const Hero = () => (
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
)


export default Hero
