import React from "react"
import Menu from "../components/menu"
import Sky from "../components/sky"
import Footer from "../components/footer"
import Seo from "../components/seo"

const About = () => (
  <div className="internal-page about-page">
    <Sky />
    <Menu />
    <Seo title="About" />
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
          I double majored in Design and Studio Art at Lehigh University, with a concentration in Design and Studio Art. In my last year of college, I taught myself how to code and push my designs to the world wide web.
          <br></br>
          <br></br>
          After a couple years of agency experience, it became clear that web design and development was my passion. So, I decided to learn programming fundamentals in a formal setting, at a coding bootcamp called General Assembly, where I learned JavaScript and React.js in a rigorous environment.
          <br></br>
          <br></br>
          Currently, I operate my own freelance website development, interface design and professional photography enterprise. Right now, I'm seeking a creative developer + designer role.
        </div>
      </div>
      <div className="about-section">
        <div className="about-title">
          Awards + Publications
        </div>
        <div className="about-content">
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www2.lehigh.edu/news/36th-honors-convocation-celebrates-academic-excellence">Leonard B. Pool Prize</a><span> Competitive Entreprenurial Scholarship</span></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.bananafactory.org/2015/11/11/2015-olympus-invision-college-photo-competition-winners-announced/">Olympus InVision Photography Festival</a><span>Second Place</span></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://pabug.org/">PA BUG Best Portal Design Award</a><span>First Place</span></li>
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
          ENFP. Movie buff. Voice actor. CSS Wiz. Passionate nerd. Avid conversationalist.
        <br></br>
          <br></br>
        I live on iMDB: I love all things film/TV.
        <br></br>
        Check out
        <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/user/ur37032307/ratings?sort=your_rating,desc&amp;ratingFilter=0&amp;mode=detail&amp;last"> what I've rated</a>.<br></br><br></br>I <s>used to</s> play <a target="_blank" rel="noopener noreferrer" href="https://worldofwarcraft.com/en-us/character/us/tichondrius/sathya"> World of Warcraft</a>.
        <br></br>
          <br></br>
        I post my photography on
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