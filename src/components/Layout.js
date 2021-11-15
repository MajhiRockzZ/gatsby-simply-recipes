import React from "react"

import Navbar from "./NavBar"
import Footer from "./Footer"

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
