import React from 'react'
import { IconNextLink } from '../assets'
import { SellingProducts } from '../constant'
const SellingProduct = () => {
  return (
    <section className='flex justify-center items-center flex-col bg-[#F7F7F7] sm:px-18 px-6 py-12'>
      <div className='pb-6'>
        <h1 className='font-bold text-GrayP text-[42px]'>Best Selling Product</h1>
      </div>
      <div className=" px-2  py-1 sm:max-w-[348px] xs:h-[57px] h-auto flex justify-between flex-wrap  items-center gap-2 sm:gap-0 bg-GrayLight xs:rounded-[44px] rounded-[34px] font-medium text-GrayP text-[18px] opacity-80 ">
        <button className='xs:w-[84px] max-w-[74px] h-[45px] px-4 rounded-[32px] bg-[#FFFFFF]'>Chair</button>
        <button className='xs:w-[84px] max-w-[74px] h-[45px] px-4 hover:rounded-[32px] hover:bg-[#FFFFFF]'>Beds</button>
        <button className='xs:w-[84px] max-w-[74px] h-[45px] px-4 hover:rounded-[32px] hover:bg-[#FFFFFF]'>Sofa</button>
        <button className='xs:w-[84px] max-w-[74px] h-[45px] px-4 hover:rounded-[32px] hover:bg-[#FFFFFF]'>Lamp</button>
      </div>
      <div className="flex gap-[42px] justify-center md:flex-nowrap flex-wrap max-w-[1198.35px] h-auto pt-6 pb-4 ">
        {SellingProducts.map((data)=>(
          <div key={data.id} className="flex flex-col justify-center max-w-[268.09px] h-[492px] ">
            <div className="">
              <img src={data.ProductImg} alt="" />
            </div>
            <div className="bg-white rounded-b-[20px] px-4 pt-4">
                <div className="">
              <p className='text-[#8D8D8D] text-[16.76px]'>{data.chair}</p>
              <h4 className='text-[#0D1B39] font-bold text-[21.33px]'>{data.ProductName}</h4>
              <img src={data._5star} alt="" />
            </div>
            <div className="flex justify-between py-6 items-center">
              <p className='font-bold text-[21.33px] text-[#0D1B39]'><span className=' font-bold text-[15.23px] text-[#0D1B39]'> {data.DollarSign}</span>{data.price}</p>
              <img src={data.Icon} alt="" />
            </div>
            </div>
            
          </div>
        ))}
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
