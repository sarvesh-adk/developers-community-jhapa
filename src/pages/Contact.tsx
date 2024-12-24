import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-16">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contact@dcjhapa.org</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+977 123-456-789</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Jhapa, Nepal</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-black focus:border-black"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;