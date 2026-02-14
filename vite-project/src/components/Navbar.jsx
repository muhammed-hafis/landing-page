import React from 'react'
import { LogOut } from 'lucide-react'
import useAuthStore from '../store/useAuthStore'
import { Link } from 'react-router-dom'
function Navbar() {
    const {logout,token} = useAuthStore()
    return (
        <nav className="fixed z-50 w-full">



            <div className="max-w-7xl mx-auto px-15 py-5 
        flex items-center justify-between text-white">

                {/* Logo */}
                <div className="flex items-center gap-3 ">
                    <img src="/logo.png" className='w-[131px] ' alt="" />
                </div>
{

    token &&
<div className="flex items-center gap-8">
                    <Link to="/home" className="text-[#9E9E9E] hover:text-white transition">
                        Home
                    </Link>
                    <Link to="/dashboard" className="text-[#9E9E9E] hover:text-white transition">
                        Dashboard
                    </Link>

                    <button className="px-6 py-2 rounded-sm 
            bg-gradient-to-r from-pink-400 to-purple-500 
            hover:scale-105 transition duration-300">
                        Download Template
                    </button>

                    <button  className="px-2 py-2 rounded-sm 
            bg-gradient-to-r from-pink-400 to-purple-500 
            hover:scale-105 transition duration-300"
            onClick={logout}>
                        <LogOut/>
                    </button>
                    
                </div>
}
                {/* Right Side */}
                

            </div>
        </nav>
    )
}

export default Navbar