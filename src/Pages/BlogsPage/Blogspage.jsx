import React from 'react'
 import Blogs from '../../Sections/Blogs/Blogs'
import BentoGridDemo from '../../Sections/Blogs/Blogs'
import { Helmet } from 'react-helmet'

export default function Blogspage() {
  return (
    <div  >
                   <Helmet>
        <title>BlogPage-Rukshanda</title>
        <meta name="description" content="This is Blog Page of Portfolio." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Portfolio, Web Development, Frontend Development, JavaScript , React JS  " />
      </Helmet>
        <BentoGridDemo/>
    </div>
  )
}
