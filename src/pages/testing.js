import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"

const TestingPage = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}
export default TestingPage
