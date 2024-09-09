import React from 'react';
import { logofooter } from '../../utils';
import { FaXTwitter, FaMedium, FaDiscord, FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
    const socialIcons = [
        { icon: FaFacebookF },
        { icon: FaInstagram },
        { icon: FaXTwitter },
        { icon: FaDiscord },
        { icon: FaMedium },
        { icon: FaLinkedin },
    ];

    return (
        <div className='bg-black'>
            <div className='max-w-[1440px] mx-auto z-[1000]'>
                <div className='py-[25px] px-[80px]'>
                    <div className="footer md:flex-row flex-col flex justify-between items-center gap-[20px]">
                        <div className="img">
                            <img src={logofooter} alt="" />
                        </div>
                        <div className="social-icons">
                            <ul className='flex gap-[20px]'>
                                {socialIcons.map((item, index) => (
                                    <li key={index} className='text-black md:text-[1.4rem] text-[1.1rem] bg-white p-[6px] rounded-[50px]'>
                                        <item.icon />
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
