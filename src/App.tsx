import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import Committee from './components/sections/Committee';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Committee />
      <Partners />
      <Contact />
    </div>
  );
}

export default App;