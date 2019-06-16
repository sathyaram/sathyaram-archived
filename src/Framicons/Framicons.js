import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Framicons.scss';

class Framicons extends Component {
    render() {
        return (
            <div className="framicons">
                <div className="web">
                <div className="skills">
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
                            I’m a Front-End Developer who specializes in building websites from scratch! I make websites in Drupal 8, Wordpress, Grav and React! I’ve developed responsive applications, websites and themes with HTML5, CSS3, SASS, Javascript, React, PHP, and Express. I’m currently a Front-End Developer at Forum One, an awesome agency. I aim for crisp code with a critical eye for detail.
                        </div>
                    </div>
                </div>
                <div className="graphic">
                <div className="skills">
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
                            I’m a Graphic Design major who pushes the confines of creativity. If you’re looking for a cookie-cutter designer - look elsewhere. I aim to make designs that are fresh and advance the industry.
                        </div>
                    </div>
                </div>
                <div className="photography">
                <div className="skills">
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
                            I’m an everything photographer, so I literally shoot anything and everything. My portfolio ranges from portraits to nature to landscapes to space. My photos can be found on a variety of publications such as PBS NewsHour, Acuman and InStyle magazine and Lehigh websites/magazines. Having  professional photography skills has taken my websites, designs and my eye for quality to a new level.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Framicons;