import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center p-6 bg-black text-white rounded-lg">
            <Target className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-300">
              To foster a thriving tech ecosystem in Jhapa by connecting, educating, and empowering developers.
            </p>
          </div>
          
          <div className="text-center p-6 bg-black text-white rounded-lg">
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Community</h3>
            <p className="text-gray-300">
              A diverse group of 500+ developers, from beginners to experts, sharing knowledge and growing together.
            </p>
          </div>
          
          <div className="text-center p-6 bg-black text-white rounded-lg">
            <Lightbulb className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-300">
              To make Jhapa a recognized tech hub in Nepal, nurturing innovation and technological advancement.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6">
            Developers Community Jhapa was founded with a simple yet powerful idea: to bring together the tech talents of Jhapa and create a platform for learning, collaboration, and growth. What started as small meetups has now grown into a vibrant community of over 500 active developers.
          </p>
          <p className="text-gray-700">
            Today, we organize regular workshops, hackathons, and networking events, helping developers enhance their skills and build meaningful connections. Our community includes students, professionals, and tech enthusiasts who share a common passion for technology and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;