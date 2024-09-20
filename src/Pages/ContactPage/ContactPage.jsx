import React from 'react'
import ContactForm from '../../Sections/ContactForm/ContactForm'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

export default function ContactPage() {
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
      <div className='py-[80px] md:px-[20px] px-[10px]'>
       <h1 className="sm:text-[2.5rem] text-[2.2rem] text-black text-center pb-[60px]">
              Get In <span className="font-extrabold">Touch</span>
            </h1>

        <ContactForm/>
        </div>
        <Footer/>

    </>
 
  )
}
