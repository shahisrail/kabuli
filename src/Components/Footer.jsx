import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-tan-100 py-8 text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Border Container */}
        <div className="border-t-2 border-b-2 border-black py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Section - Navigation */}
            <div className="text-center md:text-left">
              <ul className="flex flex-wrap justify-center md:justify-start gap-4">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Menus
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Loyalty Club
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Statement
                  </a>
                </li>
              </ul>
            </div>

            {/* Middle Section - Social Icons */}
            <div className="flex justify-center items-center space-x-6">
              <a href="#" className="text-lg hover:opacity-75">
                <FaFacebookF />
              </a>
              <a href="#" className="text-lg hover:opacity-75">
                <FaInstagram />
              </a>
              <a href="#" className="text-lg hover:opacity-75">
                <FaTiktok />
              </a>
            </div>

            {/* Right Section - Loyalty Club */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold mb-2">Loyalty Club</h3>
              <p className="text-sm">
                Get special offers from Kabuli and Opal Club restaurants!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 text-center text-xs text-gray-600">
          <p>&copy; 2024 All rights reserved. Designed & Developed by LeftStart</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;