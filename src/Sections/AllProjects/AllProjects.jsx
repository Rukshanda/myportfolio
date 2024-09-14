import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';  
import 'react-lazy-load-image-component/src/effects/blur.css';  
import { project1, project2, project3, project4, project5, project6, readmore } from '../../utils';

const ProjectCard = ({ title, description, imageSrc }) => (
  <div className="allprojects-card w-full bg-black py-[30px] px-[20px] flex-col gap-[40px] rounded-2xl text-white flex gap-15 items-center transform transition-transform duration-300 hover:scale-105 shadow-3d hover:shadow-2xl">
    <div className="content-cont flex flex-col gap-[15px]">
      <h3 className="font-bold sm:text-[1.4rem] text-[1.2rem] uppercase">{title}</h3>
      <p className="font-semibold text-zinc-300 text-[1rem]">{description}</p>
    </div>
    <div className="img-cont">
      {/* Lazy load image */}
      <LazyLoadImage
        src={imageSrc}
        alt={title}
        className="w-full rounded-md"
        effect="blur" // Add blur effect while loading
      />
    </div>
    <button className="w-full flex items-center justify-center gap-2.5 bg-zinc-800 py-2.5 px-5 rounded-lg hover:bg-zinc-900">
      <LazyLoadImage
        src={readmore}
        alt="View more"
        className="w-5 h-5"
        effect="blur"
      />
      <span>View more</span>
    </button>
  </div>
);

export default function AllProjects() {
  const projects = [
    {
      title: 'Cafe',
      description: 'E-commerce site containing Profile Page, Cart Page, and Blogs Page. Dynamic website with responsive design. Created using React JS, Tailwind CSS, and Supabase.',
      imageSrc: project1
    },
    {
      title: 'FlickFlix',
      description: 'Movie website containing different categories of movies with search functionality. Created using JS, Movie API, and Postman.',
      imageSrc: project2
    },
    {
      title: 'PayPal',
      description: 'Business website consisting of 24 pages. Dynamic website with responsive design. Created using HTML, CSS, and JS.',
      imageSrc: project3
    },
    {
      title: 'Forkify',
      description: 'Pizza Order Menu website created using API. Here you can order it, add it to your favorite list, and much more. Created using JS, Food API, and Postman.',
      imageSrc: project4
    },
    {
      title: 'Forestic',
      description: 'Blogging website where you can write, post, and see others\' blogs too. Dynamic website with responsive design. Created using React JS, Tailwind CSS, and React Hook Forms.',
      imageSrc: project5
    },
    {
      title: 'Wild Oasis',
      description: 'Booking website containing dashboard, cabins, bookings, and authentication page. Dynamic Website created using React JS, Tailwind, and Supabase.',
      imageSrc: project6
    }
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="py-20 lg:px-20 sm:px-5 px-5">
        <div className="allprojects">
          <h1 className="sm:text-[2.5rem] text-[2.2rem] text-black text-center">
            All <span className="font-extrabold">Projects</span>
          </h1>
          <div className="py-[80px]">
            <div className="allprojects-cards grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-[15px] gap-y-[25px]">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  imageSrc={project.imageSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
