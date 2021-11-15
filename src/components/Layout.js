import "normalize.css"
import React from "react"
import "../assets/css/main.css"
import Footer from "./Footer"
import Navbar from "./NavBar"

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
