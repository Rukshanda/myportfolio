import React, { useState, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaXTwitter } from 'react-icons/fa6';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const [status, setStatus] = useState('');
  const form = useRef();  // Add useRef to reference the form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bf0ttiw', 'template_d04kw6k', form.current, 'mcButHbiahwxP-J8J')
      .then((result) => {
        console.log('Message sent:', result.text);
        setStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          website: '',
          message: ''
        });
      }, (error) => {
        console.log('Failed to send message:', error.text);
        setStatus('Error sending the message, please try again.');
      });
  };

  return (
  
    <div className="max-w-6xl mx-auto md:py-[30px] py-[0px] px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8 gap-[40px]">
     
      <div className="flex-1 md:order-first order-last ">
        <form ref={form} onSubmit={handleSubmit} className="space-y-6"> {/* Form is referenced */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Your website (If exists)"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I help?"
            rows="4"
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-zinc-800 transition"
          >
            Get In Touch
          </button>
        </form>

        {status && <p className="mt-4 text-green-500">{status}</p>}
      </div>

      <div className="flex-1 space-y-6 md:order-last order-first">
        <h2 className="text-4xl font-bold">
          Let's <span className="text-black">talk</span> for Something special
        </h2>
        <p className="text-zinc-600">
          I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
        </p>
        <div className="text-lg font-semibold">
          <p>contactrukshanda12@gmail.com</p>
          <p>03367622974</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/rukshanda-mahmood-27bba6239/"
            className="bg-black text-white p-3 rounded-md hover:bg-zinc-800 transition text-[1.5rem]"
            target="_blank"

          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/rukshandamahmood/"
            className="border p-3 rounded-md hover:bg-zinc-100 transition text-[1.5rem]"
            target="_blank"

          >
            <FaInstagram />
          </a>
          <a
            href="https://x.com/rukshanda10/"
            className="border p-3 rounded-md hover:bg-zinc-100 transition text-[1.5rem]"
            target="_blank"

          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/Rukshanda/"
            className="border p-3 rounded-md hover:bg-zinc-100 transition text-[1.5rem]"
            target="_blank"

          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
