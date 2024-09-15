import React from 'react';
import { FaXTwitter, FaMedium, FaDiscord, FaFacebookF, FaInstagram, FaLinkedin, FaRegUser, FaUserPlus } from 'react-icons/fa6';
import { banner } from '../../utils';
import CopyEmailButton from "../CopyButton/CopyButton"
import Hexagon from '../Hexagon/Hexagon';
import { Toaster } from 'react-hot-toast';

const socialIcons = [

    { icon: FaFacebookF },
    { icon: FaInstagram },
    { icon: FaXTwitter },
    { icon: FaDiscord },
    { icon: FaMedium },
    { icon: FaLinkedin },

]

export default function Banner() {
const email = "contactrukshanda12@gmail.com"
  return (
    <>
          <Toaster position="top-right" reverseOrder={false} />

        <div className="max-w-[1440px] mx-auto">
      <div className="py-[60px] lg:px-[80px] sm:px-[20px] px-[10px] flex justify-between items-center">
        <div className="banner-content flex flex-col lg:flex-row items-center justify-between px-[32px] w-full gap-[40px]">
 
          <div className="banner-text lg:w-[50%] w-full flex flex-col gap-[50px] py-[20px]  lg:items-start sm:items-center items-start order-2 lg:order-1">
            <div className="flex flex-col gap-[20px] xl:gap-[30px]  lg:items-start sm:items-center">
                 <h1 className="text-black lg:text-left sm:text-center text-left text-[30px] sm:text-[36px] xl:text-[45px]">
                <span className="font-bold"> Your Vision </span>  <span className="relative inline-block font-extrabold text-white text-stroke text-[30px] sm:text-[40px] xl:text-[45px]">  My Code</span>
               
                </h1>
          
              <p className='text-black lg:text-left sm:text-center   text-[1.2rem]'>
              I build dynamic, responsive websites with clean, readable code using React, JavaScript, HTML, CSS, Tailwind, Bootstrap, and Redux Toolkit.
              </p>

              <div className='flex sm:flex-row flex-col gap-[20px]'>
              <CopyEmailButton email={email} />
              <a href="https://www.linkedin.com/in/rukshanda-mahmood-27bba6239/" target='blank' className='    
       
       '>
              <button className="w-full justify-center  flex items-center gap-[10px] bg-black px-[20px] py-[10px] text-white rounded-[8px] hover:bg-white border-black  hover:border-black border-[2px] hover:text-black transition-colors duration-400 ease-in-out">
              <span>Connect</span>
              <span>
                <FaUserPlus />
              </span>
            </button>
              </a>
         

              </div>

            </div>

        
          </div>
 
          <div className="banner-img lg:w-[50%] w-full flex justify-center order-1 lg:order-2">
            <Hexagon/>
          </div>

        </div>
      </div>
    </div>
    </>

  );
}
