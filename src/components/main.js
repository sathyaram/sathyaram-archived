import React from "react"
import Tilt from "react-tilt";
import Image from "../components/image"
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default function Main() {

  const openDesc = (e) => {
    e.target.parentNode.parentNode.classList.toggle("active");
  };

  const closeDesc = (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.classList.remove(
      "active"
    );
  };

  return (
    <main role="main">
      <section id="websites" className="websites">
        <div className="section-text">
          <h3 className="section-title">Website Development</h3>
          <p className="section-desc">
            I build and develop full-scale websites and engaging UI with a variety of technologies like Drupal, WordPress, React and Grav.
            </p>
        </div>
        <div className="section-content">
          <Tilt className="tilt">
            <div className="section-info">
              <div className="left">
                <div className="title">Vilcek Foundation</div>
                <div className="subtitle">Arts + Immigrant Foundation</div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    The Vilcek Foundation, which raises awareness of immigrant contributions in the United States and fosters appreciation of the arts and sciences. I had the opportunity at ForumOne to do a majority of the front-end WordPress development for the site, where I crafted components, animations, and interactions.
                    </p>
                </div>
              </div>
              <div className="right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://vilcek.org"
                  className="link"
                >
                  vilcek.org
                  </a>
                <ul className="tags">
                  <li>WordPress</li>
                  <li>JavaScript</li>
                  <li>HTML/SCSS</li>
                </ul>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                href="https://vilcek.org"
                rel="noopener noreferrer"
                className="website-link"
              >
                View Website
                </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
            <div className="overflow-wrapper">
              <div className="section-media">
                <Image alt="Vilcek Pot" filename="vilcek.png" />
              </div>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-info">
              <div className="left">
                <div className="title">Gnarly Knots</div>
                <div className="subtitle">
                  Gourmet Pretzel Company
                  </div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    A wonderful freelance opportunity that I acquired through a World of Warcraft friend, Gnarly Knots is one of the best Pretzel joints in the midwest. I was bestowed the great task of redesigning and redeveloping their existing website to WordPress. It was a resounding success, with a heavy focus on imagery and typography.
                    </p>
                </div>
              </div>
              <div className="right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://gnarlyknots.com"
                  className="link"
                >
                  gnarlyknots.com
                  </a>
                <ul className="tags">
                  <li>WordPress</li>
                  <li>JavaScript</li>
                  <li>Web Design</li>
                  <li>(S)CSS</li>
                </ul>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://gnarlyknots.com"
                className="website-link"
              >
                View Website
                </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
            <div className="overflow-wrapper">
              <div className="section-media">
                <Image alt="Gnarly Knots Pretzel Co" filename="pretzel.png" />
              </div>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-info">
              <div className="left">
                <div className="title">Howard Hughes Medical Institute</div>
                <div className="subtitle">
                  Empowering Educators. Inspiring Students.
                  </div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    While working at ForumOne, I worked with a team at the Howard Hughies Medical Institute's Biointeractive.org, a website/images/web tool, with over a million page views. They bring together a variety of case studies, high-quality videos, and interactive media that are designed to connect students to big ideas in biology and promote engagement with science. There were over 100 styled components with the website being made in Drupal.
                    </p>
                </div>
              </div>
              <div className="right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="biointeractive.org"
                  className="link"
                >
                  biointeractive.org
                  </a>
                <ul className="tags">
                  <li>Drupal 8</li>
                  <li>JavaScript</li>
                  <li>Twig/YAML</li>
                  <li>SCSS</li>
                </ul>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://biointeractive.org"
                className="website-link"
              >
                View Website
                </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
            <div className="overflow-wrapper">
              <div className="section-media">
                <div className="phone-screen">
                  <Image alt="sexy ad" filename="hhmi.png" />
                </div>
              </div>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-info">
              <div className="left">
                <div className="title">Amanda Foundation</div>
                <div className="subtitle">
                  A Mission Driven Adoption Shelter
                  </div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    An animal shelter that rises above the rest and aims to end pet homelessness. The only animal charity in LA that owns and operates a full service animal hospital. Since 1976, they’ve rescued and placed 10,000s of dogs and cats into loving homes. I was honored with designing and developing the site - striving for a more colorful contemporary look.
                    </p>
                </div>
              </div>
              <div className="right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://amandafoundation.org"
                  className="link"
                >
                  amandafoundation.org
                  </a>
                <ul className="tags">
                  <li>Squarespace</li>
                  <li>Web Design</li>
                  <li>(S)CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className="links">
              <a
                href="https://amandafoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
              >
                View Website
                </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
            <div className="overflow-wrapper">
              <div className="section-media">
                <Image alt="Amanda Foundation Dog" filename="amanda-dog.png" />
              </div>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-info">
              <div className="left">
                <div className="title">Fudtruk</div>
                <div className="subtitle">
                  Lehigh Valley's Freshest Food Truck
                  </div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    The FudTruk is a mobile culinary unit on Lehigh University Campus that uses locally sourced food to make incredible sandwiches, breakfast, lunch foods and quality dishes. I completely branded them, from their logo, to their color scheme, to the vinyl wrap for the truck, all incorporated in their website I made for them.
                    </p>
                </div>
              </div>
              <div className="right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://fudtruk.lehigh.edu"
                  className="link"
                >
                  fudtruk.lehigh.edu
                  </a>
                <ul className="tags">
                  <li>Drupal 7</li>
                  <li>Web Design</li>
                  <li>Graphic Design</li>
                  <li>Photo + Video</li>
                </ul>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://fudtruk.lehigh.edu"
                className="website-link"
              >
                View Website
                </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
            <div className="overflow-wrapper">
              <div className="section-media">
                <Image alt="Fudtruk Truck" filename="fudtruk.png" />
              </div>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-info">
              <div className="left">
                <div className="title">Keystone Munitions</div>
                <div className="subtitle">
                  Premium Ammunition
                  </div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    You need solid, accurate, reliable ammunition? Keystone Munitions is where you go. Their passion is all about feeding your firearms with quality bullets. Their website has been a resounding success, with their products now being available in more than 20 locations and counting.
                    </p>
                </div>
              </div>
              <div className="right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://keystonemunitions.com"
                  className="link"
                >
                  keystonemunitions.com
                  </a>
                <ul className="tags">
                  <li>Drupal 8</li>
                  <li>Twig/YAML</li>
                  <li>SCSS</li>
                </ul>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
                href="http://keystonemunitions.com"
              >
                View Website
                </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
            <div className="overflow-wrapper">
              <div className="section-media">
                <Image alt="astral image" filename="keystone.png" />
              </div>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-info">
              <div className="left">
                <div className="title">Astral Air Parts</div>
                <div className="subtitle">
                  Aircraft Part Supplier
                  </div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    Astral Air Products is a vendor of strong, high-quality fasteners, screws, and bolts that can be found in dozens of major products across many industries. Some of these include space shuttles, commercial aircrafts, jets and cars. A small but mighty industry, these little nuts are the glue that holds America tight.
                    </p>
                </div>
              </div>
              <div className="right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://astralairparts.com"
                  className="link"
                >
                  astralairparts.com
                  </a>
                <ul className="tags">
                  <li>Drupal 7</li>
                  <li>Web Design</li>
                  <li>Graphic Design</li>
                  <li>Photo + Video</li>
                </ul>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                className="website-link"
                rel="noopener noreferrer"
                href="http://astralairparts.com"
              >
                View Website
                </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
            <div className="overflow-wrapper">
              <div className="section-media">
                <Image alt="astral image" filename="astral.png" />
              </div>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-info">
              <div className="left">
                <div className="title">Lehigh's College of Art & Design</div>
                <div className="subtitle">
                  Lehigh's Arts, Architecture &amp; Design Department
                  </div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    As an alumni from Lehigh University, I was asked to do the design and development for the university’s new website, highlighting the modern programs and facilities that would attract students to the synergy of Lehigh's programs. A cleaner, contemporary design with flat colors and legible text allows for a neater and more comprehensible design.
                    </p>
                </div>
              </div>
              <div className="right">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://aad.lehigh.edu"
                  className="link"
                >
                  aad.lehigh.edu
                  </a>
                <ul className="tags">
                  <li>Drupal 8</li>
                  <li>Pattern Lab</li>
                  <li>Twig/YAML</li>
                  <li>SCSS</li>
                </ul>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                className="website-link"
                rel="noopener noreferrer"
                href="https://aad.lehigh.edu"
              >
                View Website
                </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
            <div className="overflow-wrapper">
              <div className="section-media">
                <Image alt="Lehigh Arts, Architecture and Design" filename="aad.jpg" />
              </div>
            </div>
          </Tilt>
        </div>
      </section>
      <section id="designs" className="designs">
        <div className="section-text">
          <h3 className="section-title">Web &amp; Interface Design</h3>
          <p className="section-desc">
            I craft and activate brands with cultural insight, user data, strategic vision and attentive attention to aesthetics.
            </p>
        </div>
        <div className="section-content">
          <Tilt className="tilt">
            <div className="section-media">
              <Image alt="Frost Website" filename="frostshot.png" />
            </div>
            <div className="section-info">
              <div className="title">Frost</div>
              <div className="subtitle">Financial Stock App</div>
              <div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    Frost is a financial investment tool made to simplify the experience of purchasing the best stocks out there. I was graced with the opportunity to brand them completely, from logo to website and colors. The designs depicted are from their soon coming site.
                    </p>
                </div>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dribbble.com/sathyaram">View Designs</a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-media">
              <Image alt="Lehigh Arts College Shot" filename="aadshot.jpeg" />
            </div>
            <div className="section-info">
              <div className="title">Lehigh AAD</div>
              <div className="subtitle">Arts, Architecture &amp; Design</div>
              <div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    I worked extensively with the different department heads within the College of Arts and Sciences to create a new web experience that highlighted their intricate programs and facilities. These internal designs are a testament to that.
                    </p>
                </div>
              </div>
            </div>
            <div className="links">
              <a href="https://dribbble.com/shots/5383863-Art-Architecture-and-Design-Website"
                rel="noopener noreferrer">View Designs</a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-media">
              <Image alt="Lehigh Connect Portal" filename="portalshot.jpeg" />
            </div>
            <div className="section-info">
              <div className="title">Connect Portal</div>
              <div className="subtitle">Lehigh University's Campus Hub</div>
              <div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    While working at Lehigh University, I was in charge of the Portal software they used which everyone logged in on to check the campus news and facilities. Being a designer, I advocated for a full redesign of the look of the portal to create a more contemporary modern look - it was graced with a best portal design award.
                    </p>
                </div>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dribbble.com/shots/5308923-Lehigh-Portal"
              >
                View Designs
                  </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className="section-media">
              <Image alt="Lehigh Engineering Shot" filename="engshot.jpeg" />

            </div>
            <div className="section-info">
              <div className="title">Lehigh Engineering</div>
              <div className="subtitle">
                P.C Rossin College of Engineering
                </div>
              <div>
                <div className="description">
                  <button onClick={closeDesc}>✕</button>
                  <p>
                    One of my most ambitious and exciting web designs - the college of Engineering asked for a full redesign of the website stratosphere. A massive undertaking that proved fruitful and carefully methodical.
                    </p>
                </div>
              </div>
            </div>
            <div className="links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dribbble.com/shots/5384304-Lehigh-Engineering-Website"
              >
                View Designs
                  </a>
              <button onClick={openDesc} className="read-more">
                Read More
                </button>
            </div>
          </Tilt>
        </div>
      </section>
      <section id="projects" className="projects">
        <div className="section-text">
          <h3 className="section-title">Projects</h3>
          <p className="section-desc">I'm a passionate nerd that toys around with new tech while making interesting things for the internet!</p>
        </div>
        <div className="section-content">
          <Tilt className="tilt">
            <div className="tech">React</div>
            <div className="title">Exhaust Notes</div>
            <div className="subtitle">A Car Engine Sound Library</div>
            <a
              href="https://exhaustnotes.co"
              rel="noopener noreferrer"
              target="_blank"
              className="url"
            >
              exhaustnotes.co
              </a>
            <div className="laptop">
              <div className="laptop-top">
                <Image alt="exhaust notes website" filename="exhaust.jpg" />

              </div>
              <div className="laptop-base"></div>
            </div>
            <div className="section-media"></div>
          </Tilt>
          <Tilt className="tilt">
            <div className="tech">React</div>
            <div className="title">That's A Cool Website</div>
            <div className="subtitle">A Cool Collection of Websites</div>
            <a
              href="https://thatsacoolwebsite.com"
              rel="noopener noreferrer"
              target="_blank"
              className="url"
            >
              thatsacoolwebsite.com
              </a>
            <div className="laptop">
              <div className="laptop-top">
                <Image alt="cool website" filename="cool.jpg" />
              </div>
              <div className="laptop-base"></div>
            </div>
            <div className="section-media"></div>
          </Tilt>
          <Tilt className="tilt">
            <div className="tech">JavaScript</div>
            <div className="title">Oscars Trivia</div>
            <div className="subtitle">
              A JavaScript Quiz of 2018’s Oscars Trivia
              </div>
            <a
              href="https://oscarstrivia.com"
              rel="noopener noreferrer"
              target="_blank"
              className="url"
            >
              oscarstrivia.com
              </a>
            <div className="laptop">
              <div className="laptop-top">
                <Image alt="Oscars website" filename="oscars.jpg" />

              </div>
              <div className="laptop-base"></div>
            </div>
            <div className="section-media"></div>
          </Tilt>
          <Tilt className="tilt">
            <div className="tech">Graphic Design</div>
            <div className="title">Poke Logos</div>
            <div className="subtitle">Pokemon as branded companies!</div>
            <a
              href="https://dribbble.com/sathyaram/projects/3425099-Pok-Logos"
              rel="noopener noreferrer"
              target="_blank"
              className="url"
            >
              View All Logos
              </a>
            <div className="section-media">
              <div className="section-image">
                <Image alt="sexy ad" filename="surf.jpeg" />
              </div>
              <div className="section-image">

                <Image alt="sexy ad" filename="sunkern.jpeg" />
              </div>

              <div className="section-image">

                <Image alt="sexy ad" filename="houndoom.jpeg" />
              </div>

              <div className="section-image">

                <Image alt="sexy ad" filename="honey.jpeg" />
              </div>

            </div>
          </Tilt>
        </div>
      </section>
      <section id="photography" className="photography">
        <div className="section-text">
          <h3 className="section-title">Photography</h3>
          <p className="section-desc">I'm an award winning photographer accomplished in a variety of disciplines with a focus on people, specifically portraits and lifestyle.</p>
        </div>
        <div className="section-content">
          <Tilt className="tilt">
            <AniLink cover direction="right" to="/portraits" >
              <div className="photography-name">Portraits</div>
              <Image alt="Chance Portrait" filename="chance-two.jpg" />
            </AniLink>
          </Tilt>
          {/* <Tilt className="tilt">
            <AniLink cover direction="right" to="/lifestyle">
              <h5>Lifestyle</h5>
              <img
                alt="me"
                src="https://sathyaram.com/images/rachel-americana.jpg"
              />
            </AniLink>
          </Tilt> */}
          <Tilt className="tilt">
            <AniLink cover direction="right" to="/cosplay">
              <div className="photography-name">Cosplay</div>
              <Image alt="Cosplay Holly Peppermint" filename="hollypeppermint.jpg" />
            </AniLink>
          </Tilt>
          {/* <Tilt className="tilt">
            <h5>Nature</h5>
            <img
              alt="me"
              src="https://live.staticflickr.com/577/22402285915_8e46315458_n.jpg"
            />
          </Tilt> */}
        </div>
      </section>
      <section id="testimonials" className="testimonials">
        <div className="section-text">
          <h3 className="section-title">Real folks. Real results.</h3>
          <p className="section-desc">
            I've worked with many brands, enterprises and individuals and it seems people like my work.
            </p>
        </div>
        <div className="testimonial-content">
          <div className="testimonial">
            <div className="quote">
              <div className="quote-text">
                Sathya was a pleasure to work with! Prompt, fun, engaging and professional.
                </div>
              <div className="quote-cite">Thaisi Da Silva</div>
              <div className="quote-role">Director, Reporting Labs</div>
              <div className="quote-company">PBS NewsHour</div>
            </div>
            <span>PBS NewsHour</span>
            <svg viewBox="0 0 400 358">
              <g>
                <path
                  d="M392.8,52.8c-0.7-6.5-2.4-12.3-4.6-17.4c-4.4-10.1-11.2-18.2-19.7-24.3C360,4.9,349.6,0.6,335.7,0h-3.1v0
		c-9.1,0.3-16.7,2.4-23.3,5.5c-6.6,3.1-12.1,7.1-16.9,11.9c-4.8,4.8-8.8,10.4-11.8,16.9c-3.1,6.6-5.1,14.3-5.4,23.4v3.1
		c0.6,13.9,4.9,24.4,11,32.9c6.1,8.6,14.2,15.3,24.2,19.7c5,2.2,10.8,4,17.3,4.7c6.9,0.7,14.3,0.2,20.1-1.2
		c11.7-2.9,20.8-8.5,28.1-15.8c7.3-7.3,13-16.5,15.7-28.2C392.9,66.9,393.6,59.7,392.8,52.8z M348,72c-1.4,3-4.4,4.1-9.1,3.8v16.8
		h-23.4V75.1c-6.6-1.1-11.1-4.1-14.4-8.6c-3.2-4.4-5.1-10.9-4.1-18.3c0.9-6.6,4-11.5,8-15c3.1-2.7,6.9-4.7,11.6-5.7
		c4.1-0.9,9.4-0.7,14.6-0.7l9.3,0c4.8,11,9.7,21.8,14.5,32.8h-6.3v6.5C348.6,68.4,348.7,70.4,348,72z M367.4,72
		c-1.4,3-4.1,4.2-9,3.8v16.8h-9.3V75.8c4.4,0,7.7-0.7,8.8-3.9c1.2-3.2,0.2-8.1,0.5-12.2h6.5c-4.6-10.9-9.5-21.8-14.3-32.7v0
		c0,0-0.1-0.1,0-0.1h9.3c4.8,10.9,9.6,21.9,14.3,32.8H368v6.4C368,68.3,368.1,70.4,367.4,72z"
                />
                <path
                  d="M335.2,43.2L335.2,43.2c-1.7,0.2-3.1,1-3.9,2c-0.9,1-1.6,2.5-1.5,4.3c0.1,1.8,0.8,3.1,1.8,4.1c1,0.9,2.4,1.7,4.2,1.7
		c3,0,5.8-2.3,6-5.5c0.1-1.8-0.4-3.2-1.1-4.2C339.7,44.3,337.7,43,335.2,43.2z"
                />
              </g>
              <g>
                <path
                  d="M40.4,3.8H0.1v109H24V70.3h17.5c22.8,0,40.2-7.9,40.2-33.4C81.7,11.1,62.9,3.8,40.4,3.8z M39.9,50H24V24.2h12.3
		c9.2,0,20.5,1.5,20.5,12.8C56.8,47.1,48.4,50,39.9,50z"
                />
              </g>
              <g>
                <path
                  d="M154,55.9v-0.3c11.2-3.5,18.7-11.9,18.7-24C172.7,7.8,152,3.8,133,3.8H92.5v109H137c19.3,0,40.8-7.5,40.8-30.3
		C177.8,68.3,168.3,57.7,154,55.9z M116.5,24.2h16.3c7.5,0,16.1,2.3,16.1,11.4c0,8.8-7.7,11.9-15,11.9h-17.3V24.2z M137.9,92.5
		h-21.5V67.7h18.1c7.8,0,19.3,1.7,19.3,12C153.9,89.3,145.4,92.5,137.9,92.5z"
                />
              </g>
              <path
                className="st0"
                d="M244.5,30.5c-3.8-4.9-11.5-7.2-17.3-7.2c-6.7,0-16.1,3.1-16.1,11.2c0,19.9,50,7.1,50,45.3
	c0,24.3-19.5,35.9-41.9,35.9c-14,0-26.2-4.2-36.5-13.7l17-18.8c4.9,6.5,12.9,10.3,20.9,10.3c7.8,0,16.6-3.7,16.6-11.4
	c0-20-50.9-9.2-50.9-45.6c0-23.2,20.1-35.4,41.4-35.4c12.3,0,24.1,3.2,33.3,11.4L244.5,30.5z"
              />
              <polygon
                id="polygon6"
                className="st0"
                points="0,132.2 30.5,132.2 73.7,203.2 74,203.2 74,132.2 96.4,132.2 96.4,234.4 67.1,234.4 
	22.7,161.7 22.4,161.7 22.4,234.4 0,234.4 "
              />
              <polygon
                id="polygon8"
                className="st0"
                points="109.4,132.2 178.5,132.2 178.5,153 131.8,153 131.8,172.1 175.9,172.1 175.9,192.8 
	131.8,192.8 131.8,213.6 181.1,213.6 181.1,234.4 109.4,234.4 "
              />
              <polygon
                id="polygon10"
                className="st0"
                points="256.3,163.7 256,163.7 233.6,234.4 214.3,234.4 184.1,132.2 208.6,132.2 224.8,197.7 
	225.1,197.7 246.4,132.2 267.2,132.2 288.3,199.5 288.6,199.5 305.7,132.2 328.4,132.2 298.7,234.4 278.7,234.4 "
              />
              <path
                id="path12"
                className="st0"
                d="M384.5,157.2c-3.6-4.6-10.8-6.8-16.2-6.8
	c-6.3,0-15.1,2.9-15.1,10.5c0,18.6,46.9,6.6,46.9,42.4c0,22.8-18.3,33.6-39.2,33.6c-13.1,0-24.6-3.9-34.2-12.8l16-17.6
	c4.6,6.1,12.1,9.7,19.5,9.7c7.3,0,15.5-3.5,15.5-10.7c0-18.8-47.7-8.7-47.7-42.7c0-21.8,18.8-33.2,38.8-33.2
	c11.5,0,22.6,3,31.2,10.7L384.5,157.2z"
              />
              <polygon
                id="polygon14"
                className="st0"
                points="0,253.3 22.4,253.3 22.4,291.4 66,291.4 66,253.3 88.4,253.3 88.4,355.4 66,355.4 
	66,311.3 22.4,311.3 22.4,355.4 0,355.4 "
              />
              <g>
                <path
                  d="M151.5,250.7c-31.8,0-54.9,20.9-54.9,53.7s23.1,53.7,54.9,53.7c31.8,0,54.9-20.9,54.9-53.7
		C206.4,271.6,183.3,250.7,151.5,250.7z M151.5,337.3c-19.1,0-31.6-13.9-31.6-32.9c0-19,12.5-32.9,31.6-32.9
		c19.1,0,31.6,13.8,31.6,32.9C183.1,323.4,170.6,337.3,151.5,337.3z"
                />
              </g>
              <path
                className="st0"
                d="M300.1,316.1c0,24.1-14.7,42-42.8,42c-28.3,0-43-17.9-43-42v-62.8h22.4v61.9c0,12.6,8.6,22.1,20.6,22.1
	c11.8,0,20.4-9.5,20.4-22.1v-61.9h22.4V316.1z"
              />
              <g>
                <path
                  d="M367.9,312.3c14.4-2.6,22-13.7,22-28c0-23.8-17.5-31-38.4-31h-39.4v102.1h22.4v-40.8h11.1l21.3,40.8h26.9L367.9,312.3z
		 M347.8,295.6h-13.2v-23.2h14.7c8.2,0,17.4,1.6,17.4,11.8C366.7,295.3,356,295.6,347.8,295.6z"
                />
              </g>
            </svg>
          </div>
          <div className="testimonial">
            <div className="quote">
              <div className="quote-text">
                Sathya executed on our jumble of thoughts and made a beautiful branding scheme and website.
                </div>
              <div className="quote-cite">David Joseph</div>
              <div className="quote-role">Executive Director</div>
              <div className="quote-company">Sodexo</div>
            </div>
            <span>Sodexo</span>
            <svg viewBox="0 0 162 53">
              <path
                d="M77.1,33l-1.8,8.9c-0.8,3.6-3,6-7.4,6c-5.1,0-6.5-3.2-5.4-7.6C64.1,34,69.3,32.1,77.1,33 M85.2,20.2l-5.4,0.3L78,29.3
	c-2.1-0.1-2.7-0.1-5.2-0.1c-7.7,0-14.4,3.2-16.1,10.8c-1.6,6.8,2.3,12.1,10.7,12.1c8.6,0,12.4-4.5,13.8-10.9L85.2,20.2z"
              />
              <path
                d="M26,33.4c-8-0.7-14.9-0.1-15,2.6c-0.2,4.1,13.2,0.5,12.9,8c-0.4,11-18.9,8.5-23.5,7.1l0.8-3.3c7.9,1.3,16.3,1.4,16.4-3
	c0.2-4.6-13.2-0.5-12.9-8c0.2-5.6,8.6-8.6,22.3-6.6L26,33.4"
              />
              <path
                d="M47.6,40.9c-1.2,4.6-4.8,7.5-9.1,7.5c-4.5,0-6.6-2.6-5.4-7.5c1.2-4.6,4.8-7.7,9.2-7.7C46.6,33.2,48.7,36.3,47.6,40.9
	 M43,29.4c-7.9,0-14.3,4.6-15.9,11.4c-1.6,6.8,2.7,11.4,10.6,11.4c7.9,0,14.3-4.6,15.9-11.4C55.2,34,50.9,29.4,43,29.4z"
              />
              <path d="M134.8,52.2h-6.9c-4.2-3.9-12.2-13-18.1-22.6h5.1C120.4,37.4,134.8,52.2,134.8,52.2" />
              <polyline
                points="142,7.4 145.2,0.8 146.1,7.5 152.6,5.2 148,11 152.9,14.8 146.4,15.3 146,22.3 142.4,17.2 137,22.1 139,15.2 
	132.7,14.3 138.9,10.8 136.3,4.8 142,7.4 "
              />
              <path
                d="M155.5,40.9c-1.2,4.7-4.9,7.6-9.3,7.6c-4.6,0-6.7-2.7-5.4-7.6c1.2-4.7,4.9-7.8,9.3-7.8C154.5,33.1,156.6,36.3,155.5,40.9
	 M150.8,29.3c-8.1,0-14.6,4.7-16.2,11.6c-1.6,7,2.7,11.6,10.8,11.6c8.1,0,14.6-4.7,16.2-11.6C163.2,34,158.8,29.3,150.8,29.3z"
              />
              <path d="M104.5,50.3c13-7.2,24.4-18.4,32.4-28C131.2,40.4,117.2,50.1,104.5,50.3" />
              <path
                d="M99.4,32.8c2.5,0,3.9,0.9,3.9,2.6c0,4.6-9,4.3-12.9,3.5C91.7,35.5,94.8,32.8,99.4,32.8 M108.6,35.2c0-3.3-2.7-5.8-8.7-5.8
	c-9.8,0-16.1,6.3-16.1,14.2c0,5.1,4.2,9.3,11.9,9.3c5.3,0,8.8-2.6,8.8-2.6c-6.7,0.7-15,0-15-7.2c0-0.3,0-0.6,0-0.9
	C98.7,44.1,108.6,41.8,108.6,35.2z"
              />
            </svg>
          </div>
          <div className="testimonial">
            <div className="quote">
              <div className="quote-text">
                Easily one of my best employee's and a genuine creative force.
                </div>
              <div className="quote-cite">Greg Skinner</div>
              <div className="quote-role">
                Assistant Director of Enterprise Systems
                </div>
              <div className="quote-company">Lehigh University</div>
            </div>
            <span>Lehigh University</span>
            <svg viewBox="0 0 256.2 71.3">
              <path
                className="st0"
                d="M11.4,54.2v0.6l0.8,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4v5.9c0,3-1.8,3.8-3.8,3.8
	c-2.4,0-3.8-0.8-3.8-3.4v-6.3c0-0.7,0-1.2,0.2-1.4c0.1-0.2,0.3-0.3,0.8-0.3l0.9-0.1v-0.6c-1,0-1.8,0.1-2.7,0.1c-0.9,0-1.8,0-2.7-0.1
	v0.6L3,54.9c0.4,0,0.7,0.1,0.8,0.3C3.9,55.4,4,55.9,4,56.6V63c0,3.4,1.8,4.3,5,4.3c3.7,0,5.2-1.6,5.2-5.5v-5.3c0-0.7,0-1.2,0.2-1.4
	c0.1-0.2,0.3-0.2,0.8-0.3l0.8-0.1v-0.6c-0.8,0-1.5,0.1-2.2,0.1C12.9,54.3,12.2,54.2,11.4,54.2"
              />
              <path
                className="st0"
                d="M42.2,54.2v0.6l0.8,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4V65h-0.1l-8.8-10.8c-0.3,0-0.7,0.1-1,0.1
	c-0.7,0-1.4,0-2.2-0.1v0.6l0.8,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4
	c-0.1,0.2-0.3,0.2-0.8,0.3l-0.8,0.1V67c0.7,0,1.5-0.1,2.1-0.1c0.7,0,1.4,0,2.2,0.1v-0.6l-0.8-0.1c-0.4,0-0.7-0.1-0.8-0.3
	c-0.1-0.2-0.2-0.7-0.2-1.4v-8.5l0,0L43.2,67l1.7,0.3c0-0.2-0.1-0.5-0.1-0.7V56.5c0-0.7,0-1.2,0.2-1.4c0.1-0.2,0.3-0.2,0.8-0.3
	l0.8-0.1v-0.6c-0.8,0-1.5,0.1-2.2,0.1C43.7,54.3,42.9,54.2,42.2,54.2"
              />
              <path
                className="st0"
                d="M62.7,54.2v0.6l0.9,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4
	c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1v-0.6l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3
	c-0.1-0.2-0.2-0.7-0.2-1.4v-8.2c0-0.7,0-1.2,0.2-1.4c0.1-0.2,0.3-0.3,0.8-0.3l0.9-0.1V54c-1,0-1.8,0.1-2.7,0.1
	C64.5,54.3,63.7,54.2,62.7,54.2"
              />
              <path
                className="st0"
                d="M93,54.2v0.6l1,0.1c0.4,0,0.6,0.1,0.6,0.5c0,0.2-0.1,0.4-0.2,0.7L91,64.8l-3.6-9.3c0-0.1,0-0.1,0-0.2
	c0-0.3,0.3-0.4,0.6-0.4l1-0.1v-0.6c-0.8,0-1.6,0.1-2.4,0.1s-1.6,0-2.4-0.1v0.6l0.7,0.1c0.3,0,0.6,0.2,0.8,0.8l3.4,8.5
	c0.4,0.9,0.8,1.9,1.1,3h0.9c0.3-1.1,0.7-2.2,1.2-3.2l3.2-7.7c0.4-0.9,0.6-1.3,1-1.3l0.6-0.1v-0.6c-0.7,0-1.3,0.1-2,0.1
	C94.3,54.3,93.6,54.2,93,54.2"
              />
              <path
                className="st0"
                d="M121.9,66c-0.3,0.2-2.2,0.2-3.7,0.2c-0.5,0-1,0-1.5-0.1V61c0.6-0.1,1.2-0.1,2.1-0.1c1.1,0,1.7,0.1,1.9,0.2
	c0.1,0.1,0.1,0.2,0.1,0.5l0.1,1.1h0.6c0-0.7-0.1-1.4-0.1-2c0-0.7,0-1.4,0.1-2.1h-0.6l-0.1,1c0,0.2-0.1,0.4-0.1,0.5
	c-0.2,0.1-0.8,0.2-1.9,0.2c-0.9,0-1.5,0-2.1-0.1v-4.9c0.5-0.3,1-0.3,1.5-0.3c1.2,0,2.6,0,3.6,0.4c0.1,0.1,0.2,0.3,0.2,0.5v1.2h0.6
	c0-0.9,0.1-2,0.3-2.8c-0.7,0-1.5-0.1-2.4-0.1c-1,0-2.7,0.1-4.3,0.1c-0.5,0-1,0-1.6,0c-0.5,0-1,0-1.5,0v0.6L114,55
	c0.4,0,0.7,0.1,0.8,0.3s0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4c-0.1,0.2-0.3,0.2-0.8,0.3l-0.7,0.1V67c0.7,0,1.3-0.1,2-0.1
	c1.1,0,2.6,0,4,0.1h0.6c1.2,0,2.3,0,3-0.1c0-1,0.1-2.1,0.3-3h-0.6C122.4,65,122.2,65.8,121.9,66"
              />
              <path
                className="st0"
                d="M146.4,60.5c1.8-0.4,3.6-1.5,3.6-3.5c0-1.3-0.7-2.8-3.5-2.8h-0.3c-1.1,0-2.1,0.1-3.2,0.1c-1.1,0-2.1,0-3.1-0.1
	v0.6l0.8,0.1c0.4,0,0.7,0.1,0.8,0.3s0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67
	c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1v-0.6l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3c-0.1-0.2-0.2-0.7-0.2-1.4V55c0.5-0.1,1-0.2,1.9-0.2
	c1.4,0,2.9,0.5,2.9,2.5c0,1.4-1.1,2.3-2.4,2.6c-0.4,0.1-0.8,0.1-1.1,0.1c-0.2,0-0.3,0-0.5,0l-0.1,0.2c0.3,0.4,0.7,0.7,1,1.1l3.4,4.5
	c0.2,0.3,0.5,0.6,0.8,1c0.4,0,0.8-0.1,1.2-0.1s0.8,0,1.3,0.1v-0.6c-0.4,0-0.8-0.1-1.1-0.5L146.4,60.5z"
              />
              <path
                className="st0"
                d="M172.1,59.6c-2.3-0.3-3-1-3-2.3c0-1.8,1.4-2.7,2.7-2.7c0.7,0,1.5,0.1,2,0.4c0.7,0.4,0.8,0.6,0.8,1.1l0.1,1h0.6
	c0-0.9,0.1-1.7,0.3-2.6c-0.8-0.3-1.9-0.8-3.3-0.8c-2.2,0-4.7,1.3-4.7,4.2c0,1.9,1.1,2.8,4,3.1c1.9,0.2,3.2,0.7,3.2,2.5
	c0,1.8-1.6,2.8-3.3,2.8c-1.4,0-2.9-0.7-3-1.5l-0.1-1.2h-0.6v0.7c0,0.7,0,1.4-0.1,2.1c0.6,0.3,1.9,0.7,3.1,0.7c2.7,0,5.5-1.5,5.5-4.6
	C176.3,60.5,174.7,59.9,172.1,59.6"
              />
              <path
                className="st0"
                d="M192.6,54.2v0.6l0.9,0.1c0.4,0,0.7,0.1,0.8,0.3c0.1,0.2,0.2,0.7,0.2,1.4v8.2c0,0.7,0,1.2-0.2,1.4
	c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1v-0.6l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3
	c-0.1-0.2-0.2-0.7-0.2-1.4v-8.2c0-0.7,0-1.2,0.2-1.4c0.1-0.2,0.3-0.3,0.8-0.3l0.9-0.1V54c-1,0-1.8,0.1-2.7,0.1
	C194.4,54.3,193.5,54.2,192.6,54.2"
              />
              <path
                className="st0"
                d="M220.8,54.3h-2.7c-1.3,0-2.6-0.1-4-0.1c0.1,1,0.1,2,0.1,3h0.6l0.1-1.4c0-0.4,0.2-0.6,0.7-0.6h2.8
	c0.1,0.6,0.1,1.1,0.1,1.8v7.8c0,0.7,0,1.2-0.2,1.4c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1
	v-0.5l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3c-0.1-0.2-0.2-0.7-0.2-1.4v-7.8c0-0.7,0-1.3,0.1-1.8h2.8c0.6,0,0.7,0.2,0.7,0.6l0.1,1.4h0.6
	c0-1,0-2,0.1-3c-0.7,0-1.3,0-2,0C222.1,54.3,221.5,54.3,220.8,54.3"
              />
              <path
                className="st0"
                d="M249.1,57.7l-1.9,3l-2.6-4.8c-0.2-0.4-0.5-0.8-0.8-1.2s-0.5-0.7-0.9-0.7h-0.1l-2.1,0.4V55l0.5,0.1
	c0.5,0,1.4,0.7,2.3,2.4l2.3,4c0.1,0.2,0.2,0.4,0.2,0.7v2.6c0,0.7,0,1.2-0.2,1.4c-0.1,0.2-0.3,0.3-0.8,0.3l-0.9,0.1V67
	c1,0,1.8-0.1,2.7-0.1c0.8,0,1.7,0,2.7,0.1v-0.5l-0.9-0.1c-0.4,0-0.7-0.1-0.8-0.3c-0.1-0.2-0.2-0.7-0.2-1.4v-2.4c0-0.4,0-0.9,0.3-1.4
	c0.8-1.6,3-4.7,4.5-6.5v-0.3h-1.5C250.5,55.3,249.8,56.5,249.1,57.7"
              />
              <path
                className="st0"
                d="M36.4,35.4h-2l-0.8,3.1c-0.3,1.3-0.7,3.5-1.3,4c-1.1,1-8.7,1.2-13.9,1.2c-1.7,0-3.5-0.1-5.3-0.5V10.4
	c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2c-3.1,0-6-0.1-9.3-0.2v1.9l3,0.2
	c1.5,0.1,2.3,0.3,2.6,0.9C6.9,6.4,7.1,8,7.1,10.4v29.8c0,1.7-0.5,3.1-1.6,3.7l-1.9,1v1.4c1.6-0.1,3.2-0.2,5.3-0.2
	c3.9,0,8,0.1,13.7,0.2h1.9c4,0,8-0.1,10.4-0.2C35.5,43,36,38.8,36.4,35.4"
              />
              <path
                className="st0"
                d="M69.4,42.9c-1.1,0.6-7.5,0.8-12.7,0.8c-1.7,0-3.5-0.1-5.3-0.5V25.6c1.9-0.2,4.3-0.2,7.3-0.2
	c3.8,0,6,0.3,6.7,0.7c0.3,0.2,0.4,0.8,0.5,1.6l0.3,3.7h1.9c-0.1-2.3-0.2-4.6-0.2-7c0-2.3,0.1-4.7,0.2-7.3h-1.9l-0.3,3.3
	c-0.1,0.8-0.2,1.4-0.5,1.6c-0.7,0.4-2.8,0.7-6.7,0.7c-3,0-5.3-0.1-7.3-0.2V5.8c1.8-0.4,3.6-0.5,5.3-0.5c4,0,9,0.1,12.3,1.3
	c0.5,0.2,0.6,0.9,0.6,1.7v4.1h2.2c0-3.2,0.3-6.8,1-9.5c-2.5-0.1-5.3-0.2-8.1-0.2c-3.6,0-9.4,0.2-14.8,0.2c-1.8,0-3.6-0.1-5.3-0.1
	c-1.8-0.1-3.5-0.1-5.3-0.1v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v28.2c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.8-2.6,0.9L40,44.4v1.9c2.3-0.1,4.3-0.2,6.7-0.2c3.9,0,8.9,0.1,13.7,0.2h1.9c4,0,8-0.1,10.4-0.2
	c0-3.4,0.4-7.3,1-10.3h-2.2C71.2,39.6,70.4,42.4,69.4,42.9"
              />
              <path
                className="st0"
                d="M109.5,2.7v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v11.2c-0.8,0.1-2.4,0.1-5.2,0.1H95.8
	c-2.8,0-4.5-0.1-5.2-0.1V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	c-3.1,0-6-0.1-9.3-0.2v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v28.2c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7v-14c0.8-0.1,2.4-0.1,5.2-0.1h14.7c2.8,0,4.5,0.1,5.2,0.1v14c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	C115.7,2.9,112.8,2.8,109.5,2.7"
              />
              <path
                className="st0"
                d="M133.4,2.7v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v28.2c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	C139.6,2.9,136.6,2.8,133.4,2.7"
              />
              <path
                className="st0"
                d="M192.4,29.3c-2.5,0-5.1-0.1-7.7-0.1V31l5.2,0.4c1.6,0.1,2.1,0.8,2.1,2.2V40c0,1.6-0.1,1.9-0.3,2.6
	c-0.4,1.1-4,2.2-8.8,2.2c-12.9,0-20.2-9-20.2-21.5c0-11.2,6.2-19,18.2-19c4.1,0,6.8,0.4,8.8,1.1c3,1.1,5.2,2.1,5.2,5v3.3h1.9
	c0-3.3,0.5-6.6,1.3-9.5c-2.9-0.8-7.8-2.6-15.6-2.6c-15.1,0-26.5,8.9-26.5,22.7c0,15.8,11.3,23.1,25.3,23.1c4.3,0,11.1-1.6,16.5-3.2
	V33.7c0-1.8,0-2.1,0.7-2.3l1.8-0.6l-0.2-1.6C197.6,29.2,195,29.3,192.4,29.3"
              />
              <path
                className="st0"
                d="M235.3,2.7v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v11.2c-0.8,0.1-2.4,0.1-5.2,0.1h-14.7
	c-2.8,0-4.5-0.1-5.2-0.1V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	c-3.1,0-6-0.1-9.3-0.2v1.9l3,0.2c1.5,0.1,2.3,0.3,2.6,0.9c0.4,0.7,0.6,2.3,0.6,4.7v28.2c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7v-14c0.8-0.1,2.4-0.1,5.2-0.1h14.7c2.8,0,4.5,0.1,5.2,0.1v14c0,2.4-0.1,4-0.6,4.7
	c-0.4,0.6-1.1,0.9-2.6,0.9l-3,0.2v1.9c3.3-0.1,6.2-0.2,9.3-0.2c2.9,0,5.8,0.1,9.1,0.2v-1.9l-3-0.2c-1.5-0.1-2.3-0.3-2.6-0.9
	c-0.4-0.7-0.6-2.3-0.6-4.7V10.4c0-2.4,0.1-4,0.6-4.7c0.4-0.6,1.1-0.9,2.6-0.9l3-0.2V2.7c-3.3,0.1-6.2,0.2-9.1,0.2
	C241.5,2.9,238.6,2.8,235.3,2.7"
              />
            </svg>
          </div>
          <div className="testimonial">
            <div className="quote">
              <div className="quote-text">
                Sathya's creativity and energy was exactly what we and our website needed!
                </div>
              <div className="quote-cite">Emily Farr</div>
              <div className="quote-role">Agency Director</div>
              <div className="quote-company">
                South Carolina Licensing Board
                </div>
            </div>
            <span>South Carolina</span>
            <svg viewBox="0 0 87 107.9">
              <g>
                <g transform="translate(0 .717)">
                  <defs>
                    <filter
                      id="Adobe_OpacityMaskFilter"
                      filterUnits="userSpaceOnUse"
                      x="3.6"
                      y="3.3"
                      width="80.3"
                      height="64.9"
                    >
                      <feColorMatrix
                        type="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                      />
                    </filter>
                  </defs>
                  <mask
                    maskUnits="userSpaceOnUse"
                    x="3.6"
                    y="3.3"
                    width="80.3"
                    height="64.9"
                    id="b_2_"
                  >
                    <g className="st0">
                      <path
                        id="a_2_"
                        className="st1"
                        d="M-30,134.2h213.7V0.1H-30V134.2z"
                      />
                    </g>
                  </mask>
                  <path
                    className="st2"
                    d="M11,10.6h24c-0.5-1.2-0.7-2.4-0.7-3.7c0-1.3,0.3-2.5,0.7-3.7H3.6v57.3l7.4-8.7L11,10.6L11,10.6z M52.6,10.6
			h24v51.7l7.4,5.9V3.3H52.6c0.5,1.2,0.7,2.4,0.7,3.7C53.3,8.2,53.1,9.4,52.6,10.6"
                  />
                  <defs>
                    <filter
                      id="Adobe_OpacityMaskFilter_1_"
                      filterUnits="userSpaceOnUse"
                      x="1.8"
                      y="0.1"
                      width="82.2"
                      height="111.3"
                    >
                      <feColorMatrix
                        type="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"
                      />
                    </filter>
                  </defs>
                  <mask
                    maskUnits="userSpaceOnUse"
                    x="1.8"
                    y="0.1"
                    width="82.2"
                    height="111.3"
                    id="b_5_"
                  >
                    <g className="st3">
                      <path
                        id="a_5_"
                        className="st1"
                        d="M-30,134.2h213.7V0.1H-30V134.2z"
                      />
                    </g>
                  </mask>
                  <path
                    className="st4"
                    d="M49.2,3.2c-1.2-1.9-3.3-3.1-5.6-3.2c1.4,1.1,2.3,2.8,2.3,4.6c0,3.2-2.6,5.8-5.8,5.9c0,0-0.1,0-0.1,0
			c0,0-0.1,0-0.1,0c-0.9,0-1.8-0.2-2.6-0.7c0.1,0.2,0.2,0.4,0.4,0.7c1.3,2,3.4,3.2,5.8,3.2c2.3,0,4.5-1.2,5.8-3.2
			C50.7,8.4,50.7,5.5,49.2,3.2 M43.9,101.3L11.9,70l8-9.4l18.2,0l6.5,6.6l17.2,0l10.8,8.7L43.9,101.3L43.9,101.3z M64.4,59.8
			l-16.7,0l-6.5-6.6l-24.7,0.1L1.8,70.5l41.8,40.9L84,75.6l0,0C84.1,75.5,64.4,59.8,64.4,59.8z M22.1,22.6h-4.6v20.8h15v-4.2H22.1
			V22.6z M39.3,22.6h-4.6v20.8h15v-4.2H39.3V22.6z M64.8,29.8c0,1.8-1.3,2.9-3.5,2.9h-4.7v-6h4.6C63.4,26.7,64.8,27.7,64.8,29.8
			L64.8,29.8L64.8,29.8z M69.5,29.5L69.5,29.5c0-2-0.6-3.7-1.8-4.8c-1.4-1.4-3.4-2.1-6.1-2.1H52v20.8h4.6v-6.7h3.6l4.5,6.7h5.4
			L65,36C67.7,35,69.5,32.9,69.5,29.5L69.5,29.5z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </section>
      <div id="circle">
        <svg viewBox="0 0 300 300">
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
            />
          </defs>
          <circle cx="150" cy="100" r="75" fill="none" />
          <g>
            <use href="#circlePath" fill="none"></use>
            <text>
              <textPath href="#circlePath">
                Check Me Out · Across The Internet ·
                </textPath>
            </text>
          </g>
        </svg>
      </div>
      <section className="social-media-links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/sathya.ram"
        >
          <div className="social-wrapper">
            <div className="social-text">
              <div className="social-name">Instagram</div>
              <span>@sathya.ram</span>
            </div>
            <div className="social-images">
              <div className="social-image">
                <Image alt="jack" filename="jack.jpeg" />
              </div>
              <div className="social-image">
                <Image alt="jane doe" filename="janedoeyo.jpeg" />
              </div>
              <div className="social-image">
                <Image alt="jane doe" filename="daniel.jpg" />
              </div>
              <div className="social-image">
                <Image alt="kat" filename="katstreet.jpeg" />
              </div>
            </div>
          </div>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://dribbble.com/sathyaram"
        >
          <div className="social-wrapper">
            <div className="social-text">
              <div className="social-name">Dribbble</div>
              <span>sathyaram</span>
            </div>
            <div className="social-images">
              <div className="social-image">
                <Image alt="sexy ad" filename="sexyad1.jpeg" />
              </div>
              <div className="social-image">
                <Image alt="lehigh racing" filename="lehighracing.jpeg" />
              </div>
              <div className="social-image">
                <Image alt="sexy vitamins cover" filename="sexy_cover.jpeg" />
              </div>
              <div className="social-image">
                <Image alt="indify logo" filename="indify.jpeg" />
              </div>
            </div>
          </div>
        </a>
      </section>
    </main>
  )
}
