import * as React from "react"
import { Link } from "react-router-dom"
import companyLogo from "../../../Images/codepath-transparent.png"
import { useState } from "react"
import "./Navbar.css"


export default function Navbar() {
  const [showMobile, setShowMobile] = useState(false);

  function handleMobileToggle() {
    setShowMobile(!showMobile);
  }

  return (
    <nav className="navbar">
      <Logo />
      <div className="nav-links">
        <Link to="/" className="link"><span>Home</span></Link>
        <span><a className="link" href="#About">About Us</a></span>
        <span><a className="link" href="#Contact">Contact Us</a></span>
        <Link className="link" to="/purchases">Orders</Link>
      </div>
      <label className={`menu-icon ${showMobile ? "cross" : ""}`} onClick={handleMobileToggle}>
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="mobile-nav-links">
        <ul className={`nav-links-list ${showMobile ? "show-mobile-nav" : ""}`}>
          <li><Link to="/" className="link">Home</Link></li>
          <li><a className="link" href="#About">About Us</a></li>
          <li><a className="link" href="#Contact">Contact Us</a></li>
          <li>  <Link className="link" to="/purchases">Orders</Link></li>
        </ul>
      </div>


    </nav >

  )
}

export function Logo() {
  return (
    <div className="logo media"><Link to="/"><img src={companyLogo} className="logo-img" /></Link></div>
  )
}

