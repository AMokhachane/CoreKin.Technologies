import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo Section */}
        <NavLink to="/" className="nav-logo">
          <div className="logo-container">
            <img src="/logo4.png" alt="A&T.TECH Logo" className="logo-img" />
          </div>
          <span className="logo-text">
            CoreKin<span className="dot">.</span><span className="tech-accent">Technologies</span>
          </span>
        </NavLink>

        {/* Navigation Links */}
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Services
          </NavLink>
          <NavLink 
            to="/process" 
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Our Process
          </NavLink>
        </div>

        {/* CTA Button */}
        <NavLink to="/contact" className="nav-btn">
          Get In Touch
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;