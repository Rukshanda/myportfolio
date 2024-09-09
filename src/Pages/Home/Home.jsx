import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Projects from '../../Sections/Projects/Projects'
import Skills from '../../Sections/Skills/Skills'
import Experience from '../../Sections/Experience/Experience'
import Testimonial from '../../Sections/Testimonials/Testimonial'
export default function Home() {
  return (
    <div>
        <Banner/>
     <Projects/>
     <Skills/>
     <Experience/>
     <Testimonial/>
    </div>
  )
}
