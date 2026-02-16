import React from 'react'

function Third() {
    return (
        <div
            className="
      px-6
      bg-transparent text-black
       dark:text-white
      transition-colors duration-300
    "
        >

            <div className="max-w-7xl py-5 mx-auto pl-10 grid lg:grid-cols-2 gap-20 lg:gap-50 items-center">

                {/* LEFT SIDE - IMAGE */}
                <div className="relative hidden lg:flex size-[700px] justify-center items-center">

                    {/* Background Image */}
                    <img
                        src="/round.png"
                        alt="Orbit Graphic"
                        className="w-full h-full object-contain"
                    />

                    {/* Center Logo */}
                    <div className="absolute w-[65px] rounded-full flex items-center justify-center">
                        <img src="/Vector.png" alt="" />
                    </div>

                    {/* Small Balls */}
                    <img
                        src="/Group 124.png"
                        alt=""
                        className="absolute top-36 right-67 -translate-x-1/2 size-8"
                    />

                    <img
                        src="/Group 124.png"
                        alt=""
                        className="absolute bottom-41 right-55 -translate-x-1/2 size-8"
                    />

                    <img
                        src="/Group 124.png"
                        alt=""
                        className="absolute top-90 left-39 -translate-x-1/2 size-8"
                    />

                    {/* Right Icon */}
                    <img
                        src="/Ellipse 9.png"
                        alt=""
                        className="absolute right-34 top-70 -translate-y-1/2 size-18"
                    />

                    {/* Bottom Icon */}
                    <img
                        src="/Ellipse 10.png"
                        alt=""
                        className="absolute bottom-36 left-65 -translate-x-1/2 size-18"
                    />

                    {/* Left Icon */}
                    <img
                        src="/Ellipse 11.png"
                        alt=""
                        className="absolute left-37 top-62 -translate-y-1/2 size-18"
                    />

                </div>

                {/* RIGHT SIDE - TEXT */}
                <div>

                    <h2 className="text-4xl sm:text-5xl font-semibold leading-tight">
                        We're here to <br />
                        guide and help <br />
                        you at all times
                    </h2>

                    <p
                        className="
            mt-6 text-lg leading-relaxed max-w-md
            text-gray-600
            dark:text-[#9E9E9E]
          "
                    >
                        A good design is not only aesthetically pleasing, but also
                        functional. It should be able to solve the problem.
                    </p>

                    <button
                        className="
            mt-8 px-8 py-3 rounded-lg text-white
            bg-gradient-to-r from-pink-400 to-purple-500
            hover:scale-105 transition duration-300
          "
                    >
                        Download
                    </button>

                </div>

            </div>
        </div>
    );

}

export default Third