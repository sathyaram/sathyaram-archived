import React from 'react';

const Aside = () => {
  return (
    <aside>
      <a className="home" href="/"><img className="logo" src="/ram-logo-white.svg" /></a>
      <a name="web anchor" href="#web"><div className="monitor shape"><div className="letters">W</div><div className="base"><div className="foot bottom"></div></div></div></a>
      <a name="photography anchor" href="#photography"><div className="photo shape"><div className="letters">P</div></div></a>
      <a name="graphic anchor" href="#graphic"><div className="box shape"><div className="letters">G</div><div className="anchor"></div><div className="anchor"></div><div className="anchor"></div><div className="anchor"></div><div className="anchor"></div><div className="anchor"></div><div className="anchor"></div><div className="anchor"></div><div className="anchor"></div></div></a>
      <div className="scroll-more">↓</div>
    </aside>
  );
};

export default Aside;