import React from 'react';

const partners = [
  {
    name: 'Tech Corp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80',
    description: 'Leading technology solutions provider',
  },
  {
    name: 'Digital Solutions',
    logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    description: 'Digital transformation experts',
  },
  // Add more partners as needed
];

const Partners = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-16">Our Partners</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;