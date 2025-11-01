import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-yellow-400 font-bold text-xl">
          Rims
        </a>
        <div>
          <a href="/about" className="mr-4">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
