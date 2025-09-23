import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
        <br />

        <div className="mx-auto w-full max-w-7xl font-sans">
            {/* Hero Section */}
            <aside className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-gray-800 to-black 
                               sm:mx-16 mx-4 shadow-2xl">
                <div className="relative z-10 max-w-screen-xl px-6 pb-20 pt-16 sm:py-28 mx-auto lg:px-12">
                    <div className="max-w-xl sm:mt-0 mt-64 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text 
                                       bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight drop-shadow-lg">
                            Download Now
                            <span className="hidden sm:block text-purple-400">Lorem Ipsum</span>
                        </h2>

                        <Link
                            to="/"
                            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-3xl 
                                       bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg 
                                       hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
                        >
                            <svg
                                fill="white"
                                width="26"
                                height="26"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            <span className="ml-2">Download now</span>
                        </Link>
                    </div>
                </div>

                <div className="h-100 absolute inset-0 flex justify-center sm:justify-start items-center sm:pl-20 pt-16">
                    <img
                        src="https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg"
                        alt="Hero Image"
                        className="w-72 sm:w-[21rem] rounded-2xl drop-shadow-[0_10px_25px_rgba(0,255,255,0.35)]"
                    />
                </div>
            </aside>

            {/* Title Section */}
            <h1 className="text-center text-3xl sm:text-5xl py-12 font-extrabold tracking-wide 
                           text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 
                           drop-shadow-lg">
                Lorem Ipsum Yojo
            </h1>
        </div>
        </>
    )
}
