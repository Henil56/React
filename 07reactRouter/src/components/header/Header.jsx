import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow-lg sticky top-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/60">
      <nav className="px-4 lg:px-8 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="h-12 rounded-lg drop-shadow-lg"
              alt="Logo"
            />
            <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hidden sm:inline">
              MyPortfolio
            </span>
          </Link>

          {/* Right Buttons */}
          <div className="flex items-center lg:order-2 gap-3">
            <Link
              to="#"
              className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800/70 hover:bg-gray-700/80 rounded-xl transition-all duration-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Get started
            </Link>
          </div>

          {/* Navigation Links */}
          <div
            className="hidden lg:flex lg:items-center lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 text-sm font-medium mt-4 lg:mt-0">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' },
                { path: '/github', label: 'Github' },
              ].map(({ path, label }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 px-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? 'text-cyan-400 bg-gray-800/70 font-semibold shadow-md'
                          : 'text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
