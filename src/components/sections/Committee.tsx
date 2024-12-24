import React from 'react';

const committeeMembers = [
  {
    name: 'John Doe',
    position: 'President',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
  },
  {
    name: 'Jane Smith',
    position: 'Vice President',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
  },
  {
    name: 'Mike Johnson',
    position: 'Secretary',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
  },
];

const Committee = () => {
  return (
    <section id="committee" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Executive Committee</h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8 py-8">
            {[...committeeMembers, ...committeeMembers].map((member, index) => (
              <div
                key={index}
                className="flex-none w-64 bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Committee;