import React from 'react';
import Navigation from '@/components/Navigation';

const Emergency = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div 
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.6), rgba(220, 38, 38, 0.6)), url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80')`
        }}
      >
        <div className="pt-20 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-6">
                🚨 Emergency Resources
              </h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                Immediate help and emergency contacts for those in crisis situations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl mb-4">🚑</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Medical Emergency
                </h3>
                <p className="text-gray-700 mb-4">
                  For life-threatening emergencies, call 911 immediately.
                </p>
                <div className="bg-red-100 p-3 rounded border-l-4 border-red-500">
                  <p className="text-red-800 font-bold text-lg">📞 911</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Emergency Shelter
                </h3>
                <p className="text-gray-700 mb-4">
                  24/7 emergency shelter and housing assistance.
                </p>
                <div className="bg-blue-100 p-3 rounded border-l-4 border-blue-500">
                  <p className="text-blue-800 font-bold">📞 211</p>
                  <p className="text-blue-700 text-sm">Dial 2-1-1 for local resources</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Mental Health Crisis
                </h3>
                <p className="text-gray-700 mb-4">
                  24/7 mental health support and crisis intervention.
                </p>
                <div className="bg-green-100 p-3 rounded border-l-4 border-green-500">
                  <p className="text-green-800 font-bold">📞 988</p>
                  <p className="text-green-700 text-sm">Suicide & Crisis Lifeline</p>
                </div>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="text-3xl mb-4">🍽️</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Emergency Food
                </h3>
                <p className="text-gray-700 mb-4">
                  Immediate food assistance and emergency meal programs.
                </p>
                <div className="bg-orange-100 p-3 rounded border-l-4 border-orange-500">
                  <p className="text-orange-800 font-bold">📞 211</p>
                  <p className="text-orange-700 text-sm">Local food banks & pantries</p>
                </div>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-white/20 text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                ⚠️ Important Safety Information
              </h2>
              <div className="text-left max-w-2xl mx-auto">
                <ul className="text-gray-700 space-y-2">
                  <li>• <strong>911:</strong> For immediate life-threatening emergencies</li>
                  <li>• <strong>211:</strong> For local resources and non-emergency assistance</li>
                  <li>• <strong>988:</strong> For mental health crises and suicide prevention</li>
                  <li>• Keep this page bookmarked for quick access to emergency contacts</li>
                  <li>• If you're in immediate danger, prioritize your safety and call 911</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;