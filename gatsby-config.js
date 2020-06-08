module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },

  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `artists`,
        path: `${__dirname}/src/assets/images/artists`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        typeName: `Json`,
        path: `${__dirname}/src/assets/data`,
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,

    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `600`],
          },
          {
            family: `Lato`,
            variants: [`300`, `400`, `600`],
          },
          {
            family: `Bebas Neue`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 800,
        ratio: 1.77,
        height: 400,
        related: false,
        noIframeBorder: true,
      },
    },
    `gatsby-transformer-sharp`,
  ],
}
