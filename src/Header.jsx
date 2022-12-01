import React from "react"
import "./styles/header.css"

const Header = () => {
  return (

  <header className="container">
    <div className="row justify-content-center mt-3 mb-4">
      <div className="col-8">
        <h1><img className="cvsLogo" src="./public/cvs32.png" alt="cvs logo"/> CVS Find Teammates</h1>
      </div>
    </div>
  </header>
  )
}
export default Header