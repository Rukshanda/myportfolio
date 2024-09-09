import React from 'react';
import { FaCss3Alt, FaGitAlt, FaGithubAlt, FaHtml5, FaJs, FaReact } from 'react-icons/fa6';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiRedux, SiStyledcomponents, SiTailwindcss  } from 'react-icons/si';
 
import { Autoplay, Navigation , EffectCoverflow } from 'swiper/modules';
import { SwiperSlide , Swiper} from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Skills() {
  const skillsIcons = [
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiRedux />, name: 'Redux Toolkit' },
    { icon: <SiStyledcomponents />, name: 'Styled Components' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="py-[80px] lg:px-[80px] px-[40px]">
        <div className="myskills px-[20px]">
          <h1 className="sm:text-[2.5rem] text-[2.2rem] text-center pb-[60px]">
            My <span className="font-extrabold">Skills</span>
          </h1>
          <Swiper
                modules={[Navigation , Autoplay ]}
                spaceBetween={60}
             
                speed={1200}
                autoplay={{
                  delay: 500,  
                 }}
                loop={true}
                breakpoints={{
                    1280: {
                    slidesPerView: 5,
                  },   1024: {
                    slidesPerView: 4,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  450: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
        >
                  <div className="swiper-slide grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[50px] mt-[20px]">

                
           
              {skillsIcons.map((skill, index) => (
                <SwiperSlide key={index} className="flex flex-col w-[200px] h-[200px] items-center rounded-[8px] gap-[34px] text-[1.2rem] p-[24px] border-[2px] border-black hover:bg-black hover:text-white transition-colors duration-400 ease-in-out cursor-pointer">
                  <span className="text-[4rem]">{skill.icon}</span>
                  <span className='font-bold  text-center'>{skill.name}</span>
                </SwiperSlide>
              ))}
            
            </div>
           </Swiper>
        </div>
      </div>
    </div>
  );
}
