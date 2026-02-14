import React from 'react'
import Navbar from '../../components/Navbar'
import GlowCircle from '../../components/GlowCircle'
import HeroContainer from '../../components/HeroContainer'

function Hero() {
  return (
      <div className='bg-transparent flex justify-center h-[100vh] text-white relative  bg-[repeating-linear-gradient(to_right,_rgba(255,255,255,.1)_0px,_rgba(255,255,255,0.1)_1px,_transparent_1px,_transparent_120px)]'>



        <Navbar/>

          <div className='w-1/2 flex flex-col gap-6  items-center'>
              <h1 className='text-[64px] leading-20  text-center pt-50 font-semibold text-white'>
                  Beatiful Landing Page <br />Design for You
              </h1>
              <p className='text-[#9E9E9E] text-center text-lg'>
                  A good design is not only aesthetically pleasing. but also <br /> functional. It should be able to solve the problem
              </p>
              <button className=' py-2 px-6 rounded bg-linear-to-r from-pink-400 to-purple-500'>
                  Download Template
              </button>
          </div>
          
          <GlowCircle position="left-40 top-96" size="w-32 h-32" blur="blur-md" />

          <GlowCircle position="right-40 top-72" size="w-24 h-24" blur="blur-sm" />

          <GlowCircle position="top-20 left-170" size="w-16 h-16" blur="blur-sm" />

          <div className='absolute  top-30 size-60  rounded-full bg-white/20 opacity-60  blur-3xl'>

          </div>
          <div className="absolute  top-194 bg-gradient-to-r from-pink-400 to-purple-500 h-[474px] w-full">


              <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 200">
                  <path fill="#000" d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z"></path>
              </svg>


              <svg className="absolute -bottom-[1px] left-0 w-full" viewBox="0 0 1440 200">
                  <path fill="#000" d="M0,200 C480,100 960,100 1440,200 L1440,200 L0,200 Z"></path>
              </svg>

          </div>
          <HeroContainer/>

      </div>
  )
}

export default Hero