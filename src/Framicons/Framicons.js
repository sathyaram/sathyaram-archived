import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './Framicons.scss';

class Framicons extends Component {
    render() {
        return (

            <div className="framicons">
                <Link to="/" className="web">
              <ScrollAnimation animateIn="fadeInUp" delay={4700} animateOnce={true} animatePreScroll={true} scrollableParentSelector='header'>


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
                            I’m a guy who loves theming, CSS and making websites from scratch! I build websites in Drupal 7/8, WordPress, Grav and React. I’ve developed responsive applications, websites and themes with HTML5, SASS/CSS, JavaScript, React, PHP, and Express. I’m currently a Front-End Developer at Forum One, an awesome agency focused on mission-driven non-profit and government clients.
                        </div>
                    </div>
                </ScrollAnimation>
                </Link>

                <Link to="/" className="graphic">
              <ScrollAnimation animateIn="fadeInUp" delay={4800} animateOnce={true} animatePreScroll={true} scrollableParentSelector='header'>

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
                            I'm a trained Graphic Designer who pushes the confines of creativity. If you’re looking for a cookie-cutter designer - look elsewhere. I aim to make designs that are fresh and advance the industry. I aim for pixel perfection, with a critical eye for detail.
                        </div>
                    </div>
                </ScrollAnimation>
                </Link>

                
                <Link className="photography" to="/">
              <ScrollAnimation animateIn="fadeInUp" delay={4900} animateOnce={true} animatePreScroll={true} scrollableParentSelector='header'>

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
                </ScrollAnimation>
                </Link>

            </div>
        );
    }
}

export default Framicons;