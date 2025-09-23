import React from 'react'

export default function Contact() {
    return (
        <div className="relative flex items-center justify-center min-h-[700px] bg-gradient-to-b from-gray-900 via-gray-800 to-black py-16">
            <div className="max-w-6xl w-full mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Contact Info */}
                    <div className="p-8 bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-lg text-gray-300">
                        <h1 className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
                            Get in touch
                        </h1>
                        <p className="text-gray-300 text-lg mt-3">
                            Fill in the form to start a conversation
                        </p>

                        <div className="mt-10 space-y-6">
                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-cyan-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span className="ml-4 font-semibold text-gray-200">
                                    Acme Inc, Street, State, Postal Code
                                </span>
                            </div>

                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-cyan-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span className="ml-4 font-semibold text-gray-200">+44 1234567890</span>
                            </div>

                            <div className="flex items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-cyan-400"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="ml-4 font-semibold text-gray-200">info@acme.org</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="p-8 bg-gray-800/60 backdrop-blur-lg rounded-3xl shadow-lg flex flex-col justify-center space-y-4 text-gray-200">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full py-3 px-4 rounded-xl border border-gray-700 bg-gray-900/50 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full py-3 px-4 rounded-xl border border-gray-700 bg-gray-900/50 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                            />
                        </div>

                        <div>
                            <label htmlFor="tel" className="sr-only">
                                Number
                            </label>
                            <input
                                type="tel"
                                name="tel"
                                id="tel"
                                placeholder="Telephone Number"
                                className="w-full py-3 px-4 rounded-xl border border-gray-700 bg-gray-900/50 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-40 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-6 rounded-2xl mt-4 shadow-lg hover:shadow-cyan-500/40 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
