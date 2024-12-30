import React from 'react';
import Hero from './components/Hero';
import ArcadeModel from './components/ArcadeModel';
import About from './components/About';
import Features from './components/Features';
import FAQ from './components/FAQ/FAQ';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <ArcadeModel />
      <About />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;