import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Projects from '../../Sections/Projects/Projects'
import Skills from '../../Sections/Skills/Skills'
import Experience from '../../Sections/Experience/Experience'
import Testimonial from '../../Sections/Testimonials/Testimonial'
import { Helmet } from 'react-helmet'
export default function Home() {
  return (
    <div>
   <Helmet>
        <title>Home-Rukshanda Web Developer</title>
        <meta name="description" content="This is Home Page of Portfolio." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Portfolio, Web Development, Frontend Development, JavaScript , React JS  " />
      </Helmet>
      
        <Banner/>
     <Projects/>
     <Skills/>
     <Experience/>
     <Testimonial/>
    </div>
  )
}
