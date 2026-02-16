import React from 'react'
import {  Layers, User, PenTool, Scissors, Monitor, } from "lucide-react";
function Feature() {
    const features = [
        { icon: "/icons/icon1.png" },
        { icon: "/icons/icon2.png" },
        { icon: "/icons/icon3.png", gradient: true },
        { icon: "/icons/icon4.png" },
        { icon: "/icons/icon5.png" },
        { icon: "/icons/icon6.png" },
    ];
    return (
        <div
            className="
      py-24 pb-5 px-6 mt-125 md:mt-120 xl:mt-95
      bg-transparent text-black
      dark:text-white
      transition-colors duration-300
    "
        >

            {/* Section Header */}
            <div className="max-w-6xl mx-auto mb-16">
                <h1 className="text-6xl font-semibold">
                    Feature Boxes
                </h1>

                <p className="mt-4 max-w-xl text-xl
        text-gray-600
        dark:text-white/60
      ">
                    A good design is not only aesthetically pleasing, but also functional.
                    It should be able to solve the problem.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                {features.map((item, index) => (
                    <div
                        key={index}
                        className="
            rounded-3xl px-8 py-15 text-center
            border
            bg-gray-100 border-gray-300
            dark:bg-[#111117] dark:border-white/5
            hover:-translate-y-2
            dark:hover:border-white/10
            transition-all duration-300
          "
                    >

                        {/* Icon Container */}
                        <div
                            className={`size-20 mx-auto mb-6 rounded-3xl flex items-center justify-center
              ${item.gradient
                                    ? "bg-gradient-to-br from-pink-400 to-purple-500"
                                    : "bg-gray-400 dark:bg-white/5"
                                }
            `}
                        >
                            <img
                                src={item.icon}
                                alt="icon"
                                className="w-7 h-7 object-contain"
                            />
                        </div>

                        <h3 className="text-[20px] font-semibold mb-3">
                            Fully Customizable
                        </h3>

                        <p
                            className="
              text-[14px] leading-6
              text-gray-600
              dark:text-[#9E9E9E]
            "
                        >
                            A good design is not only aesthetically pleasing, but also
                            functional. It should be able to solve the problem.
                        </p>

                    </div>
                ))}

            </div>
        </div>
    )

}

export default Feature