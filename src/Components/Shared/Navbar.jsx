import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isFixed, setIsFixed] = useState(true); // Initially fixed

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      // Optional custom scroll logic
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Mobile Navbar (visible only on small screens) */}
      <div className="md:hidden block px-6 py-4 border-t">
        <div className="flex justify-between items-center">
          {/* Menu toggle button */}
          <div>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="34"
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="34"
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
              )}
            </button>
          </div>
          {/* Logo */}
          <div>
            <Link to="/">
              <img src="/assets/logo1.png" alt="Logo" className="h-16" />
            </Link>
          </div>

          <div>
            <Link to="/menus">
              <button className="bg-tan-100 border-y-2 border-black  font-bold text-black rounded-none focus:outline-none hover:bg-tan-200 transition duration-300 text-[17px]">
                MENUS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="max-w-7xl hidden md:block mx-auto px-5 sm:px-6 lg:px-8 py-6 border-t">
        <div className="relative flex items-center justify-between h-16">
          {/* Left: Logo & toggle (not needed on desktop) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="34"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="34"
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
            )}
          </button>

          {/* Center: Logo (already shown above) */}
          <div className="hidden sm:block">
            <Link to="/" className="text-white font-bold text-xl">
              <img src="/assets/logo1.png" alt="Logo" />
            </Link>
          </div>

          {/* Right: Menu button */}
          <div className="hidden sm:block">
            <Link to="/menus">
              <button className="bg-tan-100 border-y-2 border-black px-10 font-bold text-black rounded-none focus:outline-none hover:bg-tan-200 transition duration-300 text-[17px]">
                MENUS
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Borders */}
      <div className="border-t-4 border-black"></div>
      <div className="border-t-2 border-black mt-3"></div>

      {/* Fullscreen Menu for Mobile */}
      {menuOpen && (
        <div className="fixed z-0 top-[150px] left-0 w-full h-[calc(100%-150px)] bg-[#EAD9C5] bg-opacity-90">
          <div className="bg-[url('/assets/Vector-1.png')] top-5 font-extrabold bg-opacity-0 bg-center text-black text-2xl text-center space-y-4 max-w-5xl p-10 border-l-2 border-r-2 border-black mx-auto">
            {[
              { name: "Home", path: "/" },
              { name: "Our Story", path: "/Ourstory" },
              { name: "Menus", path: "/menus" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block py-2 hover:underline"
              >
                {item.name}
              </Link>
            ))}

            <div className="flex justify-center items-center py-5">
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

            <div className="join">
              <div>
                <label className="input validator join-item dark:bg-white">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    className="dark:bg-white"
                    type="email"
                    placeholder="mail@site.com"
                    required
                  />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <button className="btn btn-neutral join-item">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
