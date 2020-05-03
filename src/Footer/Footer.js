import React from 'react';
import './Footer.scss';
import Tilt from 'react-tilt';


function Footer() {
  return (
    <footer role="contentinfo">
      <h3>Let's make cool together.</h3>
      <div className="footerCTAs">
      <Tilt className="tilt">

        <div className="footerCTA">Email Me <span>sathyatheram@gmail.com</span></div>
        </Tilt>
      </div>
      <div className="copyright">
        © 2020 Sathya Ram. All rights reserved.
          <br></br>
        <span>All shots included taken by Sathya Ram</span>
      </div>
    </footer>

  );
};

export default Footer;