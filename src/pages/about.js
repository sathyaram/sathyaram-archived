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
          TL;DR
        </div>
        <div className="about-content">
          Hi there! <span aria-label="hand wave" role="img">👋🏽</span> I'm <u>Sathya Ram</u>.
        <br></br><br></br>
        I design and develop modern websites; <br></br>I build engaging layouts, and user interfaces; and I craft delightful web animations and interactions.
        <br></br><br></br> I am also an avid photographer and freelancer.
        <br></br> <br></br>
        Combining these skills, I bring beautiful digital experiences to life.
        At heart, I am a creator: I believe in aesthetics with purpose. 
        </div>
      </div>
      <div className="about-section">
        <div className="about-title">
          Bio
        </div>
        <div className="about-content">
          I Double Majored in Design and Studio Art at Lehigh University, with a concentration in Graphic Design and Photography. In my last year of college, I taught myself how to code and learned to take my designs to the next level. Soon after, I found freelance opportunities that allowed me to grow my web skills. <br></br><br></br> I recently graduated from a Coding Bootcamp called General Assembly where I learned JavaScript and React in a rigerous environment. Now, I work at agencies while also manning my own freelance website and professional photography business.
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
            <hr></hr>
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
          Passionate nerd, CSS Junkie, and avid conversationalist.
        <br></br><br></br>
        I love all things film/TV - I live on iMDB, check out
        <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/user/ur37032307/ratings?sort=your_rating,desc&amp;ratingFilter=0&amp;mode=detail&amp;last"> what I've rated</a>.<br></br><br></br>I'm a big <a target="_blank" rel="noopener noreferrer" href="https://worldofwarcraft.com/en-us/character/us/tichondrius/sathya"> World of Warcraft</a> player, and amateur voice actor.<br></br><br></br>I post my photography on
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