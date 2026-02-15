import React from 'react'

function HeroContainer() {
  const barData = [0, 25, 45, 55, 75, 90];
  const profile = ["1.png",'2.png','3.png','4.png']
  return (
    <div className='absolute p-10 top-140 bg-[#131415] w-[60%] h-[550px] rounded-4xl 
      grid grid-cols-3 grid-rows-2 gap-10 '>
        {/* first */}
      <div className='row-span-2 flex flex-col p-7  items-center bg-[#222228] rounded-2xl '>

        <div className='border-b-[#313139] flex justify-center w-full border-b-2 pb-5'>  <img src="/Vector (1).png" className='w-10 ' alt="" /></div>

        <div className='flex w-full flex-col'>

          <div className="w-full   ">

            {[...Array(5)].map((_, i) => (
               <div key={i} className="flex w-[80%] pt-5 gap-5 items-center">

              {/* Avatar */}
              <div className="size-[20px] rounded bg-[#313139]"></div>

              <div className="flex-1 flex-col ">
                <div className="flex w-full justify-between space-y-2">

                  {/* Name */}
                  <div className="h-[6px] bg-[#313139] rounded w-[70%]"></div>

                  {/* Subtitle */}
                  <div className="h-[6px] bg-[#313139] rounded w-[20%]"></div>
                </div>
                {/* Bottom row */}
                <div className=" flex justify-between w-[70%]">
                  <div className="h-[6px] bg-[#313139] rounded w-2/4"></div>
                  <div className="h-[6px] bg-[#313139] rounded w-1/3"></div>
                </div>
              </div>



            </div>
            ))}
           



          </div>
        </div>
        <div className="flex items-center py-13 w-full justify-center">

          <div className="flex flex-col w-3/4 items-center ">

            {/* Avatar */}
            <div className="size-[42px] rounded-full bg-[url('/profile/1.png')] bg-center bg-cover"></div>

            

            {/* Subtitle row */}
            <div className="flex w-full py-3 justify-between gap-2">
              <div className="h-[8px] w-[60%] bg-zinc-700 rounded-full"></div>
              <div className="h-[8px] w-20 bg-zinc-700 rounded-full"></div>
            </div>
            {/* Name */}
            <div className="h-[8px] w-[50%]  bg-zinc-700 rounded-full"></div>
          </div>

        </div>

      </div>
      {/* second */}
      <div class="size-full bg-[#222228] rounded-2xl p-6 flex flex-col shadow-2xl overflow-hidden relative">

          <div class="flex justify-between items-start w-full">
            <div class="space-y-2 w-full">
              <div  className="flex w-full gap-15 items-center">

                
                <div className="flex-1 flex-col ">
                  <div className="flex w-full justify-between space-y-2">

                    {/* Name */}
                    <div className="h-[6px] bg-[#313139] rounded w-[70%]"></div>

                    {/* Subtitle */}
                    <div className="h-[6px] bg-[#313139] rounded w-[20%]"></div>
                  </div>
                  {/* Bottom row */}
                  <div className=" flex justify-between w-[70%]">
                    <div className="h-[6px] bg-[#313139] rounded w-2/4"></div>
                    <div className="h-[6px] bg-[#313139] rounded w-1/3"></div>
                  </div>
                </div>

                {/* Avatar */}
                <div className="size-[20px] rounded bg-[#313139]"></div>


              </div>
            </div>

            
          </div>

          <div class="flex-1 flex items-center justify-center relative">

          <svg
            className="size-[80%] rotate-90"
            viewBox="0 0 100 100"
          >
            <defs>
              <linearGradient
                id="progressGradient"
                gradientUnits="userSpaceOnUse"
                x1="0"
                y1="0"
                x2="0"
                y2="100"
              >
                <stop offset="0%" stopColor="#7c4dff" />
                <stop offset="100%" stopColor="#f78fb3" />
              </linearGradient>
            </defs>

            {/* Background Ring */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#2a2a33"
              strokeWidth="8"
              fill="transparent"
            />

            {/* Progress Ring */}
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="url(#progressGradient)"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray="251.2"
              strokeDashoffset="60"
              strokeLinecap="round"
            />

            {/* Inner Circle */}
            <circle
              cx="50"
              cy="50"
              r="17"
              stroke="#2f2f38"
              strokeWidth="6"
              fill="transparent"
              opacity="0.9"
            />
          </svg>


          </div>

        </div>
      {/* Fourth */}
      <div className='relative h-[150%] flex flex-col p-7  items-center bg-[#222228] rounded-2xl'>
        <div className="absolute bottom-0 left-0 w-full h-50 rounded-2xl bg-gradient-to-t from-[#222228] to-transparent pointer-events-none"></div>
        <div class="flex justify-between items-start w-full">
          <div class="space-y-2 w-full">
            <div className="flex w-full gap-15 items-center">


              <div className="flex-1 flex-col ">
                <div className="flex w-full justify-between space-y-2">

                  {/* Name */}
                  <div className="h-[6px] bg-[#313139] rounded w-[70%]"></div>

                  {/* Subtitle */}
                  <div className="h-[6px] bg-[#313139] rounded w-[20%]"></div>
                </div>
                {/* Bottom row */}
                <div className=" flex justify-between w-[70%]">
                  <div className="h-[6px] bg-[#313139] rounded w-2/4"></div>
                  <div className="h-[6px] bg-[#313139] rounded w-1/3"></div>
                </div>
              </div>

              {/* Avatar */}
              <div className="size-[20px] rounded bg-[#313139]"></div>


            </div>
          </div>


        </div>

        <div className='flex w-full flex-col'>

          <div className="w-full pt-3">

            {profile.map((p, i) => (
              
              <div key={i} className="flex gap-5 items-center border-b-2 border-[#313139] py-2">

               
                {/* Avatar */}
                <div className="size-[42px] rounded-full  bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('/profile/${p}')` }}>
                  
                </div>

                <div className="flex-1 flex-col ">
                  <div className="flex w-full justify-start gap-3 space-y-2">

                    {/* Name */}
                    <div className="h-[6px] bg-[#313139] rounded w-[50%]"></div>

                    {/* Subtitle */}
                    <div className="h-[6px] bg-[#313139] rounded w-[15%]"></div>
                  </div>
                  {/* Bottom row */}
                  <div className=" flex justify-between w-[50%]">
                    <div className="h-[6px] bg-[#313139] rounded w-2/4"></div>
                    <div className="h-[6px] bg-[#313139] rounded w-1/3"></div>
                  </div>
                </div>



              </div>
            ))}




          </div>
        </div>
      

      </div>
      {/* Third */}
      <div class="size-full bg-[#222228] rounded-2xl p-6 flex flex-col shadow-2xl overflow-hidden relative">

        <div class="flex justify-between items-start w-full border-b-2 pb-5 border-[#313139]">
          <div class="space-y-2 w-full">
            <div className="flex w-full gap-15 items-center">


              <div className="flex-1 flex-col ">
                <div className="flex w-full justify-between space-y-2">

                  {/* Name */}
                  <div className="h-[6px] bg-[#313139] rounded w-[70%]"></div>

                  {/* Subtitle */}
                  <div className="h-[6px] bg-[#313139] rounded w-[20%]"></div>
                </div>
                {/* Bottom row */}
                <div className=" flex justify-between w-[70%]">
                  <div className="h-[6px] bg-[#313139] rounded w-2/4"></div>
                  <div className="h-[6px] bg-[#313139] rounded w-1/3"></div>
                </div>
              </div>

              {/* Avatar */}
              <div className="size-[20px] rounded bg-[#313139]"></div>


            </div>
          </div>


        </div>
        {/* Chart Section (New Bottom Side) */}
        <div className="mt-10 flex justify-between items-end h-56 gap-3 px-2">
          {barData.map((height, index) => (
            <div
              key={index}
              className="relative flex-1 bg-[#2d2d35] rounded-full overflow-hidden h-full group"
            >
              {/* The "Progress" part of the bar with gradient */}
              <div
                className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-[#5d47f5] via-[#a855f7] to-[#f472b6] transition-all duration-700 ease-out"
                style={{ height: `${height}%` }}
              >
                {/* Subtle shine effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>
       

      </div>
      <div className=' bg-[#222228] rounded-2xl h-[50%] mt-27'></div>
    </div>
  )
}

export default HeroContainer