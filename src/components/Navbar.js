import { useEffect } from 'react'
import React from 'react'
import nav from 'react-bootstrap'

// https://jfelix.info/blog/create-a-mobile-friendly-navigation-with-react

// const Navbar = (props) => {
//   return (
//     <div classNameName = "flex-container-header">
//       <h1>5-Letter Word Game</h1>
//       <div classNameName = "flex-container-helper">
//         <div classNameName="dropdown">
//           <button classNameName="drop-button">
//             <p>Home</p>
//           </button>
//         </div>
//         <div classNameName="dropdown">
//           <button classNameName="drop-button">
//             <p>Settings</p>
//           </button>
//         </div>
//         <div classNameName="dropdown">
//           <button classNameName="drop-button" >
//             <p>Help</p>
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

const Navbar = () => (
  <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
    <div className='container-md'>
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
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <a
              className='nav-link'
              href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
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
