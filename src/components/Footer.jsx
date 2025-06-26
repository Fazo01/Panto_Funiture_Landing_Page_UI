import React from 'react'
import { FooterLinks ,FollowUs} from '../constant'
import { Logo } from '../assets'
const Footer = () => {
  return (
    <section>
      <div className="w-full flex justify-between py-20">
        <div className="max-w-[293px] h-[146px] flex flex-col gap-[29px]">
          <img src={Logo} alt="" className='w-[78px] h-[35px] object-contain' />
          <p className='sm:text-[15px] text-[12px] text-GrayP opacity-80'>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
        </div>
        <div className="flex flex-row md:mt-0  justify-between gap-30">
          {FooterLinks.map((data)=>(
            <div key={data.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className='font-medium text-[15px] leading-[27px] text-OrangeP mb-4'>{data.title}</h4>
              <ul>
                {data.Links.map((Link,index)=>(
                  <li key={Link.name} className={`text-GrayP opacity-80 font-normal text-[15px] leading-[24px] cursor-pointer ${index !== data.Links.length - 1 ? "mb-4" : "mb-0"}`}>
                    {Link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-row ">
          {FollowUs.map((data)=>(
            <div key={data.title} className={`flex flex-col min-w-[150px]`}>
              <h4 className='font-medium text-[15px] leading-[27px] text-OrangeP mb-4'>{data.title}</h4>
              <ul className='w-[133px] '>
                {data.Links.map((Link,index)=>(
                  <li key={Link.name} className={`flex text-GrayP opacity-80 font-normal text-[15px] leading-[24px] cursor-pointer ${index !== data.Links.length - 1 ? "mb-4" : "mb-0"}`}>
                    <img src={Link.icons} alt="" className='object-contain w-[20px] h-[20px] mr-2 mt-1'/>
                    {Link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        
      </div>
    </section>
  )
}

export default Footer