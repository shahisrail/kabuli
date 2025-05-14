import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#EAD9C5] ">
      <div className=" border-t-2 border-black"> </div>
      <div className=" border-t-4 border-black mt-3"></div>
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 p-10 border-t ">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-gray-300   hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => setMenuOpen(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="75"
                  height="66"
                  viewBox="0 0 75 66"
                  fill="none"
                >
                  <path
                    d="M72 36.8823L8 36.8823"
                    stroke="#2E2F2D"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M72 44.7739L8 44.7739"
                    stroke="#2E2F2D"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M72 52.6658L8 52.6658"
                    stroke="#2E2F2D"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M72 29.2556L8 29.2556"
                    stroke="#2E2F2D"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M72 21.623L8 21.623"
                    stroke="#2E2F2D"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M72 14L8 14"
                    stroke="#2E2F2D"
                    stroke-width="5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M17 2H2V64H17"
                    stroke="#2E2E2D"
                    stroke-width="3"
                    stroke-linecap="square"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <a href="#" className="text-white font-bold text-xl">
                  Your Logo
                </a>

                {/* Add more menu items here */}
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Menu Item 1
                </a>

                {/* Add more menu items here */}
              </div>
            </div>
            <div className="sm:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {/* Hamburger Icon or Menu Icon */}
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t-4 border-black"> </div>
      <div className=" border-t-2 border-black mt-3"></div>

      {/* Mobile Menu */}
      <div className={menuOpen ? "sm:hidden" : "hidden"} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Menu Item 1
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Menu Item 2
          </a>
          {/* Add more mobile menu items here */}
        </div>
      </div>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-4xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <line
                x1="3.90332"
                y1="35.5616"
                x2="36.465"
                y2="2.99992"
                stroke="#2E2F2D"
                stroke-width="5"
                stroke-linecap="round"
              ></line>
              <line
                x1="3.53553"
                y1="3"
                x2="36.0972"
                y2="35.5617"
                stroke="#2E2F2D"
                stroke-width="5"
                stroke-linecap="round"
              ></line>
            </svg>
          </button>
          <div className="text-white text-2xl">
            {/* Fullscreen Menu Content */}
            <a href="#" className="block py-2">
              Fullscreen Menu Item 1
            </a>
            <a href="#" className="block py-2">
              Fullscreen Menu Item 2
            </a>
            {/* Add more fullscreen menu items */}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;