import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Projects from '../../Sections/Projects/Projects'
import Skills from '../../Sections/Skills/Skills'
import Experience from '../../Sections/Experience/Experience'
import Testimonial from '../../Sections/Testimonials/Testimonial'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
export default function Home() {
  return (
    <div>
   <Helmet>
        <title>Rukshanda - Expert Frontend Developer</title>
        <meta name="description" content="Rukshanda - Web developer & front-end specialist creating responsive, user-friendly websites with expertise in HTML, CSS, JavaScript, and React." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
        <meta name="keywords" content="Rukshanda Web Developer Front-end Developer Responsive Websites User-friendly Websites React Developer Front-end Specialist" />
      </Helmet>
      <Header/>
        <Banner/>
     <Projects/>
     <Skills/>
     <Experience/>
     <Testimonial/>
     <Footer/>
    </div>
  )
}
