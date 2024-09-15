import React from 'react';
import { person1, person2 } from '../../utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
 import 'swiper/swiper-bundle.css';

const testimonials = [
  {
    img: person1,
    text: 'Fantastic job! Your React.js and Tailwind CSS project delivers a sleek, responsive design with flawless database integration. Impressive work!',
    name: 'Flora',
  },
  {
    img: person2,
    text: 'Your e-commerce site deliveres a seamless user experience and flawless database integration. Remarkable work!',
    name: 'Muhammad Husain',
  },
  {
    img: person1,
    text: 'The result is a highly functional and user-friendly application. Excellent work!',
    name: 'Olivia',
  },
  {
    img: person2,
    text: 'Your API project demonstrates exceptional front-end development skills, with a clean, intuitive interface.Excellent work!',
    name: 'Zeeshan Mubarik',
  },
];

export default function Testimonial() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="py-[80px] lg:px-[80px] sm:px-[20px] px-[20px]">
        <h2 className="sm:text-[2.5rem] text-[2.2rem] text-black text-center pb-[60px] rounded-[20px] p-[40px]">
        What They  <span className="font-extrabold">Say</span>
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={60}
          className='md:p-[50px] py-[20px]'
          speed={1200}
          autoplay={{ delay: 3000 }}
          
          loop={true}
          breakpoints={{
            1280: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            450: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {testimonials.map(({ img, text, name, role }, index) => (
            <SwiperSlide
              key={index}
              className="w-[100%] h-[350px] shadow-custom rounded-[20px] p-[40px] text-center flex flex-col items-center gap-[15px]"
            >
              <img src={img} alt={`Testimonial from ${name}`} className="w-[100px] h-[100px] rounded-full" />
              <p>{text}</p>
              <h4 className="font-bold">{name}</h4>
               
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
