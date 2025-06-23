import React from 'react'
import { Experience,IconNextLink } from '../assets'
const Experiences = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-evenly md:gap-60 xs:py-40 py-15 '>
      <div>
        <div className="ss:w-[495px] sm:h-[422px] h-[299px] relative right-13 bottom-13 bg-[#F7F7F7] rounded-[20px]">
          <div className="ss:w-[495px] sm:h-[301px] h-[199px] relative left-53 top-30 bg-[#F7F7F7] rounded-[20px]">
              <div className=''>
                <img src={Experience} alt="" className='ss:max-w-[629px]  shadow-xl/40 rounded-r-[20px] z-10 relative right-40 bottom-16'/>
              </div>
            </div>
        </div>
      </div>
      <div className='flex flex-col md:px-0 px-10 md:pb-0 pb-20 gap-5'>
        <h1 className='text-OrangeP text-[18px] tracking-widest font-semibold'>EXPERIENCE</h1>
        <h2 className='sm:text-[42px] text-[35px] font-bold'>We provide you the best experience</h2>
        <p className='opacity-80 text-[18px] text-GrayP max-w-[556px]' >You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
        <a href="" className='text-[14px] mt-5 text-OrangeP flex gap-[13px]'>More Info
          <img src={IconNextLink} alt="" />
        </a>
      </div>
    </div>
  )
}

export default Experiences
