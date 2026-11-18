import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  Search, 
  Layers, 
  Rocket, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { FadeSlideSection, StaggerContainer, StaggerItem } from '../components/MotionSection';

const Process = () => {
  // 4-step workflow process
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      subtitle: 'We listen and analyze',
      description: 'We sit down to understand your business goals, current setup, and exact pain points—whether you need a full digital workspace from scratch, a new website, or IT maintenance.',
      highlights: ['Free initial consultation', 'Infrastructure review', 'Tailored proposal & clear roadmap'],
      icon: <Search size={24} />,
      colorClass: 'orange-theme'
    },
    {
      step: '02',
      title: 'Architecture & Design',
      subtitle: 'We blueprint the solution',
      description: 'Before building, we outline the exact specs, brand assets, email routing, hardware requirements, or web site wireframes so you know precisely what to expect.',
      highlights: ['Brand identity & asset previews', 'System architecture planning', 'Transparent timeline'],
      icon: <Layers size={24} />,
      colorClass: 'cyan-theme'
    },
    {
      step: '03',
      title: 'Development & Build',
      subtitle: 'We engineer & configure',
      description: 'Our team executes the build—setting up Microsoft 365, writing clean React code for your website, configuring domain/DNS records, or preparing hardware.',
      highlights: ['Zero-downtime execution', 'Regular progress updates', 'Rigorous security & speed testing'],
      icon: <Rocket size={24} />,
      colorClass: 'green-theme'
    },
    {
      step: '04',
      title: 'Handover & Support',
      subtitle: 'We launch & protect',
      description: 'We seamlessly roll out your new systems or site, hand over full ownership and credentials, and provide ongoing operational support whenever you need help.',
      highlights: ['Full ownership transfer', 'User walkthroughs & docs', 'Ongoing technical support'],
      icon: <ShieldCheck size={24} />,
      colorClass: 'orange-theme'
    }
  ];

  return (
    <div className="process-container">
      {/* Background Glow Accents */}
      <div className="glow-orange"></div>
      <div className="glow-cyan"></div>

      <div className="process-content-wrapper">
        
        {/* Header Section with Fade & Slide Motion */}
        <FadeSlideSection>
          <div className="process-header">
            <div className="category-badge">
              <span className="badge-dot"></span>
              <span>HOW WE WORK</span>
            </div>

            <h1 className="process-headline">
              Simple steps to<br />
              <span className="text-orange">streamline </span>
              <span className="text-white">your technology </span>
              <span className="text-cyan">journey.</span>
            </h1>

            <p className="process-description">
              No technical jargon, no hidden surprises. We follow a structured, transparent process to take your business from concept to a fully operational digital environment.
            </p>
          </div>
        </FadeSlideSection>

        {/* Process Step Cards Grid with Staggered Reveal */}
        <StaggerContainer className="process-steps-grid">
          {processSteps.map((item) => (
            <StaggerItem key={item.step}>
              <div className={`process-card ${item.colorClass}`}>
                <div className="process-card-header">
                  <span className="step-number">STEP {item.step}</span>
                  <div className="process-icon-box">{item.icon}</div>
                </div>

                <span className="step-subtitle">{item.subtitle}</span>
                <h3 className="process-card-title">{item.title}</h3>
                <p className="process-card-description">{item.description}</p>

                <div className="process-highlights">
                  {item.highlights.map((point, index) => (
                    <div key={index} className="highlight-item">
                      <CheckCircle2 size={15} className="highlight-icon" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* What to Expect Callout / Guarantee Banner with Fade & Slide Motion */}
        <FadeSlideSection>
          <div className="process-guarantee-box">
            <div className="guarantee-icon-wrapper">
              <Sparkles size={28} className="text-cyan" />
            </div>
            <div className="guarantee-details">
              <h4>Our Commitment to You</h4>
              <p>You retain 100% ownership of all domains, code, brand assets, and admin credentials. We build transparently so you are never locked into vendor traps.</p>
            </div>
          </div>
        </FadeSlideSection>

        {/* Call To Action Footer Banner with Fade & Slide Motion */}
        <FadeSlideSection>
          <div className="services-cta-banner">
            <div className="cta-content">
              <h3>Ready to start your technical build?</h3>
              <p>Whether you have a detailed specification or just an idea, let's discuss your goals.</p>
            </div>
            <NavLink to="/contact" className="btn-explore">
              <MessageSquare size={18} /> Schedule Consultation <ArrowRight size={18} />
            </NavLink>
          </div>
        </FadeSlideSection>

      </div>
    </div>
  );
};

export default Process;