import React from 'react';
import {Link }from 'react-router-dom';
import { ArrowLeft, CheckCircle, HelpCircle, Zap } from 'lucide-react';

const LearnMorePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center text-purple-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Learn More About Ai model compatibility</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Ai model compatibility, we're on a mission to simplify the process of finding the perfect Language Model for your specific needs. We understand that choosing the right LLM can be a daunting task, given the rapid advancements in AI technology. That's why we've created an intelligent platform that matches you with the ideal model based on your unique requirements.
            </p>
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <ul className="space-y-4">
              {[
                "Describe your task or project requirements",
                "Our AI analyzes your needs and compares them with our database",
                "We provide you with a curated list of the best-matching models",
                "Access detailed performance metrics and user reviews",
                "Make an informed decision and start using your perfect LLM match"
              ].map((step, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <div className="space-y-6">
              {[
                {
                  icon: <Zap className="w-6 h-6 text-yellow-500" />,
                  title: "Up-to-date Information",
                  description: "Our database is constantly updated with the latest models and performance metrics."
                },
                {
                  icon: <HelpCircle className="w-6 h-6 text-blue-500" />,
                  title: "Expert Support",
                  description: "Our team of AI experts is always ready to assist you with any questions or concerns."
                },
                {
                  icon: <CheckCircle className="w-6 h-6 text-green-500" />,
                  title: "Unbiased Recommendations",
                  description: "Our AI-driven matching system ensures fair and accurate model suggestions."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Find Your Perfect LLM Match?</h2>
          <Link href="/">
            <button className="px-8 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all">
              Get Started Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnMorePage;

