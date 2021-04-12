import React from "react"
import Menu from "../components/menu"
import Sky from "../components/sky"
import Footer from "../components/footer"
import SEO from "../components/seo"

const About = () => (
  <div className="internal-page about-page">
    <Sky />
    <Menu />
    <SEO title="About" />
    <header>
      <h1>About</h1>
      <p>Stirrin' up trouble since 1994</p>
    </header>
    <main>
      <div className="about-section">
        <div className="about-title">
          Synopsis
        </div>
        <div className="about-content">
          Hi there! <span aria-label="hand wave" role="img">👋🏽</span> I'm <u>Sathya Ram</u>.
        <br></br><br></br>
        I design and develop modern websites; <br></br>I build engaging layouts, and user interfaces; and I craft delightful web animations and interactions.
        <br></br><br></br> I am also an avid photographer and freelancer.
        <br></br> <br></br>
        Combining these skills, I bring beautiful digital experiences to life.
        At heart, I am a creator: <br></br>I believe in aesthetics with purpose.
        </div>
      </div>
      <div className="about-section">
        <div className="about-title">
          TL;DR
        </div>
        <div className="about-content">
        I build websites with WordPress, Drupal, Grav, React, and Gatsby.
          <br></br>
          <br></br>
          I write HTML, (S)CSS, front-end JavaScript, jQuery,  JSX, PHP, and Twig. 
          <br></br>
          <br></br>
          I design and prototype in Adobe XD, Figma, Sketch, Adobe Illustrator, and InVision.
          <br></br>
          <br></br>
          I capture photos with my Sony A7RIV and Fujifilm X100V.
        
        </div>
      </div>
      <div className="about-section">
        <div className="about-title">
          Bio
        </div>
        <div className="about-content">
          I double majored in Design and Studio Art at Lehigh University, with a concentration in Graphic Design and Photography. In my last year of college, I taught myself how to code and learned to take my designs to the next level.<br></br><br></br> At the end of 2018, I graduated from a Coding Bootcamp called General Assembly where I learned JavaScript and React.js in a rigorous environment.<br></br><br></br> Now, I work at creative agencies while also manning my own freelance website development and professional photography business.
         
        </div>
      </div>
      <div className="about-section">
        <div className="about-title">
          Awards + Publications
        </div>
        <div className="about-content">
          <ul>
            <li>Leonard B. Pool Prize <span> Competitive Entreprenurial Scholarship</span></li>
            <li>Olympus InVision Photography Festival<span>Second Place</span></li>
            <li>PA BUG Best Portal Design Award<span>First Place</span></li>
            <li>Business Insider
              <span>Published Photography</span>
            </li>
            <li>Lehigh Acumen
            <span>Published Photography</span>
            </li>
            <li>InStyle Magazine
            <span>Published Photography</span>
            </li>
            <li>Hazl Magazine
            <span>Published Photography</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-section">
        <div className="about-title">
          Etc
        </div>
        <div className="about-content">
        ENFP. Movie buff. Voice actor. CSS Wizard. Passionate nerd. Avid conversationalist. 
        <br></br><br></br>
        I live on iMDB: I love all things film/TV.<br></br>Check out
        <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/user/ur37032307/ratings?sort=your_rating,desc&amp;ratingFilter=0&amp;mode=detail&amp;last"> what I've rated</a>.<br></br><br></br>I <u>used</u> to be a big <a target="_blank" rel="noopener noreferrer" href="https://worldofwarcraft.com/en-us/character/us/tichondrius/sathya"> World of Warcraft</a> player.<br></br><br></br>I post my photography on
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram"> my Instagram</a>, so follow me if you want a little vibrance on your daily scrolls.
        </div>
      </div>
      <div className="about-section">

      </div>
    </main>
    <Footer />
  </div>
)

export default About