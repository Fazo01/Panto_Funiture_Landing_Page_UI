import React from 'react'
import { whyChooseUs } from '../constant'

import { IconNextLink } from '../assets'
const WhyChooseUs = () => {
  return (
    <div className='flex ss:flex-row flex-col  py-20  '>
      <h1 className='font-roboto sm:ml-0 ml-5 text-[42px] max-w-[272px]  font-bold '>Why <br /> Choosing Us</h1>
      <div className="sm:ml-15 ml-5 flex sm:flex-row flex-col  gap-4 ">
        {whyChooseUs.map((choseUs)=>(
          <div key={choseUs.id}>
            <h4 className='text-2xl font-bold'>
              {choseUs.title}
            </h4>
            <p className='text-[16px] opacity-80 max-w-[284px]'>
              {choseUs.content}
            </p>
            <a href="" className='text-[14px] mt-5 text-OrangeP flex gap-[13px]'>
              {choseUs.button}
              <img src={IconNextLink} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
