import React, { Component } from 'react';
import './About.scss';

class About extends Component {
  render() {
    return (
      <main className="about">
        <div className="about-header">
          Hey hey,
          <br></br>
          <br></br>

          I'm Sathya Ram,
          an Indian dude who loves to make creative shit with polish.
          <br></br>
          <br></br>
          I live in Alexandria, Virginia and work full time
          as a Front-End Developer for a wholesome agency called <a target="_blank" rel="noopener noreferrer" href="https://forumone.com">Forum One</a>. 
          <br></br>
          <br></br>
          In my non-existant free time, I gorge on video games, <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">shoot some neat photos</a>, dream up short film ideas,
          think about going to the gym, waste my life on reddit, and watch a metric fudgeton of television and movies.

        </div>

      </main>
    );
  }
}

export default About;