import React from 'react'
import ContactForm from '../../Sections/ContactForm/ContactForm'
import { Helmet } from 'react-helmet'

export default function ContactPage() {
  return (
    <>
    
    <Helmet>
        <title>ContactPage-Rukshanda</title>
        <meta name="description" content="This is Contact Page of Portfolio." />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Portfolio, Web Development, Frontend Development, JavaScript , React JS  " />
      </Helmet>

      <div className='py-[80px] md:px-[20px] px-[10px]'>
       <h1 className="sm:text-[2.5rem] text-[2.2rem] text-black text-center pb-[60px]">
              Get In <span className="font-extrabold">Touch</span>
            </h1>
        <ContactForm/>
    </div>
    </>
 
  )
}
