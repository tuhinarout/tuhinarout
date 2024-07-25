import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black z-50 fixed top-0 w-full lg:px-12 mb-10 left-0">
      <div className="main-w-8xl px-2 sm:px-6">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex-shrink-0">
              <a href="/">
                <svg id="logo-16" width="109" height="43" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64.9315 11.4284C62.1883 8.6852 58.9316 6.5091 55.3475 5.0245C51.7633 3.5399 47.9219 2.7758 44.0424 2.7758C40.1629 2.7758 36.3215 3.5399 32.7373 5.0245C29.1532 6.5091 25.8965 8.6852 23.1533 11.4284L44.0424 32.3174L64.9315 11.4284Z" fill="#FFD200"></path>
                  <path d="M44.0686 32.3475C46.8118 35.0907 50.0684 37.2667 53.6526 38.7513C57.2367 40.2359 61.0782 41 64.9577 41C68.837 41 72.679 40.2359 76.263 38.7513C79.847 37.2667 83.104 35.0907 85.847 32.3475L64.9577 11.4584L44.0686 32.3475Z" fill="#06E07F"></path>
                  <path d="M44.017 32.3429C41.2738 35.0861 38.0171 37.2621 34.433 38.7467C30.8488 40.2313 27.0074 40.9954 23.1279 40.9954C19.2484 40.9954 15.407 40.2313 11.8228 38.7467C8.2387 37.2621 4.982 35.0861 2.2388 32.3429L23.1279 11.4538L44.017 32.3429Z" fill="#E3073C"></path>
                  <path d="M64.9831 11.433C67.726 8.6898 70.983 6.5138 74.567 5.0292C78.151 3.5446 81.993 2.7805 85.872 2.7805C89.752 2.7805 93.593 3.5446 97.177 5.0292C100.761 6.5138 104.018 8.6898 106.761 11.433L85.872 32.3221L64.9831 11.433Z" fill="#1F84EF"></path>
                </svg>
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6 text-lg">
              <div className="flex space-x-4">
                <a
                  href="#home"
                  className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  About
                </a>
                <a
                  href="#features"
                  className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Skill
                </a>
                <a
                  href="#projects"
                  className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="nav-link text-gray-300 hover:text-white px-3 py-2 rounded-md text-lg font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} transition-transform transform ease-in-out duration-300`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <div className="flex flex-col space-y-1">
            <a
              href="#home"
              className="nav-link text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
            >
              About
            </a>
            <a
              href="#features"
              className="nav-link text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
            >
              Skill
            </a>
            <a
              href="#projects"
              className="nav-link text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="nav-link text-gray-300 hover:text-white block px-3 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
