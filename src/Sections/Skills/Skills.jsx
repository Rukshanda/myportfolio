import React from 'react';
import { FaCss3Alt, FaGitAlt, FaGithubAlt, FaHtml5, FaJs, FaReact } from 'react-icons/fa6';
 import { SiRedux, SiStyledcomponents, SiTailwindcss  } from 'react-icons/si';
 import { Marquee } from '@devnomic/marquee';
import "@devnomic/marquee/dist/index.css";  

export default function Skills() {
  // Split the skills into two arrays
  const skillsIcons1 = [
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaHtml5 />, name: 'HTML' },
    { icon: <FaCss3Alt />, name: 'CSS' },
    { icon: <FaReact />, name: 'React' }
  ];

  const skillsIcons2 = [
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <SiTailwindcss />, name: 'Tailwind' },
    { icon: <SiRedux />, name: 'Redux Toolkit' },
    { icon: <SiStyledcomponents />, name: 'Styled Components' }
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="py-[80px] lg:px-[80px] px-[40px]">
        <div className="myskills px-[20px]">
          <h1 className="sm:text-[2.5rem] text-[2.2rem] text-center pb-[60px]">
            My <span className="font-extrabold">Skills</span>
          </h1>
        
          {/* First Marquee */}
          <div className='py-[10px]'>
          <Marquee fade={true} pauseOnHover={true}  className="gap-[3rem] [--duration:15s]" innerClassName="gap-[3rem] [--gap:3rem]">
               {skillsIcons1.map((skill, index) => (
                <div key={index} className="flex flex-row md:w-[300px] md:h-[100px] w-[250px] h-[80px] items-center rounded-[8px] md:gap-[34px] gap-[25px] text-[1.2rem] p-[24px] border-[2px] border-black hover:bg-black hover:text-white transition-colors duration-400 ease-in-out cursor-pointer">
                  <span className="md:text-[4rem] text-[3.5rem]">{skill.icon}</span>
                  <span className='font-bold text-center md:text-[1.2rem] text-[1.1rem]'>{skill.name}</span>
                </div>
              ))}
           </Marquee>
          </div>
        
          
          <div className='py-[10px]'>
    <Marquee fade={true} pauseOnHover={true} reverse={true}
          className="gap-[3rem] [--duration:15s]" innerClassName="gap-[3rem] [--gap:3rem]">
          
               {skillsIcons2.map((skill, index) => (
                   <div key={index} className="flex flex-row md:w-[300px] md:h-[100px] w-[250px] h-[80px] items-center rounded-[8px] md:gap-[34px] gap-[25px] text-[1.2rem] p-[24px] border-[2px] border-black hover:bg-black hover:text-white transition-colors duration-400 ease-in-out cursor-pointer">
                   <span className="md:text-[4rem] text-[3.5rem]">{skill.icon}</span>
                   <span className='font-bold text-center md:text-[1.2rem] text-[1.1rem]'>{skill.name}</span>
                 </div>
              ))}
           </Marquee>
          </div>
        
        </div>
      </div>
    </div>
  );
}
