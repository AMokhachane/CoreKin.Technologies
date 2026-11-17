import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Process from './pages/Process';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';

// Single-page layout containing all sections stacked sequentially
function MainScrollLayout() {
  const location = useLocation();

  useEffect(() => {
    // If navigating to a specific hash (e.g. /#services), scroll smoothly to that section
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="process">
        <Process />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

function App() {
  return (
    <Router basename="/">
      <div className="app-layout">
        <Navbar />
        <main className="main-content">
          <Routes>
            {/* Main landing route with all sections stacked for continuous scrolling */}
            <Route path="/" element={<MainScrollLayout />} />

            {/* Individual standalone routes if accessed directly */}
            <Route path="/services" element={<Services />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;