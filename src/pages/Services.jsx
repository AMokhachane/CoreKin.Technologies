import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Code, Globe, Laptop, Cpu, ChevronDown, ChevronUp, CheckCircle, Lightbulb } from 'lucide-react';

const Services = () => {
  // State to keep track of which service card is currently expanded (null means all closed)
  const [expandedId, setExpandedId] = useState(null);

  // Main featured services with simple, non-tech explanations for clients
  const primaryServices = [
    {
      id: '01',
      title: 'Digital Workspace Setup',
      description: 'Domain registration, custom business emails, interactive email signatures, Google Search & Maps profiles and social media business page setup.',
      tag: 'Domains • Business Mail • Search Listings',
      colorClass: 'orange-theme',
      linkText: 'Explore Workspace Setup',
      icon: <Globe size={24} />,
      simpleExplanation: {
        summary: "Think of this as setting up your business's professional identity on the internet so customers can easily find and trust you.",
        benefits: [
          "Get a professional email address ending with your business name (e.g., info@yourbusiness.co.za) instead of a standard Gmail address.",
          "Appear correctly when clients search for your business on Google Search and Google Maps.",
          "Establish professional social media pages and business cards that make you look instantly established."
        ]
      }
    },
    {
      id: '02',
      title: 'Websites & Apps',
      description: 'Custom websites, web applications, logo design, business cards, invoice templates, letterheads, and brand assets.',
      tag: 'Web Dev • Logos • Print & Digital Assets',
      colorClass: 'cyan-theme',
      linkText: 'Explore Software & Design',
      icon: <Code size={24} />,
      simpleExplanation: {
        summary: "We design the visual face of your business—from the website people visit to buy your products or services, to the logos and invoices they see.",
        benefits: [
          "A modern, fast website that works seamlessly on both computers and mobile phones.",
          "Custom web applications or digital systems built specifically to make your day-to-day operations smoother.",
          "Professional branding package including logos, branded letterheads, and invoice templates."
        ]
      }
    },
    {
      id: '03',
      title: 'Workplace IT & Cloud',
      description: 'Microsoft 365 licensing & migrations, Windows activation, cloud storage setup (OneDrive/SharePoint), and account security.',
      tag: 'Microsoft 365 • Cloud • Security',
      colorClass: 'green-theme',
      linkText: 'Explore IT Solutions',
      icon: <Laptop size={24} />,
      simpleExplanation: {
        summary: "We set up your office software and online storage securely so you can access your work from anywhere without losing files.",
        benefits: [
          "Licensed Microsoft Office applications (Word, Excel, Outlook) set up properly on your work computers.",
          "Secure cloud storage so your important files are automatically backed up and accessible even if a computer breaks.",
          "Proper account security and password management to keep your business data safe from hackers."
        ]
      }
    },
    {
      id: '04',
      title: 'Hardware & Maintenance',
      description: 'PC build, PC repairs, system diagnostics, workstation setup, virus removal, hardware upgrades, and data recovery.',
      tag: 'Repairs • Diagnostics • Upgrades',
      colorClass: 'orange-theme',
      linkText: 'Explore Hardware Support',
      icon: <Cpu size={24} />,
      simpleExplanation: {
        summary: "We take care of your physical computers and hardware so you never have to deal with slow devices, viruses, or sudden crashes.",
        benefits: [
          "Custom PC builds and workstation setups tailored precisely to what your business needs to run fast.",
          "Thorough diagnostics, virus removal, and hardware upgrades to breathe new life into slow computers.",
          "Data recovery assistance to help retrieve lost files when things go wrong."
        ]
      }
    }
  ];

  // Toggle card expansion
  const handleCardClick = (id) => {
    if (expandedId === id) {
      setExpandedId(null); // Close if already open
    } else {
      setExpandedId(id); // Open clicked card
    }
  };

  return (
    <div className="services-container">
      {/* Background Glow Accents */}
      <div className="glow-orange"></div>
      <div className="glow-cyan"></div>

      <div className="services-content-wrapper">
        
        {/* Header Section */}
        <div className="services-header">
          <div className="category-badge">
            <span className="badge-dot"></span>
            <span>WHAT WE DO</span>
          </div>

          <h1 className="services-headline">
            Technology built around the<br />
            <span className="text-orange">way </span>
            <span className="text-white">your business </span>
            <span className="text-cyan">works.</span>
          </h1>

          <p className="services-description">
            We combine strategic technical guidance, software engineering, and workspace IT implementation so technology solves real operational challenges instead of creating complexity.
          </p>
        </div>

        {/* Primary Services Grid */}
        <div className="primary-services-grid">
          {primaryServices.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div 
                key={service.id} 
                className={`service-card ${service.colorClass} ${isExpanded ? 'expanded-card' : ''}`}
                onClick={() => handleCardClick(service.id)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-top">
                  <span className="service-number">{service.id}</span>
                  <div className="service-card-icon">{service.icon}</div>
                </div>

                <h3 className="card-title">{service.title}</h3>
                <p className="card-description">{service.description}</p>
                
                <div className="card-tag">
                  <span className="mini-dot"></span>
                  <span>{service.tag}</span>
                </div>

                {/* Expandable Simple Explanation Section */}
                {isExpanded && (
                  <div className="card-expanded-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
                    <div className="simple-summary-box">
                      <div className="summary-title">
                        <Lightbulb size={16} className="text-orange" />
                        <span>In Simple Terms:</span>
                      </div>
                      <p>{service.simpleExplanation.summary}</p>
                    </div>

                    <div className="benefits-list-title">What this means for you:</div>
                    <ul className="benefits-list">
                      {service.simpleExplanation.benefits.map((benefit, index) => (
                        <li key={index}>
                          <CheckCircle size={14} className="text-cyan" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="card-link">
                  <span>{service.linkText}</span> 
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call To Action Footer Banner */}
        <div className="services-cta-banner">
          <div className="cta-content">
            <h3>Not sure where to start or what you need?</h3>
            <p>Schedule a quick technical consultation to map out your digital requirements.</p>
          </div>
          <NavLink to="/contact" className="btn-explore">
            Schedule Consultation <ArrowRight size={18} />
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Services;