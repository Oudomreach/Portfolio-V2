import React from 'react'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import avatar from '../assets/avatar.svg'


const ContactMe = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [statusMessage, setStatusMessage] = useState('');
      const [statusType, setStatusType] = useState('')
      const [formErrors, setFormErrors] = useState({});

      const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) {
          errors.name = 'Name is required.';
        }
        if (!formData.email.trim()) {
          errors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          errors.email = 'Email address is invalid.';
        }
        if (!formData.message.trim()) {
          errors.message = 'Message is required.';
        }
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;
    
        // Replace these values with your actual EmailJS Service ID, Template ID, and User ID
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const userId = import.meta.env.VITE_USER_ID;
    
        emailjs
          .send(serviceId, templateId, formData, userId)
          .then(
            (result) => {
              setStatusMessage('Message sent successfully!');
              setStatusType('success');
              setFormData({
                name: '',
                email: '',
                message: '',
              });
              setFormErrors({})
            },
            (error) => {
              setStatusType('error');
              setStatusMessage('Failed to send message. Please try again.');
            }
          );
      };
  return (
    <>
    {/* <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Me</h2>
      {statusMessage && (
        <p className="mb-4 text-sm text-center text-green-500">{statusMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="4"
            placeholder="Your Message"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Send Message
          </button>
        </div>
      </form>
    </div> */}
    <div className='w-screen h-auto bg-purple-500 font-poppins p-8 scroll-smooth'>
      <div className='w-[1080px] flex items-center justify-between mx-auto'>
        {/* <div>
          <img className='scale-150' src={avatar} alt="" />
        </div> */}
        <div className='w-full'>
          <div className='flex items-center justify-center pb-2'>
            <h1 className='text-3xl text-white font-medium mb-4 border-b-4 px-2 border-white inline-block'>
                Any Questions?
            </h1>
          </div>
          <div className=' max-w-lg mx-auto mt-4 p-8 bg-purple-400 shadow-lg rounded-lg'>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
              </label>
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`mt-1 my-4 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${formErrors.name ? 'border-red-500 border-2 ' : 'border-grey-300'}`}
                  placeholder={formErrors.name || 'Your Name'}
              />
              <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
              </label>
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`mt-1 my-4 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${formErrors.email ? 'border-red-500 border-2 ' : 'border-grey-300'}`}
                  placeholder={formErrors.email || 'Your Email'}
              />
              <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
              </label>  
              <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`mt-1 my-4 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${formErrors.message ? 'border-red-500 border-2 ' : 'border-grey-300'}`}
                  rows="4"
                  placeholder={formErrors.message || 'Message'}
              />
              <button
                  type="submit"
                  className="w-full px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
                  onClick={handleSubmit}
              >
                  Send Message
              </button>
              {statusMessage && (
                  <p className={`my-4 mb-4 p-4 text-2xl bg-white text-center rounded-lg ${statusType === 'success' ? ' text-green-500' : 'text-red-500'}`}>{statusMessage}</p>
              )}
          </div>
        </div>
      </div>
        
      </div>
    </>
  )
}

export default ContactMe