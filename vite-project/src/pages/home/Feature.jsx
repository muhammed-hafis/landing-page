import React from 'react'
import {  Layers, User, PenTool, Scissors, Monitor, } from "lucide-react";
function Feature() {
    const features = [
        { icon: Layers },
        { icon: Layers },
        { icon: User, gradient: true },
        { icon: PenTool },
        { icon: Scissors },
        { icon: Monitor },
    ];
    return (
        <div className="bg-black text-white py-24 pb-5 px-6 mt-125 md:mt-120 xl:mt-95">

            {/* Section Header */}
            <div className="max-w-6xl mx-auto mb-16">
                <h1 className="text-6xl font-semibold">Feature Boxes</h1>
                <p className="text-white/60 mt-4 max-w-xl text-xl">
                    A good design is not only aesthetically pleasing, but also functional.
                    It should be able to solve the problem.
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                {features.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            className="bg-[#111117] rounded-3xl px-8 py-15 text-center 
              border border-white/5 
              hover:border-white/10 hover:-translate-y-2 
              transition duration-300"
                        >
                            {/* Icon Container */}
                            <div
                                className={`size-20 mx-auto mb-6 rounded-3xl flex items-center justify-center 
                ${item.gradient
                                        ? "bg-gradient-to-br from-pink-400 to-purple-500"
                                        : "bg-white/5"
                                    }`}
                            >
                                <Icon size={28} className="text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-[20px] font-semibold mb-3">
                                Fully Customizable
                            </h3>

                            {/* Description */}
                            <p className="text-[#9E9E9E] text-[14px] leading-9">
                                A good design is not only aesthetically pleasing, but also
                                functional. It should be able to solve the problem.
                            </p>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default Feature