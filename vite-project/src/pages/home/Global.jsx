import React from 'react'

function Global() {
  return (
      <div className='bg-black p-10 relative'>
          <div className="w-full h-[95vh] bg-[#18181C] py-24">

              {/* Heading */}
              <div className="max-w-6xl mx-auto text-center px-4">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-200 leading-snug">
                      Companies we Worked <br />
                      With in SInce 2015
                  </h2>
              </div>

              {/* Logos Row */}
              <div className="max-w-6xl mx-auto mt-14 flex flex-wrap justify-center gap-8 px-4">

                  <div className="bg-black rounded-xl px-10 py-6 text-gray-400 text-xl font-semibold shadow-lg ">
                      Smile
                  </div>

                  <div className="bg-black rounded-xl px-10 py-6 text-gray-400 text-xl font-semibold shadow-lg">
                      Urban
                  </div>

                  <div className="bg-black rounded-xl px-10 py-6 text-gray-400 text-xl font-semibold shadow-lg">
                      natural
                  </div>

                  <div className="bg-black rounded-xl px-10 py-6 text-gray-400 text-xl font-semibold shadow-lg">
                      WAVE
                  </div>

                  <div className="bg-black rounded-xl px-10 py-6 text-gray-400 text-xl font-semibold shadow-lg">
                      Happy
                  </div>

                  <div className="bg-black rounded-xl px-10 py-6 text-gray-400 text-xl font-semibold shadow-lg">
                      Alisa
                  </div>

              </div>
          </div>
          {/* map container*/}

          <div className="absolute -bottom-45 left-45 right-45 z-10   max-w-6xl rounded-[40px] overflow-hidden bg-gradient-to-r py-3 from-pink-400 via-purple-500 to-indigo-600  flex items-center justify-between">

              {/* LEFT CONTENT */}
              <div className="max-w-xl text-white z-10 p-20 pr-0">

                  <p className="text-lg mb-6 opacity-90">
                      Love our Our Tool?
                  </p>

                  <h2 className="text-5xl font-bold leading-tight mb-10">
                      Fell Free to Join our <br />
                      15 Days Free Trial
                  </h2>

                  <button className="bg-black text-white px-8 py-4 rounded-lg 
                         hover:bg-gray-900 transition duration-300">
                      Download Template
                  </button>
              </div>


              {/* RIGHT IMAGE */}
              <div className="hidden lg:block ">
                  <img
                      src="/map.png"   // <-- replace with your image
                      alt="World Design"
                      className="w-[600px] object-fit"
                  />
              </div>

          </div>


      </div>
  )
}

export default Global