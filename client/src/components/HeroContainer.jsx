import React from 'react'

function HeroContainer() {
  const barData = [0, 25, 45, 55, 75, 90];
  const profile = ["1.png",'2.png','3.png','4.png']
  return (
    <div
      className="
    absolute top-140
    w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]
    h-[500px] sm:h-[520px] md:h-[550px]
    p-6 md:p-10
    bg-[#131415]
    rounded-3xl md:rounded-4xl

    flex flex-col overflow-auto
    lg:grid lg:grid-cols-3 lg:grid-rows-2
    gap-6 md:gap-10
  "
    >

        {/* first */}
      <div className='lg:row-span-2 flex flex-col p-7  items-center bg-[#222228] rounded-2xl '>

        {/* Header section with bottom border and centered icon */}
        <div className='border-b-[#313139] flex justify-center w-full border-b-2 pb-5'>
          <img src="/Vector (1).png" className='w-10 ' alt="" />
        </div>

        {/* Middle section containing repeated skeleton rows */}
        <div className='flex w-full flex-col'>

          <div className="w-full">

            {/* Mapping 5 skeleton placeholder rows */}
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex w-[80%] pt-5 gap-5 items-center">

                {/* Small square placeholder (icon/avatar) */}
                <div className="size-[20px] rounded bg-[#313139]"></div>

                {/* Text placeholder container */}
                <div className="flex-1 flex-col">

                  {/* Top row: name + small right detail */}
                  <div className="flex w-full justify-between space-y-2">

                    {/* Name placeholder */}
                    <div className="h-[6px] bg-[#313139] rounded w-[70%]"></div>

                    {/* Small subtitle placeholder */}
                    <div className="h-[6px] bg-[#313139] rounded w-[20%]"></div>

                  </div>

                  {/* Bottom row: additional detail placeholders */}
                  <div className=" flex justify-between w-[70%]">
                    <div className="h-[6px] bg-[#313139] rounded w-2/4"></div>
                    <div className="h-[6px] bg-[#313139] rounded w-1/3"></div>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Bottom profile summary section */}
        <div className="flex items-center py-13 w-full justify-center">

          <div className="flex flex-col w-3/4 items-center ">

            {/* Profile avatar */}
            <div className="size-[42px] rounded-full bg-[url('/profile/1.png')] bg-center bg-cover"></div>

            {/* Row with name + small detail */}
            <div className="flex w-full py-3 justify-between gap-2">
              <div className="h-[8px] w-[60%] bg-zinc-700 rounded-full"></div>
              <div className="h-[8px] w-20 bg-zinc-700 rounded-full"></div>
            </div>

            {/* Bottom name placeholder */}
            <div className="h-[8px] w-[50%]  bg-zinc-700 rounded-full"></div>

          </div>

        </div>

      </div>

      {/* second */}
      {/* Main Card Container */}
      <div className="size-full bg-[#222228] rounded-2xl p-6 flex flex-col  lg:overflow-hidden relative">

        {/* Top Section (Header / Info Area) */}
        <div className="flex justify-between items-start w-full">

          <div className="space-y-2 w-full">

            {/* Row containing text skeleton + small avatar */}
            <div className="flex w-full gap-15 items-center">

              {/* Text Skeleton Container */}
              <div className="flex-1 flex-col ">

                {/* Top Row: Name + Small Detail */}
                <div className="flex w-full justify-between space-y-2">

                  {/* Name placeholder */}
                  <div className="h-[6px] bg-[#313139] rounded w-[70%]"></div>

                  {/* Subtitle placeholder */}
                  <div className="h-[6px] bg-[#313139] rounded w-[20%]"></div>

                </div>

                {/* Bottom Row: Additional details */}
                <div className=" flex justify-between w-[70%]">
                  <div className="h-[6px] bg-[#313139] rounded w-2/4"></div>
                  <div className="h-[6px] bg-[#313139] rounded w-1/3"></div>
                </div>

              </div>

              {/* Small Avatar Placeholder */}
              <div className="size-[20px] rounded bg-[#313139]"></div>

            </div>

          </div>

        </div>

        {/* Center Section (Circular Progress Area) */}
        <div className="flex-1 flex items-center justify-center relative">

          <svg
            className="size-[80%] rotate-90"
            viewBox="0 0 100 100"
          >

            {/* Gradient Definition for Progress Ring */}
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

            {/* Progress Ring (Animated via dash offset) */}
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

            {/* Inner Decorative Circle */}
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
      {/* Main Container Card */}
      <div className='relative h-[150%] flex flex-col p-7 items-center bg-[#222228] rounded-2xl'>

        {/* Bottom Gradient Overlay (creates fade effect at bottom) */}
        <div className="absolute bottom-0 left-0 w-full h-50 rounded-2xl bg-gradient-to-t from-[#222228] to-transparent pointer-events-none"></div>

        {/* Top Header Section */}
        <div className="flex justify-between items-start w-full">

          <div className="space-y-2 w-full">

            {/* Header Row: Text Skeleton + Small Avatar */}
            <div className="flex w-full gap-15 items-center">

              {/* Text Skeleton Container */}
              <div className="flex-1 flex-col ">

                {/* Top Row: Name + Small Detail */}
                <div className="flex w-full justify-between space-y-2">

                  {/* Name placeholder */}
                  <div className="h-[6px] bg-[#313139] rounded w-[70%]"></div>

                  {/* Subtitle placeholder */}
                  <div className="h-[6px] bg-[#313139] rounded w-[20%]"></div>

                </div>

                {/* Bottom Row: Additional Info */}
                <div className=" flex justify-between w-[70%]">
                  <div className="h-[6px] bg-[#313139] rounded w-2/4"></div>
                  <div className="h-[6px] bg-[#313139] rounded w-1/3"></div>
                </div>

              </div>

              {/* Small Avatar Placeholder */}
              <div className="size-[20px] rounded bg-[#313139]"></div>

            </div>

          </div>

        </div>

        {/* List Section (Profile Activity / Users List) */}
        <div className='flex w-full flex-col'>

          <div className="w-full pt-3">

            {/* Mapping Profile Images */}
            {profile.map((p, i) => (

              <div key={i} className="flex gap-5 items-center border-b-2 border-[#313139] py-2">

                {/* Profile Avatar */}
                <div
                  className="size-[42px] rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url('/profile/${p}')` }}
                ></div>

                {/* Profile Text Skeleton */}
                <div className="flex-1 flex-col ">

                  {/* Top Row: Name + Small Stat */}
                  <div className="flex w-full justify-start gap-3 space-y-2">

                    {/* Name placeholder */}
                    <div className="h-[6px] bg-[#313139] rounded w-[50%]"></div>

                    {/* Small detail placeholder */}
                    <div className="h-[6px] bg-[#313139] rounded w-[15%]"></div>

                  </div>

                  {/* Bottom Row: Additional Info */}
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
      {/* Main Card Container */}
      <div className="size-full bg-[#222228] rounded-2xl p-6 flex flex-col  lg:overflow-hidden relative">

        {/* ===================== */}
        {/* Header Section */}
        {/* ===================== */}
        <div className="flex justify-between items-start w-full border-b-2 pb-5 border-[#313139]">

          <div className="space-y-2 w-full">

            {/* Row containing text skeleton + small avatar */}
            <div className="flex w-full gap-15 items-center">

              {/* Text Skeleton Container */}
              <div className="flex-1 flex-col ">

                {/* Top Row: Name + Small Detail */}
                <div className="flex w-full justify-between space-y-2">

                  {/* Name placeholder */}
                  <div className="h-[6px] bg-[#313139] rounded w-[70%]"></div>

                  {/* Subtitle placeholder */}
                  <div className="h-[6px] bg-[#313139] rounded w-[20%]"></div>

                </div>

                {/* Bottom Row: Additional Info */}
                <div className=" flex justify-between w-[70%]">
                  <div className="h-[6px] bg-[#313139] rounded w-2/4"></div>
                  <div className="h-[6px] bg-[#313139] rounded w-1/3"></div>
                </div>

              </div>

              {/* Small Avatar Placeholder */}
              <div className="size-[20px] rounded bg-[#313139]"></div>

            </div>

          </div>

        </div>

        {/* ===================== */}
        {/* Chart Section (Bottom Area) */}
        {/* ===================== */}
        <div className="mt-10 flex justify-between items-end h-56 gap-3 px-2">

          {/* Mapping dynamic bar heights */}
          {barData.map((height, index) => (

            <div
              key={index}
              className="relative flex-1 bg-[#2d2d35] rounded-full overflow-hidden h-full group"
            >

              {/* Progress Fill (Animated Gradient Bar) */}
              <div
                className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-[#5d47f5] via-[#a855f7] to-[#f472b6] transition-all duration-700 ease-out"
                style={{ height: `${height}%` }}
              >

                {/* Subtle shine / highlight effect */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 blur-sm"></div>

              </div>

            </div>

          ))}

        </div>

      </div>
      {/* Five */}
      {/* Main Card Container */}
      <div className=' bg-[#222228] rounded-2xl h-[50%] lg:mt-27'></div>
    </div>
  )
}

export default HeroContainer