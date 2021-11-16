require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `asewku8uqann`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
  ],
}
