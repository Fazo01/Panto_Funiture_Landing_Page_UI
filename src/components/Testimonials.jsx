import React from 'react'
import { BangUpinBG,IbukSukijanBG,MpokInaBG,Fourstar } from '../assets'
import { TestimonialsContent } from '../constant'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <section className='bg-OrangeP'>
      
      <div className="w-3/4 m-auto">
        <div className="  ">
          <Slider {...settings}>
          {TestimonialsContent.map((data)=>(
            <div key={data.id} className='h-[476px]'>
              
              <div className="">
                <img src={data.Background} alt="" className='h-[476px] object-cover '/>
              </div>
              
              <div className="relative bottom-65 left-4">
                <img src={data.ContentBgImg} alt="" className='relative'/>
                <div className="absolute bottom-9 ml-[2px] pt-14 flex flex-col justify-center text-center items-center w-[334px] h-[239px]">
                  <img src={data.img} alt="" className='w-[50px] h-[50px] object-cover '/>
                  <h3 className='font-bold text-[18px] mt-3.5'>{data.name}</h3>
                  <h5 className='text-[12px] text-GrayP'>{data.full_name}</h5>
                  <p className='text-[14px] text-GrayP mt-4 w-[252px] h[51px] leading-4'>{data.content}</p>
                  <img src={data.star_img} alt="" className='w-[90px] h-[14px] mt-6' />
                </div>
              </div>
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
