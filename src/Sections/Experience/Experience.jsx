import React from 'react'
import { FaCode, FaGraduationCap, FaMedium } from 'react-icons/fa6'

export default function Experience() {

  const experiences = [
    {
      icon: <FaGraduationCap />,
      title: 'Internship at Smash Code',
      date: 'July 2024 - Aug 2024',
      description: 'I learned Web development from Smash code, where I did Internship for a month. Working and learning from senior developers was a great opportunity for me to improve my coding skills.'
    },
    {
      icon: <FaMedium />,
      title: 'Writer on Medium',
      date: 'August 2022 - Present',
      description: `Writing is my passion. I share my knowledge about web development and programming languages. Check my recent blogs below:`
    },
    {
      icon: <FaCode />,
      title: '3 Years in Front-end Development',
      date: 'July 2021 - Present',
      description: 'I’m a passionate front-end developer with three years of experience, skilled in building responsive websites using HTML, CSS, JavaScript, and React.js, always prioritizing client satisfaction.'
    }
  ];

  return (
    <div className='bg-black mt-[80px]'>
      <div className='max-w-[1440px] mx-auto'>
        <div className='py-[80px] lg:px-[80px] sm:px-[20px] px-[20px]'>
          <div className="myExperience">
            <h2 className="sm:text-[2.5rem] text-[2.2rem] text-white text-center pb-[60px]">
              My <span className="font-extrabold">Experience</span>
            </h2>
            <div className='flex xl:flex-row flex-col gap-[50px]'>
              {experiences.map((experience, index) => (
                <div key={index} className='xl:w-[550px] xl:h-[320px] w-[100%] h-[100%] py-[30px] px-[24px] border-zinc-500 border-[2px] flex flex-col gap-[15px] rounded-[8px] hover:bg-zinc-800 hover:border-zinc-800 cursor-default transition-colors ease-in-out'>
                  <div className='flex xl:flex-col sm:flex-row flex-col justify-between sm:items-start gap-[10px] '>
                    <div className='flex items-center gap-[20px]'>
                      <span className='text-white text-[2.5rem]'>{experience.icon}</span>
                      <span className='text-white text-[1.4rem] md:!text-[1.3rem] font-bold'>{experience.title}</span>
                    </div>
                    <div>
                      <p className='text-zinc-300 md:text-[16px] text-[14px]'>{experience.date}</p>
                    </div>
                  </div>
                  <div>
                    <p className='text-zinc-300 md:text-[16px] text-[14px]'>{experience.description}</p>
                    {experience.title === 'Writer on Medium' && (
                      <a href="https://medium.com/@rukshandanadir/things-i-wish-i-knew-when-i-started-coding-54f8b042aa23" className='underline text-zinc-200 font-bold'>Check my recent blogs here</a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
