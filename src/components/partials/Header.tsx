import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-[#F7B5CA] text-white p-4 shadow-md font-georgia">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-600">ELLE COSMETICS</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-200">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-gray-200">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
