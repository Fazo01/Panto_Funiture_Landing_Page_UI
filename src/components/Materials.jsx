import React from 'react'
import { IconNextLink } from '../assets'
import { Material_01,Material_02,Material_03 } from '../assets'
const Materials = () => {
  return (
    <section className='flex md:flex-row flex-col gap-10 '>
      <div className='md:w-1/2 mt-29'>
        <h1 className='text-[18px] text-OrangeP pb-5'>Materials</h1>
        <h2 className='xs:text-[42px] text-[35px] font-bold leading-12'>Very serious <br /> materials for making <br /> furniture</h2>
        <p className='text-GrayP text-[18px] opacity-80 max-w-[556px] mt-5 pr-10'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
        <a href="" className='text-[14px] mt-7 text-OrangeP flex gap-[13px]'>More Info
          <img src={IconNextLink} alt="" />
        </a>
      </div>
      <div className="flex gap-6 ss:flex-row flex-col md:w-1/2 pb-9">
        <div className="flex ss:flex-col xs:flex-row flex-col xs:gap-10 gap-15 xs:pb-9 pb-0">
          <img src={Material_01} alt="" className='shadow-xl/30 object-cover rounded-[20px] h-[229px] xs:w-full w-[95%]' />
          <img src={Material_02} alt="" className='shadow-xl/30 object-cover rounded-[20px] h-[317px] xs:w-full w-[95%]' />
        </div>
        <div className="ss:mt-35 mt-10" >

          <img src={Material_03} alt="" className='shadow-xl/30 object-cover rounded-l-[20px] h-full w-full ss:max-h-[445px] max-h-[350px]' />
        </div>
      </div>
    </section>
  )
}

export default Materials
