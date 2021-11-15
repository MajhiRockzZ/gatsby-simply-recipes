import React from "react"
import { graphql } from "gatsby"

const TestingPage = ({ data }) => {
  const author = data.site.info.author
  console.log(author)
  return (
    <div>
      <h2>Testing Page</h2>
    </div>
  )
}

export const data = graphql`
  query {
    site {
      info: siteMetadata {
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
export default TestingPage
