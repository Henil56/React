import React from 'react'

function card({username, btnText="Bye bye"}) {

  console.log(username);
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 ">
        <img
          src="https://edge.dailyvoice.com/upload/Sydney_Sweeney_at_the_2024_Toronto_International_Film_Festival_03_cropped.jpg?width=720&height=720"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-400"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{username}</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum
              soluta amet corporis accusantium aliquid consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {btnText}
          </button>
        </div>
      </div>
  )
}

export default card