import React, { useState } from 'react';
import { Slider } from './slider';

export const Dashboard = () => {
  const [taskInput, setTaskInput] = useState({
    description: '',
    modelSize: 15,
    requirements: [],
    language: 'en',
  });

  const [matches, setMatches] = useState([]);
  
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setMatches([
        { name: "GPT-4", description: "Advanced language model", score: 95 },
        { name: "DALL-E 3", description: "Image generation model", score: 85 },
      ]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            
          </h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Input Form */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl shadow-blue-100">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Find Your Model Match
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Task Description
                    </label>
                    <textarea
                      value={taskInput.description}
                      onChange={(e) => setTaskInput({...taskInput, description: e.target.value})}
                      placeholder="Describe your task requirements..."
                      className="w-full min-h-[100px] px-3 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    />
                  </div>

                  {/* Enhanced Range Section */}
                  <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Model Size
                    </label>
                    <div className="relative pt-6 pb-2">
                      <Slider
                        value={taskInput.modelSize}
                        onChange={(value) => setTaskInput({...taskInput, modelSize: value})}
                        max={50}
                        min={1}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">1B</span>
                      <div 
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium"
                      >
                        {taskInput.modelSize}B parameters
                      </div>
                      <span className="text-sm text-gray-500">50B</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Language
                    </label>
                    <select
                      value={taskInput.language}
                      onChange={(e) => setTaskInput({...taskInput, language: e.target.value})}
                      className="w-full h-10 px-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 relative group rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">
                      {isLoading ? 'Finding Matches...' : 'Find Matches'}
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-xl shadow-blue-100">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Your Matches
                </h2>
                {isLoading ? (
                  <div className="space-y-4">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="animate-pulse">
                        <div className="h-20 bg-gray-100 rounded-lg" />
                      </div>
                    ))}
                  </div>
                ) : matches.length > 0 ? (
                  <div className="space-y-4">
                    {matches.map((match, index) => (
                      <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg border border-gray-100 p-4 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative">
                          <h3 className="font-medium text-lg text-gray-900">{match.name}</h3>
                          <p className="text-sm text-gray-600">{match.description}</p>
                          <div className="mt-2 flex items-center">
                            <span className="text-sm text-gray-500">Match Score:</span>
                            <div className="ml-2 flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                                style={{ width: `${match.score}%` }}
                              />
                            </div>
                            <span className="ml-2 text-sm font-medium text-blue-600">
                              {match.score}%
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-500">
                      No matches found yet. Try adjusting your requirements.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

