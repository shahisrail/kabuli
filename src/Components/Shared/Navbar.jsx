import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(true); // Initially fixed

  // Route পরিবর্তনের সাথে মেনু বন্ধ হবে
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // স্ক্রল করার সময় বা মেনু খোলার সময় Navbar ফিক্সড থাকবে
  useEffect(() => {
    const handleScroll = () => {
      // এখানে আপনি স্ক্রলের উপর ভিত্তি করে ফিক্সড আচরণ পরিবর্তন করতে পারেন যদি চান
      // আপাতত, স্ক্রল করলেও এটা ফিক্সডই থাকবে কারণ isFixed সবসময় true
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // মেনু খোলার সময় Navbar ফিক্সড করা
  useEffect(() => {
    setIsFixed(menuOpen);
  }, [menuOpen]);

  return (
    <nav
      className={`bg-[#EAD9C5] w-full z-50 ${
        isFixed ? "fixed top-0" : "sticky top-0"
      }`}
    >
      {/* Top Borders */}
      <div className="border-t-2 border-black"></div>
      <div className="border-t-4 border-black mt-3"></div>

      {/* Main Navbar Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-6 border-t">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            {/* Left Icon Button */}
            <div className="flex-shrink-0">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  // Cross icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="75"
                    height="66"
                    viewBox="0 0 75 66"
                    fill="none"
                  >
                    <line
                      x1="15"
                      y1="15"
                      x2="60"
                      y2="51"
                      stroke="#2E2F2D"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <line
                      x1="60"
                      y1="15"
                      x2="15"
                      y2="51"
                      stroke="#2E2F2D"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  // Hamburger icon
                  <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="75"
                      height="66"
                      viewBox="0 0 75 66"
                      fill="none"
                    >
                      {[36.88, 44.77, 52.66, 29.25, 21.62, 14].map((y, i) => (
                        <path
                          key={i}
                          d={`M72 ${y}L8 ${y}`}
                          stroke="#2E2F2D"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      ))}
                      <path
                        d="M17 2H2V64H17"
                        stroke="#2E2E2D"
                        strokeWidth="3"
                        strokeLinecap="square"
                      ></path>
                    </svg>
                  </a>
                )}
              </button>
            </div>

            {/* Center Logo */}
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <a href="#" className="text-white font-bold text-xl">
                  <img src="/assets/logo.png" alt="" />
                </a>
              </div>
            </div>

            {/* Right Menu Items (Desktop) */}
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <Link to="/menus">
                  <button className="bg-tan-100 border-y-2  border-black px-10 py-2 font-bold text-black rounded-none focus:outline-none hover:bg-tan-200 transition duration-300 text-[20px]">
                    MENUS
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Borders */}
      <div className="border-t-4 border-black"></div>
      <div className="border-t-2 border-black mt-3"></div>

      {/* Mobile Dropdown Menu */}
      <div className={menuOpen ? "sm:hidden" : "hidden"} id="mobile-menu">
        <div className="px-6 pt-4 pb-6 space-y-3">
          {[
            { name: "Home", path: "/" },
            { name: "Ourstory", path: "/Ourstory" },
            { name: "Menus", path: "/menus" },
            { name: "Gallery", path: "/gallery" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative block pl-6 py-2 border border-black text-gray-800 text-lg font-medium before:content-['•'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:text-black"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Fullscreen Menu (Below Navbar) */}
      {menuOpen && (
        <div className="fixed z-0 top-[150px] left-0 w-full h-[calc(100%-150px)] bg-[#EAD9C5] bg-opacity-90 flex items-center justify-center">
          <div className="text-white text-2xl text-center space-y-4 max-w-4xl mx-auto">
            <Link to="/" className="block py-2">
              Home
            </Link>
            <Link to="/Ourstory" className="block py-2">
              Ourstory
            </Link>
            <Link to="/menus" className="block py-2">
              Menus
            </Link>
            <Link to="/gallery" className="block py-2">
              Gallery
            </Link>
            <Link to="/contact" className="block py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;