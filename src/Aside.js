import React from 'react';

const Aside = () => {
  return (
    <aside>
      <a name="home logo" className="home" href="/">
        <img className="logo" alt="ram logo" src="/ram-logo-white.svg" />
      </a>
      <a className="shooter" name="web anchor" href="#web">
        <div className="monitor shape">
          <div className="letters">W</div>
          <div className="base">
            <div className="foot bottom"></div>
          </div>
        </div>
      </a>
      <a className="shooter" name="photography" href="#photography">
        <div className="photo shape">
          <div className="letters">P</div>
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
      <div className="scroll-more">↓</div>
    </aside>
  );
};

export default Aside;