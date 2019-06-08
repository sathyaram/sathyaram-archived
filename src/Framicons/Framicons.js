import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Framicons.scss';

class Framicons extends Component {
    render() {
        return (
            <div className="framicons">
                <Link to="/web" class="web">
                <div class="role">
              <span>Front-End</span> 
              Developer 
            </div>
            
            
                    <div class="card-wrapper">
                        <div class="front side">
                            <div class="vector">
                                <div class="monitor shape">
                                    <div class="letters">W</div>
                                    <div class="screen">
                                        <div class="code">
                                            <div class="bar long"></div>
                                            <div class="bar"></div>
                                            <div class="bar"></div>
                                            <div class="bar long"></div>
                                            <div class="bar long"></div>
                                            <div class="bar long"></div>
                                            <div class="bar"></div>
                                            <div class="bar"></div>
                                            <div class="bar long"></div>
                                            <div class="bar long"></div>
                                            <div class="bar long"></div>
                                            <div class="bar"></div>
                                            <div class="bar"></div>
                                            <div class="bar long"></div>
                                            <div class="bar long"></div>
                                        </div>
                                    </div>
                                    <div class="base">
                                        <div class="foot bottom"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="description">
                                <h3>Websites</h3>
                            </div>
                        </div>
                        <div class="back side">
                            I’m a web developer who specializes in Drupal websites and have worked in Wordpress and Grav. I’ve developed responsive applications, websites and themes with HTML5, CSS3, SASS, Javascript, PHP, and Express. I’m currently in the intensive General Assembly coding bootcamp learning React.js, Python, Django and much more. I aim for crisp code with a critical eye for detail.
                        </div>
                    </div>
                </Link>
                <Link to="/graphic" class="graphic">
                <div class="role">
              <span>Graphic &amp; Web</span>
              Designer 
            </div>
                    <div class="card-wrapper">
                        <div class="front side">
                            <div class="vector">
                                <div class="box shape">
                                    <div class="letters">G</div>
                                    <div class="anchor"></div>
                                    <div class="anchor"></div>
                                    <div class="anchor"></div>
                                    <div class="anchor"></div>
                                    <div class="anchor"></div>
                                    <div class="anchor"></div>
                                    <div class="anchor"></div>
                                    <div class="anchor"></div>
                                    <div class="anchor"></div>
                                </div>
                            </div>
                            <div class="description">
                                <h3>Graphics</h3>
                            </div>
                        </div>
                        <div class="back side">
                            I’m a graphic design major who pushes the confines of creativity as I strive to use my design lens with everything I do. I care strongly about user experiences and make sure that and visual appeal are at the forefront of my mind every step of my design process. If you’re looking for a cookie-cutter designer - look elsewhere. I aim to make designs that are fresh and advance the industry.
                        </div>
                    </div>
                </Link>
                <Link to="/photography" class="photography">
                <div class="role">
              <span>Everything</span>
              Photographer
            </div>
                    <div class="card-wrapper">
                        <div class="front side">
                            <div class="vector">

                                <div class="photo shape">
                                    <div class="image">
                                        <div class="letters">P</div>
                                    </div>
                                </div>
                            </div>
                            <div class="description">
                                <h3>Photos</h3>
                            </div>
                        </div>
                        <div class="back side">
                            I’m experienced in a wide range of photography. My portfolio ranges from portraits to nature to landscapes to space. My photos can be found on a variety of publications such as PBS NewsHour, Acuman and InStyle magazine and Lehigh websites/magazines. Having  professional photography skills has taken my website, graphic designs and my eye for quality to a new level.
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Framicons;