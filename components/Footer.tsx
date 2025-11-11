
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-800 text-white mt-auto">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} React Product Showcase. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-1">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
