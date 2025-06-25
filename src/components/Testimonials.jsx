import React from 'react';
import { BangUpinBG, IbukSukijanBG, MpokInaBG, Fourstar } from '../assets';
import { TestimonialsContent } from '../constant';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, // ✅ FIXED: added missing comma
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className=" py-12">
      <div className="flex justify-center items-center flex-col mb-15 text-center">
        <h1 className='text-OrangeP text-[18px]'>Testimonials</h1>
        <h2 className='sm:text-[42px] text-[32px]  font-bold'>Our Client Reviews</h2>
      </div>
      <div className="w-3/4 mx-auto">
        <Slider {...settings}>
          {TestimonialsContent.map((data) => (
            <div key={data.id} className="relative w-[370px]">
              
              <img
                src={data.Background}
                alt=""
                className="w-full object-cover rounded-[10px]"
              />
              <div className="absolute bottom-4 inset-x-0 px-2">
                <img src={data.ContentBgImg} alt="" className="w-full object-cover rounded-[10px]" />
                
<div
  className="
    absolute bottom-[1vw] left-0 right-0 
    px-[2vw] 
    pt-[4vw] xs:pt-[3.5vw] ss:pt-[3vw] sm:pt-[2.5vw] md:pt-[2vw] 
    flex flex-col justify-center text-center items-center 
    w-full max-w-[340px] mx-auto ss:mb-5 xs:mb-1 mb-4
  "
>
  <img
    src={data.img}
    alt=""
    className="
      w-[7vw] h-[7vw] 
      xs:w-[6vw] xs:h-[6vw] 
      ss:w-[5vw] ss:h-[5vw] 
      sm:w-[4.5vw] sm:h-[4.5vw] 
      md:w-[4vw] md:h-[4vw] 
      lg:w-[3.5vw] lg:h-[3.5vw] 
      xl:w-[3vw] xl:h-[3vw] 
      object-cover rounded-full
    "
  />
  <h3
    className="
      font-bold 
      text-[8px] xs:text-[1.2vw] ss:text-[1.1vw] sm:text-[1vw] md:text-[10px] 
      mt-[1.5vw] sm:mt-[1.2vw] md:mt-[1vw]
    "
  >
    {data.name}
  </h3>
  <h5
    className="
      text-GrayP 
      text-[7px] xs:text-[1.1vw] ss:text-[1vw] sm:text-[0.9vw] md:text-[9px]
    "
  >
    {data.full_name}
  </h5>
  <p
    className="
      text-GrayP 
      text-[7px] xs:text-[1.1vw] ss:text-[1vw] sm:text-[0.9vw] md:text-[9px] 
      mt-[1vw] sm:mt-[0.8vw] md:mt-[0.5vw] 
      leading-[1.2] 
      w-full max-w-[250px]
    "
  >
    {data.content}
  </p>
  <img
    src={data.star_img}
    alt=""
    className="
      w-[20vw] h-[3vw] 
      xs:w-[18vw] xs:h-[2.8vw] 
      ss:w-[16vw] ss:h-[2.6vw] 
      sm:w-[14vw] sm:h-[2.5vw] 
      md:w-[12vw] md:h-[2.2vw] 
      mt-[2vw] sm:mt-[1.5vw] md:mt-[1vw]
    "
  />
</div>

              </div>
            </div>

          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
