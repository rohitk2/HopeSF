import React from 'react';
import Navigation from '@/components/Navigation';

const About = () => {
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
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-6">
                About Neighborhood Net
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                A digital platform that connects people experiencing homelessness with the nearest available food, shelter, and hygiene resources.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                We believe that everyone deserves access to basic necessities. Neighborhood Net bridges the gap between available resources and those who need them most, creating a more connected and compassionate community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;