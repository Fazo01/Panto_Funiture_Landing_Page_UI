import React from 'react'
import { IconNextLink } from '../assets'
const SellingProduct = () => {
  return (
    <section className='flex justify-center items-center flex-col'>
      <div>
        <h1>Best Selling Product</h1>
      </div>
      <div className="w-[348px] h-[57px] flex justify-center items-center ">
        <button>Chair</button>
        <button>Beds</button>
        <button>Sofa</button>
        <button>Lamp</button>
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
