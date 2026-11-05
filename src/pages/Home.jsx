import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';

const Home = () => {
  // Array of your project images for the rotating 3D carousel
  const carouselImages = [
    {
      id: 1,
      url: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1793348022/PC_Ready_to_Ship_Lifetime_Warranty___Xotic_PC_dyb0zz.jpg',
      title: 'Custom PC Build'
    },
    {
      id: 2,
      url: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1793350183/46ce2c5dfd9ed3ced882e80161592d82_qqrg1l.jpg',
      title: 'Modern Website Design'
    },
    {
      id: 3,
      url: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1793348772/c79e3613a62531773c57284dbb83a72a_fy81cq.jpg',
      title: 'HR Management Software'
    },
    {
      id: 4,
      url: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1793350041/820625ab181c9f6e17710ca121cf3c1c_wztzjm.jpg',
      title: 'UI/UX Design'
    },
    {
      id: 5,
      url: 'https://res.cloudinary.com/drgxphf5l/image/upload/v1793349104/03b76cd46114f6dba9a2924f043db361_ozpo8v.jpg',
      title: 'Office 365 Setup'
    }
  ];

  return (
    <div className="hero-container">
      {/* Glow Backdrops */}
      <div className="glow-orange"></div>
      <div className="glow-cyan"></div>

      <div className="hero-content-wrapper">
        {/* Left Column: Headline & Info */}
        <div className="hero-left">
          <div className="category-badge">
            <span className="badge-dot"></span>
            <span>WEBSITES • APPLICATIONS • WORKPLACE IT</span>
          </div>

          <h1 className="hero-headline">
            We build websites,<br />
            <span className="text-orange">apps </span>
            <span className="text-white">&amp; </span>
            <span className="text-cyan">IT systems</span><br />
            that fuel growth.
          </h1>

          <p className="hero-description">
            From bespoke web applications and high-conversion websites to Microsoft 365, workstation setups, domains, and polished corporate assets.
          </p>

          <div className="hero-button-group">
            <NavLink to="/services" className="btn-explore">
              Explore Services <ArrowRight size={18} />
            </NavLink>
            <NavLink to="/contact" className="btn-consult">
              <MessageSquare size={16} /> Schedule Consultation
            </NavLink>
          </div>

          <div className="hero-checklist">
            <div className="checklist-item">
              <CheckCircle2 size={16} className="icon-orange" />
              <span>Zero Downtime IT</span>
            </div>
            <div className="checklist-item">
              <CheckCircle2 size={16} className="icon-cyan" />
              <span>Full-Stack Modern Apps</span>
            </div>
            <div className="checklist-item">
              <CheckCircle2 size={16} className="icon-purple" />
              <span>Complete Office 365</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Rotating Carousel Visual */}
        <div className="hero-right carousel-wrapper"> 
            <div className="floating-badge">
              <span>✨ Featured Work</span>
            </div>

          {/* 3D Cylinder Scene */}
          <div className="carousel-scene">
            <div className="carousel-cylinder">
              {carouselImages.map((item, index) => {
                // Calculate dynamic rotateY and translateZ positioning for a 5-item ring
                const angle = index * (360 / carouselImages.length);
                const style = {
                  transform: `rotateY(${angle}deg) translateZ(240px)`
                };

                return (
                  <div key={item.id} className="carousel-card" style={style}>
                    <img src={item.url} alt={item.title} className="carousel-card-img" />
                    <div className="carousel-card-caption">
                      <span>{item.title}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;