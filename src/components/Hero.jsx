import React from 'react'
import { IconSearch } from '../assets'
const Hero = () => {
  return (
    <div className='w-full flex justify-center items-center text-center flex-col flex-1 bg-transparent absolute top-40' >
      <h1 className=' md:text-[80px] sm:text-[60px] text-[40px] font-bold text-[#ffffff]'>Make your interior more <br /> minimalistic & modern</h1>
      <p className='mt-5 text-[24px] text-[#ffffff] font-normal opacity-[80%]'>Turn your room with panto into a lot more minimalist <br /> and modern with ease and speed</p>
      
      <div className="mt-15 border-1 border-white p-2 pl-5 flex xs:w-85  h-14 bg-transparent  justify-between rounded-[42px]">
        <input type="text" className='text-[18px] text-[#ffffff] font-normal opacity-[80%] ' placeholder='Search furniture'/>
        <img src={IconSearch} alt="" className='bg-[#E58411] rounded-full cursor-pointer p-2.5'/>
      </div>
    </div>
  )
}

export default Hero
