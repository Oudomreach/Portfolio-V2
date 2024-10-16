import React from 'react'
import profile from '../assets/profile.png';
import { ReactTyped } from 'react-typed';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
        <div className="w-screen h-screen lg:h-auto lg:min-h-screen flex items-center justify-center mx-auto bg-purple-500 font-poppins scroll-smooth">
            <div className="w-full max-w-[1080px] flex flex-col-reverse lg:flex-row items-center justify-center mx-auto  lg:px-0">
                <div className="flex flex-col justify-center lg:items-start items-center text-center lg:text-left lg:w-1/2">
                    <h1 className="text-2xl my-2 sm:text-3xl text-white font-semibold">Hello, I'm</h1>
                    <h2 className="text-3xl sm:text-5xl py-2 font-medium">
                        <span className="text-slate-800">CHYPHALLA</span>
                        <br />
                        <ReactTyped
                            className="md:text-5xl sm:text-3xl text-3xl text-white font-semibold"
                            strings={["OUDOMREACH"]}
                            typeSpeed={90}
                            backSpeed={50}
                            backDelay={3000}
                            loop
                        />
                    </h2>
                    <h3 className="text-sm sm:text-md text-white py-5 pt-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, blanditiis est culpa cum praesentium neque beatae eligendi libero distinctio amet!
                    </h3>
                    <button className="border-2 text-white px-6 py-2 text-sm sm:text-lg rounded-md font-medium hover:bg-white hover:text-purple-500 transform duration-200">
                        Resume
                    </button>
                </div>
                <div className="w-[60%] sm:w-[50%] lg:w-[40%] h-auto mt-6 lg:mt-0 rounded-full overflow-hidden">
                    <img
                        src="https://api.dicebear.com/9.x/pixel-art/svg?seed=Kingston"
                        alt="avatar"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    </>
  )
}

{/* Social Icon on left side webpage
            <div className="fixed bottom-0 left-0  ml-4 flex flex-col items-center space-y-4">

                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                    <FaLinkedin size={30} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                    <FaGithub size={30} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                    <FaFacebook size={30} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                    <FaInstagram size={30} />
                </a>

                <div className="h-40 w-0.5 bg-white"></div>
            </div> */}

export default Hero