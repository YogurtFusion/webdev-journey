// Navbar.jsx
// rafce 
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src="https://picsum.photos/70/70" alt="Random" />

        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

