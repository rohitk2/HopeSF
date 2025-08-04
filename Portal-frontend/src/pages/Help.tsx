import React from 'react';
import Navigation from '@/components/Navigation';

const Help = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`
        }}
      >
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-6">
                Get Help Now
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Find immediate assistance for food, shelter, healthcare, and other essential services in your area.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Emergency Services
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-red-600 font-bold">911</span>
                    <span className="text-gray-700">Emergency Services</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-bold">211</span>
                    <span className="text-gray-700">Community Resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-600 font-bold">988</span>
                    <span className="text-gray-700">Crisis Lifeline</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Access
                </h2>
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors">
                    Find Nearest Shelter
                  </button>
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition-colors">
                    Locate Food Banks
                  </button>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded transition-colors">
                    Healthcare Services
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/90 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How We Can Help
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                Our platform connects you with verified local resources including food assistance, temporary housing, medical care, job training, and social services. All information is updated in real-time to ensure availability.
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Start Finding Resources
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;