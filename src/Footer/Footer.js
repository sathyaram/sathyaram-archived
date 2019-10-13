import React from 'react';
import './Footer.scss'

const Footer = (props: {
  onCategoryPress: string => void
}) =>  {
  const handleShapeClick = key => {
    if (props.onCategoryPress) 
      props.onCategoryPress(key)
  }
    return (
      <footer>
        <div className="filters">
        <div className="icon" onClick={() => handleShapeClick('web')}>

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
              <div className="box shape" onClick={() => handleShapeClick('graphic')}>
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
              <div className="photo shape" onClick={() => handleShapeClick('photo')}>
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

export default Footer;
