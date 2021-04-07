import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <link rel="preload" href="/fonts/Maison-Demi.ttf" as="font" type="font/otf" crossOrigin="true" />
        <link rel="preload" href="/fonts/Maison-Medium.ttf" as="font" type="font/ttf" crossOrigin="true" />
        <link rel="preload" href="/fonts/Maison-Light.ttf" as="font" type="font/ttf" crossOrigin="true" />
        <link rel="preload" href="/fonts/WorkSans-Regular.ttf" as="font" type="font/ttf" crossOrigin="true" />
        <meta content="#142c63" name="theme-color" />
        <meta property="og:title" content="Sathya Ram" />
        <meta property="og:url" content="https://sathyaram.com" />
        <meta property="og:type" content="portfolio" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:description" content="Developer | Designer | Photographer" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="canonical" href="https://sathyaram.com" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body className="midnight" {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
