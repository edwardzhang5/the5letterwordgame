import React from 'react'
import styled from 'styled-components'

// https://jfelix.info/blog/create-a-mobile-friendly-navigation-with-react

const Navbar = (props) => {
  return (
    <div class = "flex-container-header">
      <h1>5-Letter Word Game</h1>
      <div class = "flex-container-helper">
        <div class="dropdown">
          <button class="drop-button">
            <p>Home</p>
          </button>
        </div>
        <div class="dropdown">
          <button class="drop-button">
            <p>Settings</p>
          </button>
        </div>
        <div class="dropdown">
          <button class="drop-button">
            <p>About</p>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Navbar

