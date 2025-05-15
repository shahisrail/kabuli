// import React from 'react';
// import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-100 py-10">
//       {/* Main Border Container */}
//       <div className="border-t border-gray-300 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="md:flex md:justify-between md:items-center py-6 border  ">
//           {/* Left Section - Navigation */}
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center md:text-left mb-6 md:mb-0">
//             <div>
//               <a href="#" className="block hover:text-gray-600 text-sm">
//                 Home
//               </a>
//             </div>
//             <div>
//               <a href="#" className="block hover:text-gray-600 text-sm">
//                 Menus
//               </a>
//             </div>
//             <div>
//               <a href="#" className="block hover:text-gray-600 text-sm">
//                 Our Story
//               </a>
//             </div>
//             <div>
//               <a href="#" className="block hover:text-gray-600 text-sm">
//                 Gallery
//               </a>
//             </div>
//             <div>
//               <a href="#" className="block hover:text-gray-600 text-sm">
//                 Loyalty Club
//               </a>
//             </div>
//             <div>
//               <a href="#" className="block hover:text-gray-600 text-sm">
//                 Gift Cards
//               </a>
//             </div>
//             <div>
//               <a href="#" className="block hover:text-gray-600 text-sm">
//                 Contact
//               </a>
//             </div>
//             <div>
//               <a href="#" className="block hover:text-gray-600 text-sm">
//                 Terms and Conditions
//               </a>
//             </div>
//             <div>
//               <a href="#" className="block hover:text-gray-600 text-sm">
//                 Privacy Statement
//               </a>
//             </div>
//           </div>

//           {/* Middle Section - Social Icons */}
//           <div className="flex justify-center items-center space-x-4 text-gray-500 mb-6 md:mb-0">
//             <a href="#" className="hover:text-gray-700">
//               <FaFacebookF size={20} />
//             </a>
//             <a href="#" className="hover:text-gray-700">
//               <FaInstagram size={20} />
//             </a>
//             <a href="#" className="hover:text-gray-700">
//               <FaTiktok size={20} />
//             </a>
//           </div>

//           {/* Right Section - Loyalty Club */}
//           <div className="text-center md:text-right">
//             <h3 className="font-semibold text-gray-700 mb-1 text-sm">Loyalty Club</h3>
//             <p className="text-sm text-gray-600">
//               Get special offers from Kabuli and Opal Club restaurants!
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Copyright Section */}
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 text-center text-xs text-gray-600">
//         <p>Kabuli © 2024 All rights reserved. Designed & Developed by LeftStart</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-6 mt-10">
        
      {/* Main Border Box */}
   <div >
   <div className="flex-grow border-t-4 border-black mb-[-19px]"></div>
   <div className="relative max-w-screen-xl border-b-  border-r-4 mx-auto border-t-4 border-l-4 border-black flex flex-col md:flex-row text-center md:text-left text-black divide-y-4 md:divide-y-0 md:divide-x divide-black pb-8">
        {/* Left Section */}
        <div className="flex-1 mt-10 p-4">
          <nav className="flex flex-wrap justify-center space-x-1 space-y-1 md:space-y-0 md:space-x-2 font-semibold">
            <a href="#" className="hover:underline">
              Home
            </a>
            |
            <a href="#" className="hover:underline">
              Menus
            </a>
            |
            <a href="#" className="hover:underline">
              Our Story
            </a>
            |
            <a href="#" className="hover:underline">
              Gallery
            </a>
            |
            <a href="#" className="hover:underline">
              Loyalty Club
            </a>
            |
            <a href="#" className="hover:underline">
              Gift Cards
            </a>
            <br />
            <a href="#" className="hover:underline">
              Contact
            </a>
            |
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
            |
            <a href="#" className="hover:underline">
              Privacy Statement
            </a>
          </nav>
        </div>

        {/* Center Section with Social Icons */}
        <div className="flex-1 mt-10 p-4 flex flex-col items-center justify-center">
          <div className="flex space-x-6 text-xl">
            <a href="#" className="hover:text-gray-700">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="hover:text-gray-700">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-gray-700">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 mt-10 p-4 flex flex-col justify-center items-center md:items-start">
          <h4 className="font-bold mb-1">Loyalty Club</h4>
          <p className="text-center md:text-left">
            Get special offers from Kabuli and Opal Club restaurants!
          </p>
        </div>

        {/* Bottom Text */}
        {/* Bottom Text */}
      </div>
      <div className="flex justify-center items-center space-x-4 max-w-screen-xl mx-auto mt-[-8px]">
        <div className="flex-grow border-t-4 border-black"></div>
        <div className="  left-0 right-0 text-center text-xs font-medium z-10 px-4">
          Kabuli © 2024 All rights reserved. Designed & Developed by LetItStart
        </div>
        <div className="flex-grow border-t-4 border-black"></div>
      </div>
   </div>
    </footer>
  );
}

export default Footer;
