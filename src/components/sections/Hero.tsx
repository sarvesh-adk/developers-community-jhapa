import React, { useState } from 'react';
import JoinForm from '../JoinForm';
import Globe from '../magicui/globe';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="home" className="h-screen flex items-center bg-black text-white relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-medium mb-6">
            Developers Community Jhapa
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Uniting 500+ developers in Jhapa to learn, grow, and build together
          </p>
          <button 
            onClick={() => setShowForm(true)}
            className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors"
          >
            Join Our Community
          </button>
        </div>
      </div>
      <Globe className="right-0 translate-x-1/2" />
      {showForm && <JoinForm onClose={() => setShowForm(false)} />}
    </section>
  );
};

export default Hero;