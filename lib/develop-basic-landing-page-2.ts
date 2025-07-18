import React from 'react';

export const HeroSection = () => {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to Todo App</h1>
        <p className="text-xl mb-8">
          Manage your tasks efficiently with our powerful todo application.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};