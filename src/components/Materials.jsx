import React from 'react'
import { IconNextLink } from '../assets'
import { Material_01,Material_02,Material_03 } from '../assets'
const Materials = () => {
  return (
    <div className='flex'>
      <div>
        <h1>Materials</h1>
        <h2>Very serious materials for making furniture</h2>
        <p>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
        <a href="" className='text-[14px] mt-5 text-OrangeP flex gap-[13px]'>More Info
          <img src={IconNextLink} alt="" />
        </a>
      </div>
      <div className="">
        <div className="flex">
          <div className="flex flex-col">
            <img src={Material_01} alt="" />
            <img src={Material_02} alt="" />
          </div>
          <img src={Material_03} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Materials
