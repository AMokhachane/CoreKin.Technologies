import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('home');
  
  // Refs to measure each nav link DOM element dynamically
  const linksRef = useRef([]);
  const [pillStyle, setPillStyle] = useState({ left: '4px', width: '90px' });

  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleScroll = () => {
      const sections = ['home', 'services', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, sectionId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', `#${sectionId}`);
        setActiveSection(sectionId);
      }
    }
  };

  const getActiveTabClass = () => {
    switch (location.pathname) {
      case '/': return 'active-home';
      case '/services': return 'active-services';
      case '/process': return 'active-process';
      case '/contact': return 'active-contact';
      default: return 'active-home';
    }
  };

  // Determine active index (0: Home, 1: Services, 2: Process)
  const getActiveIndex = () => {
    if (location.pathname === '/services' || activeSection === 'services') return 1;
    if (location.pathname === '/process' || activeSection === 'process') return 2;
    return 0; // Home
  };

  const activeIdx = getActiveIndex();

  // Automatically calculate the exact left position and width from the active DOM element
  useEffect(() => {
    const currentLink = linksRef.current[activeIdx];
    if (currentLink) {
      setPillStyle({
        left: `${currentLink.offsetLeft}px`,
        width: `${currentLink.offsetWidth}px`
      });
    }
  }, [activeIdx, location.pathname]);

  return (
    <>
      {/* DESKTOP NAVBAR */}
      <nav className="navbar desktop-nav">
        <div className="nav-container">
          <NavLink to="/#home" onClick={(e) => handleNavClick(e, 'home')} className="nav-logo">
            <div className="logo-container">
              <img 
                src="https://res.cloudinary.com/drgxphf5l/image/upload/logo4_ghwbtf.png" 
                alt="CoreKin Technologies Logo" 
                className="logo-img" 
              />
            </div>
            <span className="logo-text">
              CoreKin<span className="dot">.</span><span className="tech-accent">Technologies</span>
            </span>
          </NavLink>

          {/* Nav Links Container with Dynamic Auto-Sizing Sliding Pill */}
          <div className="desktop-links-wrapper">
            <div 
              className="desktop-sliding-pill"
              style={{
                left: pillStyle.left,
                width: pillStyle.width
              }}
            ></div>

            <div className="nav-links">
              <NavLink 
                to="/#home" 
                ref={(el) => (linksRef.current[0] = el)}
                onClick={(e) => handleNavClick(e, 'home')} 
                className={`nav-link ${activeIdx === 0 ? 'active' : ''}`}
              >
                Home
              </NavLink>
              <NavLink 
                to="/#services" 
                ref={(el) => (linksRef.current[1] = el)}
                onClick={(e) => handleNavClick(e, 'services')} 
                className={`nav-link ${activeIdx === 1 ? 'active' : ''}`}
              >
                Services
              </NavLink>
              <NavLink 
                to="/#process" 
                ref={(el) => (linksRef.current[2] = el)}
                onClick={(e) => handleNavClick(e, 'process')} 
                className={`nav-link ${activeIdx === 2 ? 'active' : ''}`}
              >
                Our Process
              </NavLink>
            </div>
          </div>

          <NavLink to="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="nav-btn desktop-cta-btn">
            Get In Touch
          </NavLink>
        </div>
      </nav>

      {/* MOBILE FLOATING BOTTOM TAB BAR (Fully Intact) */}
      <div className={`mobile-bottom-nav ${getActiveTabClass()}`}>
        <div className="active-indicator">
          {location.pathname === '/' && (
            <svg className="tab-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
          )}
          {location.pathname === '/services' && (
            <svg className="tab-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
          )}
          {location.pathname === '/process' && (
            <svg className="tab-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          )}
          {location.pathname === '/contact' && (
            <svg className="tab-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          )}
        </div>

        <div className="tab-items">
          <NavLink to="/#home" onClick={(e) => handleNavClick(e, 'home')} className="tab-item">
            <svg className="tab-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span className="tab-label">Home</span>
          </NavLink>
          <NavLink to="/#services" onClick={(e) => handleNavClick(e, 'services')} className="tab-item">
            <svg className="tab-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            <span className="tab-label">Services</span>
          </NavLink>
          <NavLink to="/#process" onClick={(e) => handleNavClick(e, 'process')} className="tab-item">
            <svg className="tab-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06-.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            <span className="tab-label">Process</span>
          </NavLink>
          <NavLink to="/#contact" onClick={(e) => handleNavClick(e, 'contact')} className="tab-item">
            <svg className="tab-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span className="tab-label">Contact</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;