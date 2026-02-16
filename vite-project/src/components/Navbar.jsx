import React, { useState } from 'react'
import { LogOut, Menu, X } from 'lucide-react'
import useAppStore from '../store/useAppStore'
import { Link } from 'react-router-dom'

function Navbar() {
    const { logout, token,theme } = useAppStore()
    const [open, setOpen] = useState(false)

    return (
        <nav className="fixed z-50 w-[100vw] bg-transparent">

            <div
                className="
        max-w-7xl mx-auto px-6 md:px-15 py-5
        flex items-center justify-between
        text-black dark:text-white
        transition-colors duration-300
      "
            >

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src={`${theme === "dark"? '/logo.png':'/logo_dark.png'}`} className='w-[110px] md:w-[131px]' alt="logo" />
                </div>

                {/* Desktop Menu */}
                {token && (
                    <div className="hidden md:flex items-center gap-8">

                        <Link
                            to="/home"
                            className="text-gray-600 hover:text-black dark:text-[#9E9E9E] dark:hover:text-white transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/dashboard"
                            className="text-gray-600 hover:text-black dark:text-[#9E9E9E] dark:hover:text-white transition"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/users"
                            className="text-gray-600 hover:text-black dark:text-[#9E9E9E] dark:hover:text-white transition"
                        >
                            Users
                        </Link>
                        <Link
                            to="/settings"
                            className="text-gray-600 hover:text-black dark:text-[#9E9E9E] dark:hover:text-white transition"
                        >
                            Settings
                        </Link>

                        <button
                            className="
              px-6 py-2 rounded-sm text-white
              bg-gradient-to-r from-pink-400 to-purple-500
              hover:scale-105 transition duration-300
            "
                        >
                            Download Template
                        </button>

                        <button
                            className="
              p-2 rounded-sm text-white
              bg-gradient-to-r from-pink-400 to-purple-500
              hover:scale-105 transition duration-300
            "
                            onClick={logout}
                        >
                            <LogOut size={18} />
                        </button>

                    </div>
                )}

                {/* Mobile Hamburger */}
                {token && (
                    <button
                        className="md:hidden text-black dark:text-white"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                )}

            </div>

            {/* Mobile Menu */}
            {open && token && (
                <div
                    className="
          md:hidden px-6 pb-6 space-y-4
          bg-white text-black
          dark:bg-[#111] dark:text-white
          transition-colors duration-300
        "
                >

                    <Link
                        to="/home"
                        className="block text-gray-600 hover:text-black dark:text-[#9E9E9E] dark:hover:text-white"
                    >
                        Home
                    </Link>

                    <Link
                        to="/dashboard"
                        className="block text-gray-600 hover:text-black dark:text-[#9E9E9E] dark:hover:text-white"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/users"
                        className="block text-gray-600 hover:text-black dark:text-[#9E9E9E] dark:hover:text-white"
                    >
                        Users
                    </Link>

                    <button
                        className="
            w-full px-6 py-2 rounded-sm text-white
            bg-gradient-to-r from-pink-400 to-purple-500
          "
                    >
                        Download Template
                    </button>

                    <button
                        onClick={logout}
                        className="
            w-full flex items-center justify-center gap-2
            px-6 py-2 rounded-sm text-white
            bg-gradient-to-r from-pink-400 to-purple-500
          "
                    >
                        <LogOut size={18} />
                        Logout
                    </button>

                </div>
            )}

        </nav>
    );

}

export default Navbar
