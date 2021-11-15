import React from "react"

import Navbar from "./NavBar"
import Footer from "./Footer"

import "normalize.css"
import "../assets/css/main.css"

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
