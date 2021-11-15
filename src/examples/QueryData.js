import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          name
          age
        }
      }
    }
  }
`

const QueryData = () => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h2>site title is : {title}</h2>
    </div>
  )
}

export default QueryData
