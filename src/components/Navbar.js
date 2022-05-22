import { useEffect } from 'react'
import React from 'react'
import nav from 'react-bootstrap'

const Navbar = () => (
  <nav className='navbar navbar-expand-sm navbar-dark navbar-custom'>
    <div className='container-md'>
      <a className='navbar-brand' href='#'>
        <img src='logo192.png' width='50' height='50' alt='logo' />
      </a>
      <a className='navbar-brand' href='#'>
        The 5-Letter Word Game
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <a
              className='nav-link'
              href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
              target='_blank'
              rel='noopener noreferrer'
            >
              How to Play
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
export default Navbar
