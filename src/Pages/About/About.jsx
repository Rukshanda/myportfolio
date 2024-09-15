import React from 'react'
 import ProgressCircles from '../../Components/SkillsBar/SkillsBar'
import Experience from '../../Sections/Experience/Experience'
  import AboutMe from "../../Sections/AboutMe/AboutMe"
  import { Helmet } from 'react-helmet'
export default function About() {
  return (
    <div>
            <Helmet>
        <title>About-Rukshanda Web Developer</title>
        <meta name="description" content="This is About Page of Portfolio." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Portfolio, Web Development, Frontend Development, JavaScript , React JS  " />
      </Helmet>
      <AboutMe/>
         <Experience/>
      <ProgressCircles/>
  
     </div>
  )
}
