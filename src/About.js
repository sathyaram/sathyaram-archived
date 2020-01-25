import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="page">
        <div className="text">
          <h2><div>About</div></h2>
          <h6><div>Stirrin' up trouble since 1994</div></h6>
          <div className="appear">
          <img alt="Me" src="/images/Untitled-3.png"></img>
          </div>
          <div className="about">
            Hey hey!
            I'm <strong>Sathya Ram</strong>,
            <br></br>
            a passionate nerd, CSS Junkie, and avid conversationalist.
            <br></br>
            <br></br>
            I work at a mission-driven agency called <a target="_blank" rel="noopener noreferrer" href="https://forumone.com">Forum One</a>, doing front-end work for non-profit/government clients.
            <br></br>
            <br></br>
            I love all things film/TV - I live on iMDB, check out <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/user/ur37032307/ratings?sort=your_rating,desc&amp;ratingFilter=0&amp;mode=detail&amp;last">what I've rated</a>.
            <br></br>
            <br></br>
            I'm a big <a target="_blank" rel="noopener noreferrer" href="https://worldofwarcraft.com/en-us/character/us/lightbringer/sathex">World of Warcraft</a> player, and amateur voice actor.
            <br></br>
            <br></br>
            I post my photography on <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">my Instagram</a>, so follow me if you want a little vibrance on your daily scrolls.
          </div>
        </div>
      </div>
    );
  }
}

export default About;


