import React from 'react';
import { project1, project2, project3, project4, project5, project6, readmore } from '../../utils';

export default function Projects() {
  return (
    <div className='bg-black mt-[80px]'>
      <div className='max-w-[1440px] mx-auto z-[1000]'>
        <div className='py-[80px] lg:px-[80px] sm:px-[20px] px-[50px]'>
          <div className="myProjects w-full">
            <h1 className="sm:text-[2.5rem] text-[2.2rem] text-white text-center pb-[60px]">
             Recent <span className="font-extrabold">Projects</span>
            </h1>

            <div className='project-cards flex flex-col gap-[120px] w-full'>
              <div className='projects-card flex md:flex-row flex-col justify-between gap-[120px] items-center'>
                <div className='md:w-[50%] w-[100%] md:order-none order-first'>
                  <div className="project-img">
                    <img src={project1} alt="" className='w-full h-full object-cover rounded-[20px]' />
                  </div>
                </div>

                <div className="project-content flex flex-col gap-[10px] md:w-[50%] w-[100%]">
                  <h1 className='font-extrabold text-white lg:text-[3rem] sm:text-[2.5rem] text-[2rem]'>01</h1>
                  <h2 className='font-bold text-white lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>Cafe E-commerce Website</h2>
                  <p className='text-zinc-500 text-[1.1rem]'>E-commerce site containing Profile Page, Cart Page, and Blogs Page. Dynamic website with responsive design. Created using React JS, Tailwind CSS, and Supabase.</p>
                  <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                </div>
              </div>

              <div className='projects-card flex md:flex-row flex-col justify-between gap-[120px] items-center'>
                <div className='md:w-[50%] w-[100%] md:order-last order-first'>
                  <div className="project-img">
                    <img src={project2} alt="" className='w-full h-full object-cover rounded-[20px]' />
                  </div>
                </div>

                <div className='md:w-[50%] w-[100%]'>
                  <div className="project-content flex flex-col gap-[10px]">
                    <h1 className='font-extrabold text-white lg:text-[3rem] sm:text-[2.5rem] text-[2rem]'>02</h1>
                    <h2 className='font-bold text-white lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>FlickFlix Movie Website</h2>
                    <p className='text-zinc-500 text-[1.1rem]'>Movie website containing different categories of movies with search functionality. Created using JS, Movie API, and Postman.</p>
                    <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                  </div>
                </div>
              </div>

              <div className='projects-card flex md:flex-row flex-col justify-between gap-[120px] items-center'>
                <div className='md:w-[50%] w-[100%] md:order-none order-first'>
                  <div className="project-img">
                    <img src={project3} alt="" className='w-full h-full object-cover rounded-[20px]' />
                  </div>
                </div>

                <div className="project-content flex flex-col gap-[10px] md:w-[50%] w-[100%]">
                  <h1 className='font-extrabold text-white lg:text-[3rem] sm:text-[2.5rem] text-[2rem]'>03</h1>
                  <h2 className='font-bold text-white lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>PayPal Business Website</h2>
                  <p className='text-zinc-500 text-[1.1rem]'>Business website consisting of 24 pages. Dynamic website with responsive design. Created using HTML, CSS, and JS.</p>
                  <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                </div>
              </div>

              <div className='projects-card flex md:flex-row flex-col justify-between gap-[120px] items-center'>
                <div className='md:w-[50%] w-[100%] md:order-last order-first'>
                  <div className="project-img">
                    <img src={project4} alt="" className='w-full h-full object-cover rounded-[20px]' />
                  </div>
                </div>

                <div className='md:w-[50%] w-[100%]'>
                  <div className="project-content flex flex-col gap-[10px]">
                    <h1 className='font-extrabold text-white lg:text-[3rem] sm:text-[2.5rem] text-[2rem]'>04</h1>
                    <h2 className='font-bold text-white lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>Forkify</h2>
                    <p className='text-zinc-500 text-[1.1rem]'>Pizza Oder Menue website created by using Api. Here you can oder it , add it to your favourite list and much more. Created using JS, Food API, and Postman.</p>
                    <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                  </div>
                </div>
              </div>

              <div className='projects-card flex md:flex-row flex-col justify-between gap-[120px] items-center'>
                <div className='md:w-[50%] w-[100%] md:order-none order-first'>
                  <div className="project-img">
                    <img src={project5} alt="" className='w-full h-full object-cover rounded-[20px]' />
                  </div>
                </div>

                <div className="project-content flex flex-col gap-[10px] md:w-[50%] w-[100%]">
                  <h1 className='font-extrabold text-white lg:text-[3rem] sm:text-[2.5rem] text-[2rem]'>05</h1>
                  <h2 className='font-bold text-white lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>Blogging site</h2>
                  <p className='text-zinc-500 text-[1.1rem]'>Blogging website where you can write , post and can see others blogs too. Dynamic website with responsive design. Created using React Js, Tailwind Css, and Reac hook forms.</p>
                  <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                </div>
              </div>


              <div className='projects-card flex md:flex-row flex-col justify-between gap-[120px] items-center'>
                <div className='md:w-[50%] w-[100%] md:order-last order-first'>
                  <div className="project-img">
                    <img src={project6} alt="" className='w-full h-full object-cover rounded-[20px]' />
                  </div>
                </div>

                <div className='md:w-[50%] w-[100%]'>
                  <div className="project-content flex flex-col gap-[10px]">
                    <h1 className='font-extrabold text-white lg:text-[3rem] sm:text-[2.5rem] text-[2rem]'>06</h1>
                    <h2 className='font-bold text-white lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>Wild Oasis</h2>
                    <p className='text-zinc-500 text-[1.1rem]'>Booking website containg dashboard , cabins , bookings and authentication page . Dynamic Website created by using React JS, Tailwind, and Supabase.</p>
                    <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
