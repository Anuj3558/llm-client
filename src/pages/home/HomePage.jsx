import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, } from 'framer-motion';
import { Star, Quote, Brain, Gauge, Users,  Search, Settings, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


const DemoSection = () => {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [demoText, setDemoText] = useState('');

  const demoSteps = [
    {
      title: "Describe Your Task",
      text: "I need a language model for medical Q&A...",
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: "Set Parameters",
      text: "Analyzing requirements...",
      icon: <Settings className="w-6 h-6" />,
    },
    {
      title: "Get Matches",
      text: "Found your perfect match!",
      icon: <Sparkles className="w-6 h-6" />,
    }
  ];

  useEffect(() => {
    if (step === 0) {
      const text = "I need a language model for medical Q&A...";
      let index = 0;
      setIsTyping(true);
      
      const interval = setInterval(() => {
        setDemoText(text.slice(0, index));
        index++;
        
        if (index > text.length) {
          clearInterval(interval);
          setIsTyping(false);
          setTimeout(() => setStep(1), 1000);
        }
      }, 50);
      
      return () => clearInterval(interval);
    }
    
    if (step === 1) {
      setTimeout(() => setStep(2), 2000);
    }
  }, [step]);

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ width: "0%" }}
          animate={{ width: `${(step + 1) * 33.33}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      
      {/* Demo Content */}
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          {demoSteps.map((demoStep, index) => (
            <motion.div
              key={index}
              className={`flex items-center ${index <= step ? 'text-purple-600' : 'text-gray-400'}`}
              animate={{ opacity: index <= step ? 1 : 0.5 }}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                index <= step ? 'bg-purple-100' : 'bg-gray-100'
              }`}>
                {demoStep.icon}
              </div>
              <span className="ml-2 text-sm font-medium">{demoStep.title}</span>
              {index < 2 && <ArrowRight className="mx-4 w-4 h-4" />}
            </motion.div>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="min-h-[200px] flex items-center justify-center"
          >
            {step === 0 && (
              <div className="w-full">
                <div className="w-full h-32 bg-gray-50 rounded-lg p-4">
                  <span className="text-gray-600">{demoText}</span>
                  {isTyping && <span className="animate-pulse">|</span>}
                </div>
              </div>
            )}
            
            {step === 1 && (
              <div className="w-full">
                <motion.div
                  animate={{
                    scale: [1, 1.02, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-full h-32 bg-gray-50 rounded-lg flex items-center justify-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-purple-600 rounded-full animate-bounce" />
                    <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-4 h-4 bg-purple-200 rounded-full animate-bounce [animation-delay:-0.5s]" />
                  </div>
                </motion.div>
              </div>
            )}
            
            {step === 2 && (
              <div className="w-full">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-full h-32 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-purple-600 font-medium">Perfect Match Found!</p>
                    <p className="text-sm text-gray-600">GPT-4-Med-ChatBot</p>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dot-pattern">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6 tracking-tight">
              Ai model compatibility
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Find your perfect LLM match with our intelligent matchmaking system.
              Powered by real-time benchmarks and AI-driven recommendations.
            </p>
            
            <div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all"
              >
                Get Started
              </motion.button>
              <Link to={"/learn-more"}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-white text-purple-600 rounded-lg shadow-lg hover:shadow-purple-100 transition-all"
              >
                Learn More
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-bold mb-4"
            >
              How It Works
            </motion.h2>
            <p className="text-gray-600">Experience our intelligent matchmaking process</p>
          </div>
          
          <DemoSection />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI-Powered Matching",
                description: "Intelligent algorithms analyze your requirements for perfect matches"
              },
              {
                icon: <Gauge className="w-6 h-6" />,
                title: "Real-time Benchmarks",
                description: "Up-to-date performance metrics refreshed every 2 hours"
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Global Accessibility",
                description: "Support for 100+ languages to serve users worldwide"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-4"
      >
        What Our Users Say
      </motion.h2>
      <p className="text-gray-600">Hear from developers who found their perfect LLM match</p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Alex Johnson",
          role: "AI Researcher",
          comment: "Ai model compatibility helped me find the ideal LLM for my research project in record time!"
        },
        {
          name: "Samantha Lee",
          role: "Software Engineer",
          comment: "The real-time benchmarks were crucial in choosing the right model for our startup."
        },
        {
          name: "Michael Chen",
          role: "Data Scientist",
          comment: "I was impressed by the accuracy of the AI-powered matching. Saved me weeks of testing!"
        }
      ].map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-xl bg-white shadow-lg"
        >
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 mb-4">{review.comment}</p>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
              {review.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-semibold">{review.name}</h4>
              <p className="text-sm text-gray-600">{review.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="py-20">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-4xl font-bold mb-4"
      >
        Success Stories
      </motion.h2>
      <p className="text-gray-600">Read how Ai model compatibility transformed businesses</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-12">
      {[
        {
          company: "TechInnovate",
          quote: "Ai model compatibility's recommendations led to a 40% improvement in our NLP tasks.",
          person: "Emily Watson, CTO"
        },
        {
          company: "AI Solutions Co.",
          quote: "We reduced our model selection time by 70% thanks to Ai model compatibility.",
          person: "David Park, Lead AI Engineer"
        }
      ].map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 rounded-xl bg-purple-50 relative"
        >
          <Quote className="w-12 h-12 text-purple-200 absolute top-4 left-4" />
          <h3 className="text-2xl font-semibold mb-4">{testimonial.company}</h3>
          <p className="text-gray-600 mb-4 relative z-10">"{testimonial.quote}"</p>
          <p className="text-sm text-purple-600 font-medium">{testimonial.person}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Ready to Find Your Perfect Match?</h2>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 bg-purple-600 text-white rounded-lg shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all text-lg"
            >
              Get Started Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
     
    </div>
  );
};

export default LandingPage;