import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { FaRegUser, FaTimes, FaUserPlus ,   } from 'react-icons/fa';
import { FaBarsStaggered, FaPerson } from 'react-icons/fa6';
import { bar, logo } from '../../utils'; // Ensure correct paths

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleResDropdown = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  const navItems = [
    { title: "About", path: "/about" },
     { title: "Projects", path: "/projects" },
    { title: "Blogs", path: "/blogs" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className='sticky top-0 bg-white z-[1000]'>
      <header className="max-w-[1440px] mx-auto">
        <div className="py-[24px] flex items-center justify-between lg:px-[80px] px-[20px]">
          <div className="logo">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Logo" className='max-w-[180px]' />
            </NavLink>
          </div>

          <nav className="hidden md:!flex lg:gap-[32px] gap-[25px]">
            {navItems.map((item) => (
              <NavLink
                className={({ isActive }) => `font-semibold lg:text-[1.2rem] text-[1.1rem] ${isActive ? 'text-zinc-500' : 'text-black'} hov`}
                key={item.title}
                to={item.path}
              >
                {item.title}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:!block">
          <button className=" flex items-center gap-[10px] bg-black px-[20px] py-[10px] text-white rounded-[8px] hover:bg-white border-black  hover:border-black border-[2px] hover:text-black transition-colors duration-400 ease-in-out">
          <span>Resume</span>
              <span>
                <FaRegUser />
              </span>
            </button>
          </div>

          <button
            onClick={toggleResDropdown}
            className="md:hidden flex items-center"
            type="button"
          >
            {isNavOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBarsStaggered className="text-2xl" />
            )}
          </button>

        </div>

        <div
          className={`${
            isNavOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed top-0 left-0 w-full h-full bg-white transform transition-transform duration-500 ease-in-out z-50 lg:hidden`}
        >
          <div className="flex justify-between items-center p-[24px]">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Logo" className='max-w-[180px]'  />
            </NavLink>
            <button onClick={toggleResDropdown} className="text-black text-2xl">
              <FaTimes />
            </button>
          </div>
          <nav className="flex flex-col items-center mt-10">
            {navItems.map((item) => (
              <NavLink
                className="text-[1.5rem] font-semibold py-4 text-black"
                key={item.title}
                to={item.path}
                onClick={toggleResDropdown}
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}
