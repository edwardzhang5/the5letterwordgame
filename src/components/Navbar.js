import React from 'react'

// https://jfelix.info/blog/create-a-mobile-friendly-navigation-with-react

const Navbar = (props) => {
  return (
    <div className = "flex-container-header">
      <img src="hamster.jpg" alt="hamster" className="hamster-logo" width = "200" height = "100"/>
      <div className = "logo">
        <h1>5-Letter Word Game</h1>
      </div>
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
          <button className="drop-button">
            <p>About</p>
          </button>
        </div>
      </div>
    </div>
  )
}


export default Navbar;




