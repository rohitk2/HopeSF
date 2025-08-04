import React from 'react';
import Navigation from '@/components/Navigation';

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')`
        }}
      >
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl mb-4">🗺️</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Interactive Map
                </h3>
                <p className="text-gray-700">
                  Real-time data on beds, food, and showers with an easy-to-use interactive map interface.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl mb-4">🛏️</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Provider Backend
                </h3>
                <p className="text-gray-700">
                  A dedicated backend system for providers to update occupancy and inventory in real-time.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  AI Chatbot
                </h3>
                <p className="text-gray-700">
                  Ask questions like \"Where can I sleep tonight?\" and get instant, helpful responses.
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl mb-4">📲</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Registration Portals
                </h3>
                <p className="text-gray-700">
                  Dedicated portals for both individuals and organizations to register and access services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;