import React from 'react'
import { BangUpinBG,IbukSukijanBG,MpokInaBG,Fourstar } from '../assets'
import { TestimonialsContent } from '../constant'
const Testimonials = () => {
  return (
    <section>
      <div className=" m-auto">
        <div className="flex flex-row justify-between gap-1 ">
          {TestimonialsContent.map((data)=>(
            <div key={data.id}>
              
              <div className="">
                <img src={data.Background} alt="" className='  h-auto object-cover '/>
              </div>
              <div className="w-[334px] h-[239px] bg-gray-400 rounded-[10px] ">
                <img src={data.img} alt="" />
                <h3>{data.name}</h3>
                <h5>{data.full_name}</h5>
                <p>{data.content}</p>
                <img src={data.star_img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
