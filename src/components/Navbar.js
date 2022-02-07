import { useEffect } from "react"
import React from 'react'

// https://jfelix.info/blog/create-a-mobile-friendly-navigation-with-react

const Navbar = (props) => {
  return (
    <div className = "flex-container-header">
      <h1>5-Letter Word Game</h1>
      <div className = "flex-container-helper">
        <div className="dropdown">
          <button className="drop-button">
            <p>Home</p>
          </button>
        </div>
        <div className="dropdown">
          <button className="drop-button">
            <p>Settings</p>
          </button>
        </div>
        <div className="dropdown">
          <button className="drop-button" >
            <p>Help</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Navbar

