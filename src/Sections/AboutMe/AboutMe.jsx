import React from 'react'
import { about } from '../../utils'

export default function AboutMe() {
  return (
    <div className='max-w-[1440px] mx-auto'>
        <div className='py-[80px] lg:px-[80px] sm:px-[20px] px-[20px]'>
           <div className="abouMe flex md:flex-row flex-col justify-between lg:items-start items-center gap-[40px]">
             <div className='md:w-[50%]'>
                <img src={about} alt="" />
             </div>
             <div className='md:w-[50%] flex flex-col gap-[20px]'>
             <h1 className="sm:text-[2.5rem] text-[2.2rem] text-left">
            About <span className="font-extrabold">Me</span>
          </h1> 
          <p className='md:text-[1.2rem] text-[1rem] text-zinc-500'>

 

          I’m a passionate and hardworking front-end developer with three years of experience, specializing in building responsive and creative websites using HTML, CSS, JavaScript, and React.js.  
          <br /> <br />
           I have hands-on experience with Bootstrap, Tailwind, and Redux Toolkit, and I excel at creating functional sites, including e-commerce platforms. Balancing coding with my studies was challenging, but I took it as a challange and kept going on a journey of becoming a web devloper.
           <br /> <br />
            I believe in deleviring high quality work and  take pride in putting my clients first, ensuring their satisfaction with every project. I am open to learning new technologies and improving my skills. Additionally, I write articles on Medium to inspire and support others in the web development community.
          </p>
             </div>
           </div>
        </div>
    </div>
  )
}
