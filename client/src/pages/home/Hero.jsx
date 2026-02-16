import React from 'react'
import GlowCircle from '../../components/GlowCircle'
import HeroContainer from '../../components/HeroContainer'

function Hero() {
    return (
        <div
            className="
        relative flex justify-center min-h-screen
        bg-transparent text-black
        dark:text-white
        transition-colors duration-300

        bg-[repeating-linear-gradient(to_right,_rgba(0,0,0,0.05)_0px,_rgba(0,0,0,0.05)_1px,_transparent_1px,_transparent_120px)]
        dark:bg-[repeating-linear-gradient(to_right,_rgba(255,255,255,.1)_0px,_rgba(255,255,255,0.1)_1px,_transparent_1px,_transparent_120px)]
      "
        >

            {/* Center Content */}
            <div className='w-1/2 flex flex-col gap-6 items-center text-center pt-40'>

                <h1 className='lg:text-[64px] text-3xl lg:leading-20 font-semibold'>
                    Beautiful Landing Page <br /> Design for You
                </h1>

                <p className='text-gray-600 dark:text-zinc-400 lg:text-lg'>
                    A good design is not only aesthetically pleasing but also
                    functional. It should be able to solve the problem
                </p>

                <button className='py-3 px-2 lg:px-6 rounded text-white bg-gradient-to-r from-pink-400 to-purple-500 hover:opacity-90 transition text-sm' >
                    Download Template
                </button>

            </div>

            {/* Glow Effects */}
            <GlowCircle position="left-40 top-96" size="w-32 h-32" blur="blur-md" />
            <GlowCircle position="right-40 top-72" size="w-24 h-24" blur="blur-sm" />
            <GlowCircle position="top-20 left-170" size="w-16 h-16" blur="blur-sm" />

            {/* Soft Circle */}
            <div className="
        absolute top-30 size-60 rounded-full
        bg-black/10 dark:bg-white/20
        opacity-60 blur-3xl
      " />

            {/* Gradient Wave Section */}
            <div className='absolute top-[750px] w-full h-[474px] bg-gradient-to-r from-pink-400 to-purple-500'>

                {/* Top Curve */}
                <svg
                    className="absolute top-0 left-0 w-full"
                    viewBox="0 0 1440 200"
                >
                    <path
                        className="fill-white dark:fill-black"
                        d="M0,0 C480,100 960,100 1440,0 L1440,0 L0,0 Z"
                    />
                </svg>

                {/* Bottom Curve */}
                <svg
                    className="absolute -bottom-[1px] left-0 w-full"
                    viewBox="0 0 1440 200"
                >
                    <path
                        className="fill-white dark:fill-black"
                        d="M0,200 C480,100 960,100 1440,200 L1440,200 L0,200 Z"
                    />
                </svg>

            </div>

            <HeroContainer />

        </div>
    )
}

export default Hero
