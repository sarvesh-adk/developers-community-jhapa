import React from 'react';
import { Users, Code, Globe } from 'lucide-react';

const Stats = () => {
  return (
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
  );
};

export default Stats;