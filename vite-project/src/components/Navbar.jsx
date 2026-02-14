import React from 'react'

function Navbar() {
    return (
        <nav className="fixed z-50 w-full">



            <div className="max-w-7xl mx-auto px-15 py-5 
        flex items-center justify-between text-white">

                {/* Logo */}
                <div className="flex items-center gap-3 ">
                    <img src="/logo.png" className='w-[131px] ' alt="" />
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-8">
                    <a href="#" className="text-[#9E9E9E] hover:text-white transition">
                        Home
                    </a>

                    <button className="px-6 py-2 rounded-sm 
            bg-gradient-to-r from-pink-400 to-purple-500 
            hover:scale-105 transition duration-300">
                        Download Template
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar