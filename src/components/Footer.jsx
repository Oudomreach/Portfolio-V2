import React from 'react'
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// #a855f7

const Footer = () => {
  return (
    <>
        <div className='w-screen h-auto bg-white p-4 font-poppins uppercase'>
            <div className='w-[1080px] h-auto mx-auto flex items-center justify-between'>
                <div className=''>
                    <h1 className='text-purple-500 text-4xl my-2 '>Get In Touch</h1>
                    {/* <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptates?</p> */}
                    <div className='flex items-center justify-start '>
                        <span className="cursor-pointer">
                            <a href="https://www.linkedin.com/in/oudomreach-chyphalla-4b64691ba/" target="_blank">
                                <FaLinkedin className='mr-2' size={40} color='#a855f7' />
                            </a>
                        </span>
                        <span className="cursor-pointer">
                            <a href="https://t.me/khorkoo" target="_blank">
                                <FaTelegram className='mx-2' size={40} color='#a855f7' /> 
                            </a>
                        </span>
                        <span className="cursor-pointer">
                            <a href="https://github.com/Oudomreach" target="_blank">
                                <FaGithub className='mx-2' size={40} color='#a855f7' />
                            </a>
                        </span>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-16 my-4'>
                    <div className="relative w-[150px] h-[150px] transform hover:scale-105 duration-500 mx-8">
                        <div className='bg-purple-500 w-full h-full rounded-tl-xl rounded-br-xl flex items-center justify-center relative z-10'>
                            <a href="#" className="flex flex-col items-center">
                                <FaTelegram size={50} color='white' />
                                <span className="text-white mt-2 font-semibold">Contact Me</span>
                            </a>
                        </div>
                        <div className='bg-black w-full h-full absolute top-4 left-4 z-0 rounded-br-xl'></div>
                    </div>
                    {/* -------- */}
                    <div className="relative w-[150px] h-[150px] transform hover:scale-105 duration-500 mx-8">
                        <div className='bg-purple-500 w-full h-full rounded-tl-xl rounded-br-xl flex items-center justify-center relative z-10'>
                            <a href="mailto:oudomreach001@gmail.com" className="flex flex-col items-center">
                            <MdEmail size={50} color='white' />
                            <span className="text-white mt-2 font-semibold">Email me</span>
                            </a>
                        </div>
                        <div className='bg-black w-full h-full absolute top-4 left-4 z-0 rounded-br-xl'></div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer