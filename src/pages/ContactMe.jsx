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
          .send(
            serviceId, 
            templateId, 
            {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
            }, 
            userId)
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
      <div className='w-screen h-auto bg-purple-500 font-poppins p-6 lg:p-8 scroll-smooth'>
        <div className='w-full max-w-[1080px] flex flex-col lg:flex-row items-center justify-between mx-auto'>
          {/* Form Section */}
          <div className='w-full lg:w-full'>
            <div className='flex items-center justify-center pb-2'>
              <h1 className='text-2xl sm:text-3xl text-white font-medium mb-4 border-b-4 px-2 border-white inline-block'>
                Any Questions?
              </h1>
            </div>
            <div className='max-w-md sm:max-w-lg mx-auto mt-4 p-6 sm:p-8 bg-purple-400 shadow-lg rounded-lg'>
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
                <p className={`my-4 mb-4 p-4 text-xl sm:text-2xl bg-white text-center rounded-lg ${statusType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {statusMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe