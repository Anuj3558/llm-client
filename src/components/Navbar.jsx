import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown,  } from 'lucide-react';

export const Navbar = ({ user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <nav className="bg-white border-b border-gray-100 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Ai model compatibility
                </span>
              </a>
            </div>
  
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {user ? (
                <>
                  <a href="/dashboard" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md">Dashboard</a>
                  <a href="/matches" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md">My Matches</a>
                  <div className="relative ml-3">
                    <button className="flex items-center text-gray-600 hover:text-purple-600">
                      <img src={user.avatar || "/api/placeholder/32/32"} alt="" className="h-8 w-8 rounded-full" />
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    <button onClick={onLogout} className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md">
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <a href="/login" className="text-gray-600 hover:text-purple-600 px-3 py-2 rounded-md">Login</a>
                  <a href="/signup" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
                    Sign Up
                  </a>
                </>
              )}
            </div>
  
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {user ? (
              <>
                <a href="/dashboard" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600">Dashboard</a>
                <a href="/matches" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600">My Matches</a>
                <button onClick={onLogout} className="block w-full text-left px-3 py-2 rounded-md text-gray-600 hover:text-purple-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600">Login</a>
                <a href="/signup" className="block px-3 py-2 rounded-md text-gray-600 hover:text-purple-600">Sign Up</a>
              </>
            )}
          </div>
        </motion.div>
      </nav>
    );
  };
  
  