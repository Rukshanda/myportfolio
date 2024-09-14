import React from 'react';
import { logofooter } from '../../utils';
import { FaXTwitter, FaMedium, FaDiscord, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    const socialIcons = [
        { 
            icon: FaInstagram,
            url: 'https://www.instagram.com/rukshandamahmood/'
        },
        { 
            icon: FaXTwitter,
            url: 'https://x.com/rukshanda10'
        },
      
        { 
            icon: FaMedium,
            url: 'https://medium.com/@rukshandanadir'
        },
        { 
            icon: FaLinkedin,
            url: 'https://www.linkedin.com/in/rukshanda-mahmood-27bba6239/'
        },
        { 
            icon: FaGithub,
            url: 'https://github.com/Rukshanda/'
        },
    ];

    return (
        <div className='bg-black'>
            <div className='max-w-[1440px] mx-auto z-[1000]'>
                <div className='py-[25px] px-[80px]'>
                    <div className="footer md:flex-row flex-col flex justify-between items-center gap-[20px]">
                        <div className="img">
                            <img src={logofooter} alt="Footer Logo" className='max-w-[180px]' />
                        </div>
                        <div className="social-icons">
                            <ul className='flex gap-[20px]'>
                                {socialIcons.map((item, index) => (
                                    <li key={index} className='text-black md:text-[1.4rem] text-[1.1rem] bg-white p-[6px] rounded-[50px] '>
                                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                                            <item.icon />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
