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
    <section className="bg-amber-500 py-12">
      <div className="flex justify-center items-center flex-col mb-15 text-center">
        <h1 className='text-OrangeP text-[18px]'>Testimonials</h1>
        <h2 className='sm:text-[42px] text-[32px]  font-bold'>Our Client Reviews</h2>
      </div>
      <div className="w-3/4 mx-auto">
        <Slider {...settings}>
          {TestimonialsContent.map((data) => (
            <div key={data.id} className="relative h-auto">
              <img
                src={data.Background}
                alt=""
                className=" w-[370px] object-cover rounded-[10px]"
              />
              <div className="absolute bottom-4 left-4">
                <img src={data.ContentBgImg} alt="" />
                <div className="absolute bottom-9 ml-[2px] pt-14 flex flex-col justify-center text-center items-center w-[334px] h-[239px]">
                  <img
                    src={data.img}
                    alt=""
                    className="w-[50px] h-[50px] object-cover rounded-full"
                  />
                  <h3 className="font-bold text-[18px] mt-3.5">{data.name}</h3>
                  <h5 className="text-[12px] text-GrayP">{data.full_name}</h5>
                  <p className="text-[14px] text-GrayP mt-4 w-[252px] h-[51px] leading-4">
                    {data.content}
                  </p>
                  <img
                    src={data.star_img}
                    alt=""
                    className="w-[90px] h-[14px] mt-6"
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
