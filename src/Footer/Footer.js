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
          </div>
          <div className="icon">
            <div className="vector">
              <div className="photo shape">
                <div className="image">
                  <div className="letters">P</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;