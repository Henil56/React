import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-gray-900/80 backdrop-blur-xl border-t border-gray-700/60 text-gray-300">
            <div className="mx-auto w-full max-w-screen-xl px-6 py-10 lg:py-14">
                
                {/* Top Section */}
                <div className="md:flex md:justify-between md:items-start">
                    
                    {/* Logo */}
                    <div className="mb-8 md:mb-0">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="h-14 md:h-16 rounded-lg drop-shadow-lg"
                                alt="Logo"
                            />
                            <span className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 hidden sm:inline">
                                MyPortfolio
                            </span>
                        </Link>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3 text-sm">
                        {/* Resources */}
                        <div>
                            <h2 className="mb-6 font-semibold text-gray-400 uppercase tracking-wider">
                                Resources
                            </h2>
                            <ul className="space-y-3 font-medium">
                                <li>
                                    <Link to="/" className="hover:text-cyan-400 transition-all duration-200">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-cyan-400 transition-all duration-200">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-cyan-400 transition-all duration-200">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/github" className="hover:text-cyan-400 transition-all duration-200">
                                        Github
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h2 className="mb-6 font-semibold text-gray-400 uppercase tracking-wider">
                                Follow Us
                            </h2>
                            <ul className="space-y-3 font-medium">
                                <li>
                                    <a
                                        href="https://github.com/Henil56"
                                        className="hover:text-cyan-400 transition-all duration-200"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/henil-kukadiya/"
                                        className="hover:text-cyan-400 transition-all duration-200"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/henil_56/"
                                        className="hover:text-cyan-400 transition-all duration-200"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h2 className="mb-6 font-semibold text-gray-400 uppercase tracking-wider">
                                Legal
                            </h2>
                            <ul className="space-y-3 font-medium">
                                <li>
                                    <Link to="#" className="hover:text-cyan-400 transition-all duration-200">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:text-cyan-400 transition-all duration-200">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-700/50" />

                {/* Bottom Section */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500">
                        © 2023{" "}
                        <a
                            href="https://github.com/Henil56"
                            className="hover:text-cyan-400 transition-all duration-200"
                        >
                            Henil Kukadiya
                        </a>
                        . All Rights Reserved.
                    </span>

                    {/* Social Icons */}
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
           {[
    {
      name: 'GitHub',
      icon: 'M10 .333A9.911 9.911 0 0 0 6.866 19.97c.5.092.678-.215.678-.477 0-.237-.009-.868-.014-1.703-2.968.643-3.596-1.418-3.596-1.418-.454-1.152-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.03-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 10 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .264.18.57.688.476A9.911 9.911 0 0 0 10 .333Z',
      link: 'https://github.com/Henil56',
    },
    {
        name: 'LinkedIn',
        icon: 'M13.62,13.62h-2.5V9.41c0-1-0.36-1.68-1.24-1.68c-0.67,0-1.1,0.45-1.28,0.88c-0.07,0.15-0.09,0.37-0.09,0.58v4.42H6V6h2.5v1.08 c0,0.01,0,0.02,0,0.02h0.01v0c0.34-0.52,0.94-1.27,2.26-1.27C12.5,5.81,13.62,7.1,13.62,9.15V13.62z M3.74,4.95 c-0.7,0-1.26-0.56-1.26-1.26c0-0.7,0.57-1.26,1.26-1.26c0.7,0,1.26,0.56,1.26,1.26C4.99,4.39,4.44,4.95,3.74,4.95z M5,13.62H2.5V6H5V13.62z',
        link: 'https://www.linkedin.com/in/henil-kukadiya/',
    },
    {
        name: 'Instagram',
                icon: 'M8 0H12C16.4183 0 20 3.58172 20 8V12C20 16.4183 16.4183 20 12 20H8C3.58172 20 0 16.4183 0 12V8C0 3.58172 3.58172 0 8 0ZM8 2C4.68629 2 2 4.68629 2 8V12C2 15.3137 4.68629 18 8 18H12C15.3137 18 18 15.3137 18 12V8C18 4.68629 15.3137 2 12 2H8ZM14 5.25C14.6904 5.25 15.25 5.80965 15.25 6.5C15.25 7.19035 14.6904 7.75 14 7.75C13.3096 7.75 12.75 7.19035 12.75 6.5C12.75 5.80965 13.3096 5.25 14 5.25ZM10 6.5C7.23858 6.5 5 8.73858 5 11.5C5 14.2614 7.23858 16.5 10 16.5C12.7614 16.5 15 14.2614 15 11.5C15 8.73858 12.7614 6.5 10 6.5ZM10 8.5C11.6569 8.5 13 9.84315 13 11.5C13 13.1569 11.6569 14.5 10 14.5C8.34315 14.5 7 13.1569 7 11.5C7 9.84315 8.34315 8.5 10 8.5Z',
                link: 'https://www.instagram.com/henil_56/',
              },
  ].map((item, i) => (
    <Link
      key={i}
      to={item.link}
      className="text-gray-400 hover:text-cyan-400 transition-all duration-200"
    >
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path fillRule="evenodd" d={item.icon} clipRule="evenodd" />
      </svg>
      <span className="sr-only">{item.name}</span>
    </Link>
  ))}
</div>
                </div>
            </div>
        </footer>
    )
}
