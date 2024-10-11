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
        {/* <div className='w-screen scroll-smooth'>
            <div className='w-[920px] h-auto mx-auto p-4 flex items-center justify-between'>
                <Link to={'/'}>
                    <div className='cursor-pointer'>
                        <h1 className='text-3xl text-purple-500 font-bold'>Portfolio</h1>
                    </div>
                </Link>
                
                <div className='text-base' >
                    <Link className='mx-4 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer' to={'/about'}>About Me</Link>
                    <Link className='mx-4 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer' to={'/skills'}>Skills</Link>
                    <Link className='mx-4 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer' to={'/experience'}>Experience</Link>
                    <Link className='mx-4 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer' to={'/educations'}>Education</Link>
                    
                </div>
            </div>
        </div> */}

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
          <Link className={`mx-4 p-1 font-semibold cursor-pointer ${isActive('/about') ? 'border-b-[3px] border-purple-500' : 'border-b-0'}`} to="/about">About Me</Link>
          <Link className={`mx-4 p-1 font-semibold cursor-pointer ${isActive('/skills') ? 'border-b-[3px] border-purple-500' : 'border-b-0'}`} to="/skills">Skills</Link>
          <Link className={`mx-4 p-1 font-semibold cursor-pointer ${isActive('/experience') ? 'border-b-[3px] border-purple-500' : 'border-b-0'}`} to="/experience">Experience</Link>
          <Link className={`mx-4 p-1 font-semibold cursor-pointer ${isActive('/education') ? 'border-b-[3px] border-purple-500' : 'border-b-0'}`} to="/education">Education</Link>
        </div>
      </div>

      {/* Mobile Menu (Visible only on small screens when hamburger is clicked) */}
      <div className={`sm:hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
        <div className="flex flex-col items-center sm:items-start p-4 text-center sm:text-left">
          <Link
            className="my-2 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer transition-opacity duration-300"
            to="/about"
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link
            className="my-2 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer transition-opacity duration-300"
            to="/skills"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link
            className="my-2 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer transition-opacity duration-300"
            to="/experience"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            className="my-2 p-1 font-semibold border-b-[3px] border-purple-500 cursor-pointer transition-opacity duration-300"
            to="/education"
            onClick={toggleMenu}
          >
            Education
          </Link>
        </div>
      </div>
    </div>


        {/* <Link className='mx-4 p-1 font-semibold text-xl border-b-[3px] border-purple-500 cursor-pointer' to={'/contact'}>Contact</Link> */}
    </>
  )
}

export default Navbar