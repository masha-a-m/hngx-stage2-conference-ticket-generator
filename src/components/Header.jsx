import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="pt-8">
    <header className="flex items-center justify-between mx-8 p-3 md:p-2 border md:mx-40 border-nav"
    style={{
        borderRadius: '18px', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
      }}>
      
      <div className="flex items-center space-x-2">
        <img
          src='public/assets/pngtree-black-qr-code-for-web-png-image_7964376.png'
          alt="Logo"
          className="h-8 w-8 rounded-full"
        />
        <div>
        <h1 className="text-stroked text-title">ticz</h1>
      </div>
      </div>
      

      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-white! hover:text-gray-700 font-normal! text-sm ">
          Events
        </Link>
        <Link to="/" className="text-nav font-normal! text-sm">
          My Tickets
        </Link>
        <Link to="/" className="text-nav font-normal! text-sm">
          About Project
        </Link>
      </div>

      <button className="group bg-white group-hover:btn-hover! text-btn-nav btn-stroke font-roboto px-4 py-2 rounded-full flex justify-center items-center space-x-3 transition-all duration-300">
        <span className="transition-colors group-hover:btn-hovercolor! font-roadrage">MY TICKETS</span>
        <span className="text-2xl transition-transform group-hover:-rotate-45 group-hover:btn-hovercolor">→</span>
      </button>
    </header>
    </div>
  );
};

export default Header;