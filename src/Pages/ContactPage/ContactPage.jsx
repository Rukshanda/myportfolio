import React from 'react'
import ContactForm from '../../Sections/ContactForm/ContactForm'

export default function ContactPage() {
  return (
    <div className='py-[80px] '>
       <h1 className="sm:text-[2.5rem] text-[2.2rem] text-black text-center pb-[60px]">
              Get In <span className="font-extrabold">Touch</span>
            </h1>
        <ContactForm/>
    </div>
  )
}
