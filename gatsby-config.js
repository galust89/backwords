module.exports = {
  siteMetadata: {
    title: "BackRoads",
    description: "Some text here",
    author: "@galust",
    data: {
      name: "name example",
      age: 24,
    },
  },
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
