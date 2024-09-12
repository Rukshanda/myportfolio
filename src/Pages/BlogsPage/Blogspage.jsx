import React from 'react'
 import Blogs from '../../Sections/Blogs/Blogs'

export default function Blogspage() {
  return (
    <div className='py-[80px] '>
             <h1 className="sm:text-[2.5rem] text-[2.2rem] text-black text-center pb-[60px]">
             My <span className="font-extrabold"> Blogs</span>
            </h1>
        <Blogs/>
    </div>
  )
}
