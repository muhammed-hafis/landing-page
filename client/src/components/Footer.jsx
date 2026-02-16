import React from 'react'
import { FaTwitter, FaLinkedinIn, FaDiscord } from "react-icons/fa";
function Footer() {
  return (
      <footer className=" bg-transparent w-full pt-10">

          {/* Main Container */}
          <div className="mx-10 bg-[#18181C] px-5 lg:px-40 py-10">

              <div className="flex flex-row md:justify-between flex-wrap gap-20">

                  {/* LEFT SIDE */}
                  <div>
                      {/* Logo */}
                      <div className="mb-8">
                          <img src="/Vector.png" alt="" className='w-[56px]' />
                      </div>

                      <p className="text-[#9E9E9E] max-w-[300px] leading-relaxed text-[14px]">
                          A good design is not only aesthetically pleasing, but also functional.
                          It should be able to solve the problem
                      </p>
                  </div>


                  {/* RIGHT SIDE */}
                  <div className="grid grid-cols-3 gap-16">

                      {/* Column 1 */}
                      <div>
                          <h4 className="text-white font-semibold mb-8">Sections</h4>
                          <ul className="space-y-3 text-[14px] text-[#9E9E9E]">
                              <li>Home</li>
                              <li>Section One</li>
                              <li>Section Two</li>
                              <li>Section Tree</li>
                          </ul>
                      </div>

                      {/* Column 2 */}
                      <div className="pt-14">
                          <ul className="space-y-3 text-[14px] text-[#9E9E9E]">
                              <li>Home</li>
                              <li>Section One</li>
                              <li>Section Two</li>
                              <li>Section Tree</li>
                          </ul>
                      </div>

                      {/* Column 3 */}
                      <div className="pt-14">
                          <ul className="space-y-3 text-[14px] text-[#9E9E9E]">
                              <li>Home</li>
                              <li>Section One</li>
                              <li>Section Two</li>
                              <li>Section Tree</li>
                          </ul>
                      </div>

                  </div>

              </div>
          </div>


          {/* Bottom Row */}
          <div className="max-w-6xl mx-auto px-10 py-5 flex justify-between items-center">

              <p className="text-[#9E9E9E] text-sm">
                  All Rights Reserved Inkryy.com 2022
              </p>

              <div className="flex space-x-6">

                  <div className="size-10 bg-[#1f222d] rounded-2xl flex items-center justify-center 
                    text-white hover:bg-[#2a2e3c] transition cursor-pointer">
                      <FaTwitter size={20} />
                  </div>

                  <div className="size-10 bg-[#1f222d] rounded-2xl flex items-center justify-center 
                    text-white hover:bg-[#2a2e3c] transition cursor-pointer">
                      <FaLinkedinIn size={20} />
                  </div>

                  <div className="size-10 bg-[#1f222d] rounded-2xl flex items-center justify-center 
                    text-white hover:bg-[#2a2e3c] transition cursor-pointer">
                      <FaDiscord size={20} />
                  </div>

              </div>

          </div>


      </footer>
  )
}

export default Footer