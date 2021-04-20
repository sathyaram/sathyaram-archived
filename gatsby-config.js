module.exports = {
  siteMetadata: {
    title: `Sathya Ram`,
    description: `Developer | Designer | Photographer`,
    author: `Sathya Ram`,
    siteUrl: `https://sathyaram.com`,
    image: `og-image.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "UA-68620459-1"
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#161631`,
        theme_color: `#161631`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, 
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          globPatterns: ['*.html']
        }
      }
    },
  ],
  flags: {
    DEV_SSR: false,
  }
}
