import React from 'react'
import GlowCircle from '../../components/GlowCircle'

function Contact() {
  return (
      <div className="w-full pt-70 pb-20 min-h-screen bg-black flex items-center justify-center overflow-hidden px-10">



          <div className="max-w-6xl w-full lg:grid-cols-2 grid grid-cols-1 gap-16 items-center">

              {/* LEFT SIDE - Globe */}
              <div className="flex justify-center relative hidden md:block">
                  {/* Floating Blur Lights */}

                  <GlowCircle position="left-0" size="w-15 h-15" blur="blur-sm" />


                  <GlowCircle position="-right-4 -bottom-20" size="w-25 h-25" blur="blur-sm" />

                  <img src="/glob.png" alt="" />
              </div>


              {/* RIGHT SIDE - Form */}
              <div className=''>
                  <h2 className="text-5xl font-bold text-white mb-6">
                      Get In Touch
                  </h2>

                  <p className="text-[#9E9E9E] mb-10 max-w-md">
                      A good design is not only aesthetically pleasing, but also functional.
                      It should be able to solve the problem
                  </p>

                  <form className="space-y-6 ">

                      <input
                          type="email"
                          placeholder="Your Email"
                          className="w-full bg-[#18181C] text-[#9E9E9E] px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                      />

                      <input
                          type="text"
                          placeholder="Name"
                          className="w-full bg-[#18181C] text-[#9E9E9E] px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                      />

                      <textarea
                          rows="5"
                          placeholder="Message"
                          className="w-full bg-[#18181C] text-[#9E9E9E] px-6 py-4 rounded-lg outline-none focus:ring-2 focus:ring-purple-500"
                      ></textarea>

                      <button
                          type="submit"
                          className="px-8 py-3 rounded-sm text-white text-[14px] bg-gradient-to-r from-pink-400 to-purple-600 hover:opacity-90 transition"
                      >
                          Get in Touch
                      </button>

                  </form>
              </div>

          </div>
      </div>
  )
}

export default Contact