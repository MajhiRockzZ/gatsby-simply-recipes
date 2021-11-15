/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@majhirockzz",
    person: { name: "Sumesh Majhi", age: 25 },
    simpleData: ["item1", "item2"],
    complexData: [
      { name: "Sumesh", age: 25 },
      { name: "Susan", age: 21 },
      { name: "John", age: 32 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
