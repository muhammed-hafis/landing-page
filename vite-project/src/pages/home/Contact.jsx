import React from 'react'
import GlowCircle from '../../components/GlowCircle'

function Contact() {
    return (
        <div
            className="
      w-full pt-70 pb-22 min-h-screen
      px-10 flex items-center justify-center overflow-hidden
       text-black
      bg-transparent dark:text-white
      transition-colors duration-300
    "
        >

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE - Globe */}
                <div className="flex justify-center relative hidden md:block">

                    <GlowCircle position="left-0" size="w-15 h-15" blur="blur-sm" />
                    <GlowCircle position="-right-4 -bottom-20" size="w-25 h-25" blur="blur-sm" />

                    <img src="/glob.png" alt="" />

                </div>

                {/* RIGHT SIDE - Form */}
                <div>

                    <h2 className="text-5xl font-bold mb-6">
                        Get In Touch
                    </h2>

                    <p
                        className="
            mb-10 max-w-md
            text-gray-600
            dark:text-[#9E9E9E]
          "
                    >
                        A good design is not only aesthetically pleasing, but also functional.
                        It should be able to solve the problem
                    </p>

                    <form className="space-y-6">

                        {/* Email */}
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="
              w-full px-6 py-4 rounded-lg
              bg-gray-100 border border-gray-300 text-black
              dark:bg-[#18181C] dark:border-zinc-700 dark:text-white
              outline-none focus:ring-2 focus:ring-purple-500
              transition-colors duration-300
            "
                        />

                        {/* Name */}
                        <input
                            type="text"
                            placeholder="Name"
                            className="
              w-full px-6 py-4 rounded-lg
              bg-gray-100 border border-gray-300 text-black
              dark:bg-[#18181C] dark:border-zinc-700 dark:text-white
              outline-none focus:ring-2 focus:ring-purple-500
              transition-colors duration-300
            "
                        />

                        {/* Message */}
                        <textarea
                            rows="5"
                            placeholder="Message"
                            className="
              w-full px-6 py-4 rounded-lg
              bg-gray-100 border border-gray-300 text-black
              dark:bg-[#18181C] dark:border-zinc-700 dark:text-white
              outline-none focus:ring-2 focus:ring-purple-500
              transition-colors duration-300
            "
                        ></textarea>

                        {/* Button */}
                        <button
                            type="submit"
                            className="
              px-8 py-3 rounded-sm text-white text-[14px]
              bg-gradient-to-r from-pink-400 to-purple-600
              hover:opacity-90 transition
            "
                        >
                            Get in Touch
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );

}

export default Contact