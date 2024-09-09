import React from 'react'
import AboutMe from '../../Sections/AboutMe/Aboutme'
import ProgressCircles from '../../Components/SkillsBar/SkillsBar'
import Experience from '../../Sections/Experience/Experience'
  
export default function About() {
  return (
    <div>
        <AboutMe/>
        <Experience/>
      <ProgressCircles/>
  
     </div>
  )
}
