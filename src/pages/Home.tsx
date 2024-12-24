import React from 'react';
import { Users, Code, Globe } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center bg-black text-white relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Developers Community Jhapa
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Uniting 500+ developers in Jhapa to learn, grow, and build together
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Join Our Community
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-2">500+</h3>
            <p className="text-gray-600">Active Developers</p>
          </div>
          <div className="text-center">
            <Code className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-2">100+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <Globe className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-4xl font-bold mb-2">50+</h3>
            <p className="text-gray-600">Tech Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;