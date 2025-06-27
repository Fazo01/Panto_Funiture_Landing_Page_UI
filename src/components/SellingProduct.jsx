import React from 'react'
import { IconNextLink } from '../assets'
const SellingProduct = () => {
  return (
    <section className='flex justify-center items-center flex-col'>
      <div>
        <h1 className='font-bold text-GrayP text-[42px]'>Best Selling Product</h1>
      </div>
      <div className=" px-2  py-1 sm:max-w-[348px] xs:h-[57px] h-auto flex justify-between flex-wrap  items-center gap-2 sm:gap-0 bg-GrayLight xs:rounded-[44px] rounded-[34px] font-medium text-GrayP text-[18px] opacity-80 ">
        <button className='xs:w-[84px] max-w-[74px] h-[45px] px-4 rounded-[32px] bg-[#FFFFFF]'>Chair</button>
        <button className='xs:w-[84px] max-w-[74px] h-[45px] px-4 hover:rounded-[32px] hover:bg-[#FFFFFF]'>Beds</button>
        <button className='xs:w-[84px] max-w-[74px] h-[45px] px-4 hover:rounded-[32px] hover:bg-[#FFFFFF]'>Sofa</button>
        <button className='xs:w-[84px] max-w-[74px] h-[45px] px-4 hover:rounded-[32px] hover:bg-[#FFFFFF]'>Lamp</button>
      </div>
      <div className="">

      </div>
      <div className="">
        <a href="" className='text-[14px] mt-7 text-OrangeP flex gap-[13px]'>More Info
                  <img src={IconNextLink} alt="" />
                </a>
      </div>
    </section>
  )
}

export default SellingProduct
