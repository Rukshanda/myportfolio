import React from 'react'
 import Blogs from '../../Sections/Blogs/Blogs'
import BentoGridDemo from '../../Sections/Blogs/Blogs'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function Blogspage() {
  return (
    <div  >
               <Helmet>
        <title>Rukshanda - Expert Frontend Developer</title>
        <meta name="description" content="Rukshanda - Web developer & front-end specialist creating responsive, user-friendly websites with expertise in HTML, CSS, JavaScript, and React." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
        <meta name="keywords" content="Rukshanda Web Developer Front-end Developer Responsive Websites User-friendly Websites React Developer Front-end Specialist" />
      </Helmet>
      <Header/>
        <BentoGridDemo/>
        <Footer/>
    </div>
  )
}
