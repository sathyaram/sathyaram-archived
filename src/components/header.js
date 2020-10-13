import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h1>
        <AniLink cover direction="right" to="/">
          {siteTitle}
        </AniLink>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
