import React from 'react'
import { project1, project2, project3, project4, project5, project6, readmore } from '../../utils'

export default function AllProjects() {
  return (
    <div className='max-w-[1440px] mx-auto z-[1000] '>
        <div className="py-[80px] lg:px-[80px] sm:px-[20px] px-[20px]">
            <div className="allprojects">
            <h1 className="sm:text-[2.5rem] text-[2.2rem] text-black text-center pb-[60px]">
             All <span className="font-extrabold">Projects</span>
            </h1>
                <div className="allprojects-cards grid sm:grid-cols-2 gap-[40px]">
                    <div className="allprojects-card bg-[black]  md:px-[40px] px-[30px] md:pb-[100px] pb-[80px] pt-[40px]  rounded-[20px] text-white flex flex-col gap-[60px] items-center transform transition-transform duration-300 hover:scale-105 shadow-3d  hover:shadow-2xl ">
                        <div className="content-cont flex flex-col gap-[10px]">

                         <h3 className='font-bold text-[1.4rem] uppercase'>Cafe E-commerce Website</h3>
                         <p className='font-semibold text-zinc-300 text-[1.1rem]'>E-commerce site containing Profile Page, Cart Page, and Blogs Page. Dynamic website with responsive design. Created using React JS, Tailwind CSS, and Supabase.</p>
 
                         </div>
                         <div className="img-cont">
                            <img src={project1} alt="" className='w-full rounded-md '/>
                         </div> 

                         <div>
                            <button className='flex items-center gap-[10px] bg-zinc-800 py-[10px] px-[20px] rounded-[10px] hover:bg-zinc-900'>
                            <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                             <span>View more</span>
                            </button>
                         </div>

                    </div>
                    





                    <div className="allprojects-card bg-[black]  md:px-[40px] px-[30px] md:pb-[100px] pb-[80px] pt-[40px]  rounded-[20px] text-white flex flex-col gap-[60px] items-center transform transition-transform duration-300 hover:scale-105 shadow-3d  hover:shadow-2xl ">
                        <div className="content-cont flex flex-col gap-[10px]">

                         <h3 className='font-bold text-[1.4rem] uppercase'>FlickFlix Movie Website</h3>
                         <p className='font-semibold text-zinc-300 text-[1.1rem]'>Movie website containing different categories of movies with search functionality. Created using JS, Movie API, and Postman.</p>
 
                         </div>
                         <div className="img-cont">
                            <img src={project2} alt="" className='w-full rounded-md '/>
                         </div> 

                         <div>
                            <button className='flex items-center gap-[10px] bg-zinc-800 py-[10px] px-[20px] rounded-[10px] hover:bg-zinc-900'>
                            <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                             <span>View more</span>
                            </button>
                         </div>

                    </div>










                    <div className="allprojects-card bg-[black]  md:px-[40px] px-[30px] md:pb-[100px] pb-[80px] pt-[40px]  rounded-[20px] text-white flex flex-col gap-[60px] items-center transform transition-transform duration-300 hover:scale-105 shadow-3d  hover:shadow-2xl ">
                        <div className="content-cont flex flex-col gap-[10px]">

                         <h3 className='font-bold text-[1.4rem] uppercase'>PayPal Business Website</h3>
                         <p className='font-semibold text-zinc-300 text-[1.1rem]'>Business website consisting of 24 pages. Dynamic website with responsive design. Created using HTML, CSS, and JS.</p>
 
                         </div>
                         <div className="img-cont">
                            <img src={project3} alt="" className='w-full rounded-md '/>
                         </div> 

                         <div>
                            <button className='flex items-center gap-[10px] bg-zinc-800 py-[10px] px-[20px] rounded-[10px] hover:bg-zinc-900'>
                            <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                             <span>View more</span>
                            </button>
                         </div>

                    </div>








                    <div className="allprojects-card bg-[black]  md:px-[40px] px-[30px] md:pb-[100px] pb-[80px] pt-[40px]  rounded-[20px] text-white flex flex-col gap-[60px] items-center transform transition-transform duration-300 hover:scale-105 shadow-3d  hover:shadow-2xl ">
                        <div className="content-cont flex flex-col gap-[10px]">

                         <h3 className='font-bold text-[1.4rem] uppercase'>Forkify</h3>
                         <p className='font-semibold text-zinc-300 text-[1.1rem]'>Pizza Oder Menue website created by using Api. Here you can oder it , add it to your favourite list and much more. Created using JS, Food API, and Postman.</p>
 
                         </div>
                         <div className="img-cont">
                            <img src={project4} alt="" className='w-full rounded-md '/>
                         </div> 

                         <div>
                            <button className='flex items-center gap-[10px] bg-zinc-800 py-[10px] px-[20px] rounded-[10px] hover:bg-zinc-900'>
                            <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                             <span>View more</span>
                            </button>
                         </div>

                    </div>




                    <div className="allprojects-card bg-[black]  md:px-[40px] px-[30px] md:pb-[100px] pb-[80px] pt-[40px]  rounded-[20px] text-white flex flex-col gap-[60px] items-center transform transition-transform duration-300 hover:scale-105 shadow-3d  hover:shadow-2xl ">
                        <div className="content-cont flex flex-col gap-[10px]">

                         <h3 className='font-bold text-[1.4rem] uppercase'>Blogging site</h3>
                         <p className='font-semibold text-zinc-300 text-[1.1rem]'>Blogging website where you can write , post and can see others blogs too. Dynamic website with responsive design. Created using React Js, Tailwind Css, and Reac hook forms.</p>
 
                         </div>
                         <div className="img-cont">
                            <img src={project5} alt="" className='w-full rounded-md '/>
                         </div> 

                         <div>
                            <button className='flex items-center gap-[10px] bg-zinc-800 py-[10px] px-[20px] rounded-[10px] hover:bg-zinc-900'>
                            <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                             <span>View more</span>
                            </button>
                         </div>

                    </div>





                    <div className="allprojects-card bg-[black]  md:px-[40px] px-[30px] md:pb-[100px] pb-[80px] pt-[40px]  rounded-[20px] text-white flex flex-col gap-[60px] items-center transform transition-transform duration-300 hover:scale-105 shadow-3d  hover:shadow-2xl ">
                        <div className="content-cont flex flex-col gap-[10px]">

                         <h3 className='font-bold text-[1.4rem] uppercase'>Wild Oasis</h3>
                         <p className='font-semibold text-zinc-300 text-[1.1rem]'>Booking website containg dashboard , cabins , bookings and authentication page . Dynamic Website created by using React JS, Tailwind, and Supabase.</p>
 
                         </div>
                         <div className="img-cont">
                            <img src={project6} alt="" className='w-full rounded-md '/>
                         </div> 

                         <div>
                            <button className='flex items-center gap-[10px] bg-zinc-800 py-[10px] px-[20px] rounded-[10px] hover:bg-zinc-900'>
                            <img src={readmore} alt="" className='w-[20px] h-[20px]' />
                             <span>View more</span>
                            </button>
                         </div>

                    </div>




                </div>
            </div>
        </div>
    </div>
  )
}
