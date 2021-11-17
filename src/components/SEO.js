import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[
        { name: `description`, content: metaDescription },
        { name: `author`, content: site.siteMetadata.author },
        {
          name: `keywords`,
          content: `React, Gatsby, Recipe, Project, MajhiRockzZ`,
        },
      ]}
    ></Helmet>
  )
}

export default SEO
