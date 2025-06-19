import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-4 px-6 text-sm text-gray-500 flex justify-center items-center w-full">
      © {new Date().getFullYear()} GEMI.AI. All rights reserved.
    </footer>
  );
};

export default Footer;