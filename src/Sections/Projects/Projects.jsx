import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';  
import 'react-lazy-load-image-component/src/effects/blur.css';   
import { project1, project2, project3, readmore } from '../../utils';

// Simple loading spinner component
const Spinner = () => (
  <div className="flex justify-center items-center">
    <div className="w-10 h-10 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
  </div>
);

export default function Projects() {
  return (
    <div className='bg-black mt-[80px]'>
      <div className='max-w-[1440px] mx-auto z-[1000]'>
        <div className='py-[80px] lg:px-[80px] sm:px-[20px] px-[30px]'>
          <div className="myProjects w-full">
            <h2 className="sm:text-[2.5rem] text-[2.2rem] text-white text-center pb-[60px]">
              Recent <span className="font-extrabold">Projects</span>
            </h2>

            <div className='project-cards flex flex-col gap-[120px] w-full'>
              {/* Project 1 */}
              <div className='projects-card flex md:flex-row flex-col justify-between gap-[120px] items-center'>
                <div className='md:w-[50%] w-[100%] md:order-none order-first'>
                  <div className="project-img">
                    <ImageWithLoader src={project1} alt="Project Image" />
                  </div>
                </div>

                <div className="project-content flex flex-col gap-[10px] md:w-[50%] w-[100%]">
                  <h2 className='font-extrabold text-white lg:text-[3rem] sm:text-[2.5rem] text-[2rem]'>01</h2>
                  <h3 className='font-bold text-white lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>Cafe E-commerce Website</h3>
                  <p className='text-zinc-500 text-[1.1rem]'>E-commerce site contains Profile Page, Cart Page, and Blogs Page. Dynamic website with responsive design. Created using React JS, Tailwind CSS, and Supabase.</p>
                  <LazyLoadImage
                    src={readmore}
                    alt="readmore img"
                    className='w-[20px] h-[20px]'
                    effect="blur"
                  />
                </div>
              </div>

              {/* Project 2 */}
              <div className='projects-card flex md:flex-row flex-col justify-between gap-[120px] items-center'>
                <div className='md:w-[50%] w-[100%] md:order-last order-first'>
                  <div className="project-img">
                    <ImageWithLoader src={project2} alt="Project Image" />
                  </div>
                </div>

                <div className='md:w-[50%] w-[100%]'>
                  <div className="project-content flex flex-col gap-[10px]">
                    <h2 className='font-extrabold text-white lg:text-[3rem] sm:text-[2.5rem] text-[2rem]'>02</h2>
                    <h3 className='font-bold text-white lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>FlickFlix Movie Website</h3>
                    <p className='text-zinc-500 text-[1.1rem]'>Movie website contains different categories of movies with search functionality. Created using JS, Movie API, and Postman.</p>
                    <LazyLoadImage
                      src={readmore}
                      alt="readmore"
                      className='w-[20px] h-[20px]'
                      effect="blur"
                    />
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className='projects-card flex md:flex-row flex-col justify-between gap-[120px] items-center'>
                <div className='md:w-[50%] w-[100%] md:order-none order-first'>
                  <div className="project-img">
                    <ImageWithLoader src={project3} alt="Project Image" />
                  </div>
                </div>

                <div className="project-content flex flex-col gap-[10px] md:w-[50%] w-[100%]">
                  <h2 className='font-extrabold text-white lg:text-[3rem] sm:text-[2.5rem] text-[2rem]'>03</h2>
                  <h3 className='font-bold text-white lg:text-[2rem] md:text-[1.8rem] text-[1.5rem]'>PayPal Business Website</h3>
                  <p className='text-zinc-500 text-[1.1rem]'>Business website consisting of 24 pages. Dynamic website with responsive design. Created using HTML, CSS, and JS.</p>
                  <LazyLoadImage
                    src={readmore}
                    alt="readmore"
                    className='w-[20px] h-[20px]'
                    effect="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component to handle image loading and display spinner
const ImageWithLoader = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Spinner />
        </div>
      )}
      <LazyLoadImage
        src={src}
        alt={alt}
        className="w-full h-full object-cover rounded-[20px]"
        effect="blur"
        beforeLoad={() => setLoading(true)} // Show loader before image loads
        afterLoad={() => setLoading(false)} // Hide loader after image has loaded
      />
    </div>
  );
};
