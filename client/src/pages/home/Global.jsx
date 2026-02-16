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
      relative
      px-4 sm:px-6 md:px-10
      pt-16 
      bg-transparent text-black
      dark:text-white
      transition-colors duration-300
    "
        >

            {/* ================= Companies Section ================= */}
            <div
                className="
        w-full min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh]
        py-16 sm:py-20 md:py-24
        bg-gray-100
        dark:bg-[#18181C]
        transition-colors duration-300
      "
            >

                {/* Heading */}
                <div className="max-w-6xl mx-auto text-center px-4">
                    <h2
                        className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold leading-snug
            text-gray-800 dark:text-gray-200
          "
                    >
                        Companies we Worked <br className="hidden sm:block" />
                        With Since 2015
                    </h2>
                </div>

                {/* Logos Row */}
                <div
                    className="
          max-w-6xl mx-auto
          mt-10 sm:mt-12 md:mt-14
          px-4
          flex flex-wrap
          justify-center md:justify-between
          gap-4 sm:gap-6
        "
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="
              flex items-center justify-center
              w-[45%] sm:w-[30%] md:w-[22%] lg:w-auto
              max-w-[180px]
              rounded-xl
              px-4 py-4 sm:px-6 sm:py-6
              shadow-md
              bg-white border border-gray-200
              dark:bg-black dark:border-white/5
              transition-colors duration-300
            "
                        >
                            <img
                                src={logo}
                                className="w-14 sm:w-16 md:w-[100px] object-contain"
                                alt={`logo-${index}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ================= CTA Section ================= */}
            <div
                className="
        absolute mx-auto
        -bottom-28 sm:-bottom-32 md:-bottom-40 lg:-bottom-55
        left-4 right-4
        sm:left-8 sm:right-8
        md:left-16 md:right-16
        lg:left-45 lg:right-45
        z-10
        max-w-6xl
        rounded-[24px] sm:rounded-[32px] md:rounded-[40px]
        overflow-hidden
        bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600
        flex flex-col lg:flex-row
        items-center justify-between
      "
            >

                {/* LEFT CONTENT */}
                <div
                    className="
          w-full lg:max-w-xl
          text-white
          px-6 sm:px-10 md:px-14 lg:p-20 lg:pr-0
          py-10
          text-center lg:text-left
        "
                >
                    <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-6 opacity-90">
                        Love Our Tool?
                    </p>

                    <h2
                        className="
            text-1xl sm:text-2xl md:text-3xl xl:text-5xl
            font-bold leading-snug
            mb-6 md:mb-8 lg:mb-10
          "
                    >
                        Feel Free to Join our <br className="hidden sm:block" />
                        15 Days Free Trial
                    </h2>

                    <button
                        className="
            px-6 sm:px-8
            py-3 sm:py-4
            rounded-lg
            bg-white text-black
            dark:bg-black dark:text-white
            hover:opacity-90
            transition duration-300
            text-sm md:text-base
          "
                    >
                        Download Template
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div
                    className="
          hidden lg:flex
          justify-center
          w-full lg:w-auto
          px-6 pe-0 pb-8 lg:pb-0
        "
                >
                    <img
                        src="/map.png"
                        alt="World Design"
                        className="
            w-48 sm:w-64 md:w-90 lg:w-[650px]
            object-contain
          "
                    />
                </div>

            </div>

        </div>
    );


}

export default Global