import React, { Component } from 'react';
import Framicons from '../Framicons/Framicons'
import './Header.scss'
import bgmusic from './../chill3.mp3'
import ScrollAnimation from 'react-animate-on-scroll';

class Header extends Component {

  mouseMe = () => {
    let origin = document.getElementById("space");

    origin.addEventListener("mousemove", e => {
      let { clientX: x, clientY: y } = e;
      origin.style.perspectiveOrigin = `${x}px ${y}px`;
    });

    origin.addEventListener("mouseleave", e => {
      origin.style.perspectiveOrigin = `50% 50%`;
    })
  }

  play = () => {
    let player = document.getElementById('bg-music');
    player.volume = 0.1;
    player.play();
    document.getElementById('pauseButton').style.display = 'block';
    document.getElementById('playButton').style.display = 'none';
  }

  pause = () => {
    let player = document.getElementById('bg-music');
    player.pause();
    document.getElementById('playButton').style.display = 'block';
    document.getElementById('pauseButton').style.display = 'none';
  }

  addStars = () => {
    for (let x = 0; x < 75; x++) {
      var newStar = document.createElement('div');
      let space = document.getElementById("space");
      newStar.className = 'new stars';
      space.appendChild(newStar);
    }
  }

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" duration={3} delay={2000} animateOnce={true}>
      <header role="banner">
        <ScrollAnimation animateIn="fadeInUp" duration={3} delay={1800} animateOnce={true}>
          <div id="space" className="space">
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
            <div className="stars"></div>
          </div>
          <div className="branding">
            <div className="eyebrowMenu">
              <button className="addStar" aria-label="add stars" onClick={this.addStars} name="Add Stars">
                <i className="fas fa-star" ></i>
              </button>
              <div className="music-wrapper">
                <button id="pauseButton" aria-label="pause icon" onClick={this.pause} name="Pause Background Music">
                  <i className="fas fa-pause" ></i>
                </button>
                <button id="playButton" aria-label="play music" onClick={this.play} name="Play Background Music">
                  <i className="fas fa-music" ></i>
                </button>
                <audio id="bg-music" controls loop>
                  <source src={bgmusic} type="audio/mp3"></source>
                </audio>
              </div>
            </div>

            <div className="planet"></div>
            <div className="hoverwrap">
              <div className="pronounce">
                <i className="fas fa-comment"></i>
                <div className="explanation">
                  / Saa-thee-uh · Ram /
              </div>
              </div>
              <ScrollAnimation animateIn="fadeInUp" delay={3800} animateOnce={true}>
                <h1><span>Sathya Ram</span></h1>
               </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={4200} animateOnce={true}>
              <h2>
                <div className="skills">
                  <span>Front-End</span>
                  Developer
                    </div>
                <div className="skills">
                  <span>Graphic &amp; Web</span>
                  Designer
                </div>
                <div className="skills">
                  <span>Professional</span>
                  Photographer
                </div>
              </h2>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
          {/* <Framicons /> */}
      </header>
      </ScrollAnimation>
    );
  }
}

export default Header;