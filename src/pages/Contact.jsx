import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Websites & Branding',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch("https://formspree.io/f/meaaljod", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-container">
      {/* Background Glow Accents */}
      <div className="glow-orange"></div>
      <div className="glow-cyan"></div>

      <div className="contact-content-wrapper">
        
        {/* Header Section */}
        <div className="contact-header">
          <div className="category-badge">
            <span className="badge-dot"></span>
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="contact-headline">
            Let's build something<br />
            <span className="text-orange">exceptional </span>
            <span className="text-white">&amp; </span>
            <span className="text-cyan">secure together.</span>
          </h1>

          <p className="contact-description">
            Have a project in mind, need workspace setup, or looking for IT infrastructure support? Drop us a message and we'll get back to you promptly.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info */}
          <div className="contact-info-panel">
            <div className="info-panel-header">
              <h3>Direct Communication</h3>
              <p>Choose whichever channel is most convenient for you.</p>
            </div>

            <div className="info-cards-list">
              {/* Call Us Card (Updated with Phone Icon and direct-dial links) */}
              <div className="info-card-item">
                <div className="info-icon-box">
                  <Phone size={20} className="text-cyan" />
                </div>
                <div>
                  <span className="info-label">Call Us</span>
                  <p className="info-value">
                    <a href="tel:0785767721" style={{ color: 'inherit', textDecoration: 'none' }}>078 576 7721</a>
                    {' • '}
                    <a href="tel:0640192409" style={{ color: 'inherit', textDecoration: 'none' }}>064 019 2409</a>
                  </p>
                </div>
              </div>

              <div className="info-card-item">
                <div className="info-icon-box">
                  <MapPin size={20} className="text-orange" />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <p className="info-value">Parys, Free State &amp; Remote Support</p>
                </div>
              </div>

              <div className="info-card-item">
                <div className="info-icon-box">
                  <Clock size={20} className="text-cyan" />
                </div>
                <div>
                  <span className="info-label">Response Time</span>
                  <p className="info-value">Within 24 business hours</p>
                </div>
              </div>
            </div>

            {/* Guarantee Box */}
            <div className="contact-perks-box">
              <Sparkles size={20} className="text-orange" />
              <div>
                <h4>Transparent Collaboration</h4>
                <p>No lock-ins, clear roadmaps, and 100% ownership of your domains, code, and digital assets.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-panel">
            {isSubmitted ? (
              <div className="success-message-box">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={36} className="text-cyan" />
                </div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. Your inquiry has been sent .</p>
                <button 
                  className="btn-reset-form" 
                  onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', service: 'Websites & Branding', message: '' }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Start Your Inquiry</h3>
                
                {errorMessage && (
                  <div style={{ color: '#ef4444', fontSize: '0.85rem', marginBottom: '15px' }}>
                    {errorMessage}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Your Name / Company</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="e.g. Sarah Jenkins" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="sarah@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Websites & Branding">Websites &amp; Branding</option>
                    <option value="Digital Workspace Setup">Digital Workspace Setup</option>
                    <option value="Workplace IT & Cloud">Workplace IT &amp; Cloud (M365 / Email)</option>
                    <option value="Hardware & Maintenance">Hardware &amp; Maintenance / IT Support</option>
                    <option value="Custom Application">Custom HR / Web Application</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details / Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    required 
                    placeholder="Share your details or request here..." 
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-form" disabled={isSubmitting}>
                  <Send size={16} /> {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;