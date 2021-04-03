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
          Hi there! 👋🏽 I'm <u>Sathya Ram</u>.
        <br></br><br></br>
        At heart, I am a creator: <br></br>I believe in aesthetics with purpose.
        <br></br><br></br>
        I design and develop modern websites; I build engaging layouts, and user interfaces; and I hand-craft delightful animations and interactions. I am also an avid photographer and freelancer.
        <br></br> <br></br>
        Combining these skills, I bring beautiful digital experiences to life.
        My ultimate goal is to make the internet sexier.
        </div>
      </div>
      <div className="about-section">
        <div className="about-title">
          Bio
        </div>
        <div className="about-content">
          Double Majored in Design, with a concentration in Graphic Design and Studio Art, with a concentration of Photography. In my last year of college, I taught myself to code and found freelance opportunities that allowed me to grow my web skills. <br></br><br></br> I recently with to a Coding Bootcamp called General Assembly where I learned JavaScript and React indepthly. Now, I work at agencies while also manning my own freelance website and photography business.
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
          Inspiration
        </div>
        <div className="about-content">
          Passionate nerd, CSS Junkie, and avid conversationalist.
        <br></br><br></br>
        I love all things film/TV - I live on iMDB, check out
        <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/user/ur37032307/ratings?sort=your_rating,desc&amp;ratingFilter=0&amp;mode=detail&amp;last">what I've rated </a>.<br></br><br></br>I'm a big <a target="_blank" rel="noopener noreferrer" href="https://worldofwarcraft.com/en-us/character/us/tichondrius/sathya">World of Warcraft</a> player, and amateur voice actor.<br></br><br></br>I post my photography on
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">my Instagram</a>, so follow me if you want a little vibrance on your daily scrolls.
        </div>
      </div>
      <div className="about-section">
        <div className="about-title">
          Learnings
        </div>
        <div className="about-content">
          Hey hey! I'm Sathya Ram,
        <br></br>
        a passionate nerd, CSS Junkie, and avid conversationalist.
        <br></br><br></br>
        I love all things film/TV - I live on iMDB, check out
        <a target="_blank" rel="noopener noreferrer" href="https://www.imdb.com/user/ur37032307/ratings?sort=your_rating,desc&amp;ratingFilter=0&amp;mode=detail&amp;last">what I've rated </a>.<br></br><br></br>I'm a big <a target="_blank" rel="noopener noreferrer" href="https://worldofwarcraft.com/en-us/character/us/tichondrius/sathya">World of Warcraft</a> player, and amateur voice actor.<br></br><br></br>I post my photography on
        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/sathya.ram">my Instagram</a>, so follow me if you want a little vibrance on your daily scrolls.
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default About