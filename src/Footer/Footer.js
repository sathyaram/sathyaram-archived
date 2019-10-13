import React, { Component } from 'react';

import './Footer.scss'

class Footer extends Component {
  
  constructor(props) {
    super(props)
    this.selections = [];
  }

  collectSelections = (e) => {
    let main = document.getElementById('maincontent');
    
    let value = e.target.value;
    let checked = e.target.checked;
    let valueIndex = this.selections.indexOf(value);

    if (checked) {
      if (valueIndex === -1) {
        this.selections.push(value);
      }
      window.scroll({
        behavior: 'smooth',
        left: 0,
        top: main.offsetTop
      });
    } else {
      if (valueIndex !== -1) {
        // removing element at location of valueIndex
        this.selections.splice(valueIndex, 1);
      }
    }
    this.props.categoryChanged(this.selections);
  }

  // loading = () => {
  //   var loader = document.getElementById('loader');
  //   loader.classList.add('zoom');
  
  //   setTimeout(function () {
  //     loader.classList.remove('zoom');
  //   }, 1500);
  // }

  render() {
    return (
      <footer>
        <div className="filters">
        <div className="icon">

            <div className="vector" >
              <div className="monitor shape">
                <div className="letters">W</div>
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
            {/* <label onClick={this.loading}>
            <input type="checkbox" name="Web" value="Web" onChange={this.collectSelections} />
            Web
          </label> */}
          </div>
          <div className="icon">
            <div className="vector">
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
            </div>
            {/*<label onClick={this.loading}>
             <input type="checkbox" name="Graphic" value="Graphic" onChange={this.collectSelections} />
            Graphic
          </label> */}
          </div>
          <div className="icon">
            <div className="vector">
              <div className="photo shape">
                <div className="image">
                  <div className="letters">P</div>
                </div>
              </div>
            </div>
            {/* <label  onClick={this.loading}>
            <input type="checkbox" name="Photography" value="Photography" onChange={this.collectSelections} />

            Photography
          </label> */}
        </div>
        </div>
        {/* Handcrafted with <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org">React </a>and <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">Sass</a>
        <br></br><div>Hosted with <a target="_blank" rel="noopener noreferrer" href="https://netlify.com">Netlify</a></div>
      */}
      </footer>
    );
  }
}

export default Footer;