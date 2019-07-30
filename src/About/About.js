import React, { Component } from 'react';
import './About.scss';

class About extends Component {
  render() {
    return (
      <main className="about">
         <header role="banner">
           <div className="branding">
          So <h1>About</h1> Me
          </div>
         </header>
        <div className="about-header">
          
          <br></br>
          <br></br>
      
          I'm Sathya Ram,
          <br></br>
          a dude who loves to make creative ...anything! 
          <br></br>
          Mostly websites, graphics and photos.
          <br></br>
          *Polish is a must with me
          <br></br>
          <br></br>
          I live in Alexandria, Virginia and work full time
          as a Front-End Developer for a wholesome agency called <a target="_blank" rel="noopener noreferrer" href="https://forumone.com">Forum One</a>. 
          <br></br>
          <br></br>
          
          As far as development, I've got a thing for animated interactions, SVGs, Web Analytics, and CSS Wizardy. I'm trying to get better at Javascript Animation, Gatsby.js, and TweenMax.
          <br></br>
          <br></br>
          In my non-existant free time, I gorge on video games, <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">shoot some neat photos</a>, dream up short film ideas,
          think about going to the gym, draw poorly, waste my life redditing, and watch a metric fudgeton of television and movies.
          <br></br>
          <br></br>
          Oh, since I'm obsessed with fonts, you absolutely must know: this site uses <a target="_blank" rel="noopener noreferrer" href="https://freetypography.com/2015/08/09/free-font-aquatico/">Aquatico</a> and <a target="_blank" rel="noopener noreferrer" href="https://fonts.google.com/specimen/Barlow" >Barlow</a>.
        </div>

      </main>
    );
  }
}

export default About;