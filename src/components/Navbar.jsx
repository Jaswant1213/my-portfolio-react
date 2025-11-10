// src/components/Navbar.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';

// Navbar ab Dark Mode toggle function ko App.jsx se as a prop receive karega
function Navbar({ handleToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menu ko toggle karne ka function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Link click hone par menu close karne ka function
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" onClick={closeMenu}>Jaswant Kumar</Link>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Nav links. isMenuOpen true ho toh 'open' class lagegi */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          {/* Link click hone par menu close ho jaye */}
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
        {/* Dark Mode Toggle Button ko yahan add karein */}
        <li className="navbar-toggle-btn">
          <button id="theme-toggle" onClick={handleToggle}>
            Toggle Dark Mode
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;