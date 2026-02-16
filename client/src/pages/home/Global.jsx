import React from 'react'

function Global() {
    const logos = [
        "/text/smile.png",
        "/text/urban.png",
        "/text/natural.png",
        "/text/wave.png",
        "/text/happy.png",
        "/text/alisa.png",
    ];

    return (
        <div
            className="
      p-10 relative
      bg-transparent text-black
       dark:text-white
      transition-colors duration-300
    "
        >
            {/* Companies Section */}
            <div
                className="
        w-full min-h-[95vh] py-24
        bg-gray-100
        dark:bg-[#18181C]
        transition-colors duration-300
      "
            >

                {/* Heading */}
                <div className="max-w-6xl mx-auto text-center px-4">
                    <h2
                        className="
            text-4xl md:text-5xl font-bold leading-snug
            text-gray-800
            dark:text-gray-200
          "
                    >
                        Companies we Worked <br />
                        With Since 2015
                    </h2>
                </div>

                {/* Logos Row */}
                <div className="max-w-6xl mx-auto mt-14 flex flex-wrap justify-between gap-6">

                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="
              rounded-xl px-7 py-6 text-xl font-semibold shadow-md
              bg-white text-gray-600 border border-gray-200
              dark:bg-black dark:text-gray-400 dark:border-white/5
              transition-colors duration-300
            "
                        >
                            <img
                                src={logo}
                                className="w-[100px]"
                                alt={`logo-${index}`}
                            />
                        </div>
                    ))}

                </div>
            </div>

            {/* CTA Section */}
            <div
                className="
        absolute mx-auto -bottom-45 left-45 right-45 z-10
        max-w-6xl rounded-[40px] overflow-hidden
        bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600
        py-3 flex items-center justify-between
      "
            >

                {/* LEFT CONTENT */}
                <div className="max-w-xl text-white z-10 p-20 pr-0">

                    <p className="text-lg mb-6 opacity-90">
                        Love Our Tool?
                    </p>

                    <h2 className="text-5xl font-bold leading-tight mb-10">
                        Feel Free to Join our <br />
                        15 Days Free Trial
                    </h2>

                    <button
                        className="
            px-8 py-4 rounded-lg
            bg-white text-black
            dark:bg-black dark:text-white
            hover:opacity-90
            transition duration-300
          "
                    >
                        Download Template
                    </button>

                </div>

                {/* RIGHT IMAGE */}
                <div className="hidden lg:block">
                    <img
                        src="/map.png"
                        alt="World Design"
                        className="w-[600px] object-contain"
                    />
                </div>

            </div>

        </div>
    );

}

export default Global