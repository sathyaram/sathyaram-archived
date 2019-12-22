import React, { Component } from 'react';


class Playground extends Component {

  loadScript() {
    let body = document.body;
    let script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'https://static.codepen.io/assets/embed/ei.js';
    script.async = true;
    script.defer = true;
    body.appendChild(script);
    console.log('done');
  }
  componentDidMount() {
    this.loadScript();
  }
  render() {
    return (
      <div className="page appears">
        <div className="text">
          <h2><div>Playground</div></h2>
          <h6><div>Some random code stuff I've been working on.</div></h6>
        </div>
        <div className="content">
          <div className="play-item appear">
          <p className="codepen" data-height="600" data-theme-id="default" data-default-tab="result" data-user="sathyaram" data-slug-hash="WqqEMK" data-pen-title="Getting Trendy - CSS/UI Challenge">
            <span>See the Pen <a href="https://codepen.io/sathyaram/pen/WqqEMK">
              Getting Trendy - CSS/UI Challenge</a> by Sathya (<a href="https://codepen.io/sathyaram">@sathyaram</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
          </p>
          </div>
          <div className="play-item appear">
          <p className="codepen" data-height="600" data-theme-id="default" data-default-tab="result" data-user="sathyaram" data-slug-hash="OJJzgVo" data-pen-title="Outrun Glow">
  <span>See the Pen <a href="https://codepen.io/sathyaram/pen/OJJzgVo">
  Outrun Glow</a> by Sathya (<a href="https://codepen.io/sathyaram">@sathyaram</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
          </div>
          <div className="play-item appear">
          <p className="codepen" data-height="600" data-theme-id="default" data-default-tab="result" data-user="sathyaram" data-slug-hash="vYBGQwR" data-pen-title="Floating Island Keyframes">
  <span>See the Pen <a href="https://codepen.io/sathyaram/pen/vYBGQwR">
  Floating Island Keyframes</a> by Sathya (<a href="https://codepen.io/sathyaram">@sathyaram</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
          </div>
          <div className="play-item appear">
          <p className="codepen" data-height="600" data-theme-id="default" data-default-tab="result" data-user="sathyaram" data-slug-hash="KKKZqjM" data-pen-title="Gradient Glow Letter">
  <span>See the Pen <a href="https://codepen.io/sathyaram/pen/KKKZqjM">
  Gradient Glow Letter</a> by Sathya (<a href="https://codepen.io/sathyaram">@sathyaram</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Playground;