import React from "react"
import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"
import SEO from "../components/SEO"

const TestingPage = () => {
  return (
    <Layout>
      <SEO title="Testing" />
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}
export default TestingPage
