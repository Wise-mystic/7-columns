
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home.jsx';
import About from '@/pages/About.jsx';
import Services from '@/pages/Services.jsx';
import Gallery from '@/pages/Gallery.jsx';
import Contact from '@/pages/Contact.jsx';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>7 Colums - Futuristic Architecture Firm in Ghana</title>
          <meta name="description" content="7 Colums is Ghana's futuristic architecture firm, specializing in innovative and sustainable design. Merging local heritage with cutting-edge solutions for tomorrow's spaces." />
          <meta property="og:title" content="7 Colums - Futuristic Architecture Firm in Ghana" />
          <meta property="og:description" content="7 Colums is Ghana's futuristic architecture firm, specializing in innovative and sustainable design. Merging local heritage with cutting-edge solutions for tomorrow's spaces." />
        </Helmet>
        
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
