import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";


export default function Menu() {
  const eclipse = (e) => {
    document.body.classList.toggle("midnight");
  };

  const menuOpen = (e) => {
    document.body.classList.toggle("menu-open");
  };

  const closeMenu = (e) => {
    document.body.classList.remove("menu-open");
  };


  const closeDesc = (e) => {
    e.target.parentNode.parentNode.parentNode.parentNode.classList.remove(
      "active"
    );
  };
  return (
    <aside role="region">
      <div className="eclipse" onClick={eclipse}>
        <svg className="moon" viewBox="0 0 11.6 11.7">
          <path
            className="st0"
            d="M4.1,7.2c-1.5-2-1.1-4.8,0.8-6.3c0.4-0.3,0.8-0.5,1.3-0.7C4.9,0.1,3.6,0.5,2.4,1.4C0,3.3-0.5,6.8,1.4,9.3
c1.9,2.5,5.5,3,7.9,1.1c1.1-0.9,1.8-2,2.1-3.3c-0.3,0.4-0.6,0.7-1,1C8.4,9.6,5.6,9.2,4.1,7.2z"
          />
        </svg>
      </div>
      <a className="logo" href="/" name="logo">
        <svg version="1.1" viewBox="0 0 62.5 28.7">
          <g>
            <polygon
              className="s-line"
              points="27.9,14.4 13,8.1 23.4,19.8 4.5,28.4 15.7,18.4 0.4,0.3 27.9,7.1 	"
            />
            <polyline
              className="r-line"
              points="30.1,6.8 30.1,28.4 35.8,13.9 49.6,8.1 39.2,19.8 58,28.5 46.9,18.4 62.3,0.4 30.1,6.8 	"
            />
          </g>
        </svg>
      </a>
      <nav className="utility" role="navigation">
        <ul>
          <li>
            <a href="#websites">
              <span>Websites</span>
            </a>
          </li>
          <li>
            <a href="#designs">
              <span>Designs</span>
            </a>
          </li>
          <li>
            <a href="#photography">
              <span>Photos</span>
            </a>
          </li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={menuOpen}>
        <div className="menu-title">Menu</div>
        <div className="burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <nav className="menu" role="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a onClick={closeMenu} href="#websites">
              Websites
        </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#designs">
              Designs
        </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#photography">
              Photography
        </a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}
