import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

/* Self-contained Inline SVG Brand Icons */
const InstagramIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TikTokIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Brand & Mission Column */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <span className="logo-text-main">CoreKin</span>
            <span className="logo-text-sub">.Tech</span>
          </div>
          <p className="footer-tagline">
            Building modern, high-performance web experiences and reliable IT infrastructure for forward-thinking businesses.
          </p>

          {/* Social Icons Row */}
          <div className="social-links-row">
            <a 
              href="https://www.instagram.com/corekin_technologies?mdxt=MWRwMmJocGdqNzV6cg==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn instagram"
              title="Follow us on Instagram"
            >
              <InstagramIcon size={18} />
            </a>

            <a 
              href="https://www.facebook.com/share/151nq8Kc8Mo/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon-btn facebook"
              title="Follow us on Facebook"
            >
              <FacebookIcon size={18} />
            </a>

             <a 
              href="https://www.tiktok.com/@corekin.technologies?_r=1&_t=ZS-9BW1LdT3pNV" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-btn tiktok"
              title="Follow us on TikTok"
            >
              <TikTokIcon size={18} />
            </a>
            
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-links">
            <li>
              <button onClick={() => scrollToSection('home')}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('process')}>Process</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact Us</button>
            </li>
          </ul>
        </div>

        {/* Services Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Solutions</h4>
          <ul className="footer-links static">
            <li>Web Development & Branding</li>
            <li>Digital Workspace Setup</li>
            <li>Microsoft 365 & Cloud</li>
            <li>Hardware Maintenance & IT Support</li>
          </ul>
        </div>

        {/* Contact Quick Info Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Direct Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <Mail size={16} className="text-orange" />
              <a href="mailto:support@corekin.tech">support@corekin.tech</a>
            </li>
            <li>
              <Phone size={16} className="text-cyan" />
              <div className="phone-stack">
                <a href="tel:0615438710">061 543 8710</a>
              </div>
            </li>
            <li>
              <MapPin size={16} className="text-orange" />
              <span>Parys, Free State &amp; Remote</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <p>&copy; {new Date().getFullYear()} CoreKin Technologies. All rights reserved.</p>
        <button 
          className="back-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to Top <ArrowUpRight size={14} />
        </button>
      </div>
    </footer>
  );
}