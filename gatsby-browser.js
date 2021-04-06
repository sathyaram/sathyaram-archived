/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/styles/styles.scss";
import React from "react"
import SimpleReactLightbox from 'simple-react-lightbox'

// gatsby-browser.js
// export const shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition
// }) => {

//   if (location.hash) {
//     return false;
//   }

//   return true;
// };

export const wrapRootElement = ({ element }) => (
  <SimpleReactLightbox>{element}</SimpleReactLightbox>
)

