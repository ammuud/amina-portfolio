
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Inventory from './components/Inventory';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#121212] text-gray-200 font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Services />
        <Inventory />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
