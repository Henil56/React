import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()

    return (
        <div className="w-full min-h-[40vh] flex items-center justify-center 
                        via-gray-800 
                        text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 
                        text-4xl sm:text-5xl font-extrabold tracking-wide p-6 rounded-3xl shadow-lg">
            User: {userid}
        </div>
    )
}

export default User
