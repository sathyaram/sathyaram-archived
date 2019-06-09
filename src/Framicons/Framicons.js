import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Framicons.scss';

class Framicons extends Component {
    render() {
        return (
            <div className="framicons">
                <Link to="/web" className="web">
                <div className="role">
              <span>Front-End</span> 
              Developer 
            </div>
            
            
                    <div className="card-wrapper">
                        <div className="front side">
                            <div className="vector">
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
                            <div className="description">
                                <h3>Websites</h3>
                            </div>
                        </div>
                        <div className="back side">
                            I’m a web developer who specializes in Drupal websites and have worked in Wordpress and Grav. I’ve developed responsive applications, websites and themes with HTML5, CSS3, SASS, Javascript, PHP, and Express. I’m currently in the intensive General Assembly coding bootcamp learning React.js, Python, Django and much more. I aim for crisp code with a critical eye for detail.
                        </div>
                    </div>
                </Link>
                <Link to="/graphic" className="graphic">
                <div className="role">
              <span>Graphic &amp; Web</span>
              Designer 
            </div>
                    <div className="card-wrapper">
                        <div className="front side">
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
                            <div className="description">
                                <h3>Graphics</h3>
                            </div>
                        </div>
                        <div className="back side">
                            I’m a graphic design major who pushes the confines of creativity as I strive to use my design lens with everything I do. I care strongly about user experiences and make sure that and visual appeal are at the forefront of my mind every step of my design process. If you’re looking for a cookie-cutter designer - look elsewhere. I aim to make designs that are fresh and advance the industry.
                        </div>
                    </div>
                </Link>
                <Link to="/photography" className="photography">
                <div className="role">
              <span>Everything</span>
              Photographer
            </div>
                    <div className="card-wrapper">
                        <div className="front side">
                            <div className="vector">

                                <div className="photo shape">
                                    <div className="image">
                                        <div className="letters">P</div>
                                    </div>
                                </div>
                            </div>
                            <div className="description">
                                <h3>Photos</h3>
                            </div>
                        </div>
                        <div className="back side">
                            I’m experienced in a wide range of photography. My portfolio ranges from portraits to nature to landscapes to space. My photos can be found on a variety of publications such as PBS NewsHour, Acuman and InStyle magazine and Lehigh websites/magazines. Having  professional photography skills has taken my website, graphic designs and my eye for quality to a new level.
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Framicons;