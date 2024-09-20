import React from 'react';
import ProgressCircles from '../../Components/SkillsBar/SkillsBar';
import Experience from '../../Sections/Experience/Experience';
import AboutMe from "../../Sections/AboutMe/AboutMe";
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

export default function About() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  return (
 <>
   <Helmet>
        <title>Rukshanda - Expert Frontend Developer</title>
        <meta name="description" content="Rukshanda - Web developer & front-end specialist creating responsive, user-friendly websites with expertise in HTML, CSS, JavaScript, and React." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={window.location.href} />
        <meta name="keywords" content="Rukshanda Web Developer Front-end Developer Responsive Websites User-friendly Websites React Developer Front-end Specialist" />
      </Helmet>

      <Header/>

      <AboutMe />
        <Experience />
        <ProgressCircles />

        <Footer/>
 </>
    
    
       
 
  
     
  );
}
