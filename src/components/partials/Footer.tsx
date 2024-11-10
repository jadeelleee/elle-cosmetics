import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFEBD4] text-gray-800 py-6 font-georgia">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          <h2 className="text-xl font-semibold">Elle Cosmetics Website</h2>
          <p>&copy; 2024 Elle Cosmetics Website. All rights reserved.</p>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-600">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-600">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
