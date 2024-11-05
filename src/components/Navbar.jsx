import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to check if the link is active
    const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="w-screen h-auto scroll-smooth bg-white shadow-md">
        <div className="w-full max-w-[920px] h-auto mx-auto p-4 flex items-center justify-between">
          {/* 1st Flex - Portfolio Logo */}
          <Link to="/">
            <div className="cursor-pointer">
              <h1 className="text-2xl md:text-3xl text-purple-500 font-bold">Portfolio</h1>
            </div>
          </Link>

          {/* Hamburger Icon (Visible on smaller screens) */}
          <div className="block sm:hidden">
            <button onClick={toggleMenu} className="text-purple-500 focus:outline-none transition-transform duration-300">
              <svg
                className={`w-6 h-6 transform ${isOpen ? 'rotate-90' : 'rotate-0'} transition-transform duration-300 ease-in-out`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                ></path>
              </svg>
            </button>
          </div>

          {/* 2nd Flex - Navigation Links (Hidden on smaller screens, shown on larger screens) */}
          <div className="hidden sm:flex text-base">
            <a className={`mx-4 p-1 font-semibold cursor-pointer ${isActive('/about') ? 'border-b-[3px] border-purple-500' : 'border-b-0'}`} href="#about">About Me</a>
            <a className={`mx-4 p-1 font-semibold cursor-pointer ${isActive('/skills') ? 'border-b-[3px] border-purple-500' : 'border-b-0'}`} href="#skills">Skills</a>
            <a className={`mx-4 p-1 font-semibold cursor-pointer ${isActive('/experience') ? 'border-b-[3px] border-purple-500' : 'border-b-0'}`} href="#exp">Experience</a>
            <a className={`mx-4 p-1 font-semibold cursor-pointer ${isActive('/education') ? 'border-b-[3px] border-purple-500' : 'border-b-0'}`} href="#education">Education</a>
            <a className={`mx-4 p-1 font-semibold cursor-pointer ${isActive('/education') ? 'border-b-[3px] border-purple-500' : 'border-b-0'}`} href="#contact">Contat Me</a>
          </div>
        </div>

        {/* Mobile Menu (Visible only on small screens when hamburger is clicked) */}
        <div className={`sm:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
          <div className="flex flex-col items-center sm:items-start p-4 text-center sm:text-left">
            <a
              className="my-2 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer transition-opacity duration-300"
              href="#about"
              onClick={toggleMenu}
            >
              About Me
            </a>
            <a
              className="my-2 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer transition-opacity duration-300"
              href="#skills"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a
              className="my-2 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer transition-opacity duration-300"
              href="#exp"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a
              className="my-2 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer transition-opacity duration-300"
              href="#education"
              onClick={toggleMenu}
            >
              Education
            </a>
          </div>
        </div>
      </div>


        {/* <Link className='mx-4 p-1 font-semibold text-xl border-b-[3px] border-purple-500 cursor-pointer' to={'/contact'}>Contact</Link> */}
    </>
  )
}

export default Navbar