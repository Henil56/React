import React from 'react'

export default function About() {
    return (
        <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-200">
            <div className="container mx-auto px-6 md:px-12 xl:px-20">
                <div className="flex flex-col-reverse md:flex-row md:items-center md:gap-12">
                    
                    {/* Left Side - Image */}
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg"
                            alt="dog"
                            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                    
                    {/* Right Side - Text */}
                    <div className="md:w-7/12 lg:w-6/12 space-y-6">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 leading-tight">
                            React development is carried out by{' '}
                            <span className="text-cyan-400">passionate developers</span>
                        </h2>
                        
                        <p className="text-lg leading-relaxed text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Eum omnis voluptatem accusantium nemo perspiciatis delectus 
                            atque autem! Voluptatum tenetur beatae unde aperiam, repellat 
                            expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        
                        <p className="text-lg leading-relaxed text-gray-300">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat 
                            iure expedita at? Asperiores nemo possimus nesciunt dicta 
                            veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
