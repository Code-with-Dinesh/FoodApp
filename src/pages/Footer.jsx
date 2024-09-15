// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-green-500 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">GoFood</h1>
          <p className="text-sm mt-2">&copy; {new Date().getFullYear()} GoFood. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/service" className="hover:text-gray-400">Chefs</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
