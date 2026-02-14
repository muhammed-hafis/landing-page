import React from 'react'

function HeroContainer() {
  return (
      <div className='absolute p-10 top-140 bg-[#131415] w-[60%] h-[550px] rounded-4xl h-1/2
      grid grid-cols-3 grid-rows-2 gap-10'>
      <div className='row-span-2 bg-[#222228] rounded-2xl'>a</div>
      <div className=' bg-[#222228] rounded-2xl'>b</div>
      <div className=' bg-[#222228] rounded-2xl'>c</div>
      <div className=' bg-[#222228] rounded-2xl'>d</div>
      <div className=' bg-[#222228] rounded-2xl'>e</div>
      </div>
  )
}

export default HeroContainer