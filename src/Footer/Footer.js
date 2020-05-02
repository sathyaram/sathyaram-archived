import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer role="contentinfo">
      <h3>Let's make cool together.</h3>
      <div className="footerCTAs">
        <div className="footerCTA">Email Me <span>sathyatheram@gmail.com</span></div>
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