import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setIsVisible(true);
      } else if (e.clientY > 100) { // If the cursor is 100px or more away from the top, hide the navbar
        setIsVisible(false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <img 
        src="/menu.png" 
        alt="Menu" 
        onClick={() => setIsVisible(true)} 
        className="menu-icon"
        style={{ display: isVisible ? 'none' : 'block' }}
      />
      <nav className="navbar" style={{ transform: isVisible ? "translateY(0%)" : "translateY(-100%)" }}>
        <div className="navbar-logo">
          WG
        </div>
        <ul className="navbar-links">
            <li>
              <Link to="/" className="navbar-link">Home</Link>
            </li>
            <li>
              <Link to="/about" className="navbar-link">About Me</Link>
            </li>
            <li>
              <Link to="/projects" className="navbar-link">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="navbar-link">Contact</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
