import React from 'react'
import { FaChevronRight, FaCircle } from 'react-icons/fa'

const Experiences = () => {
  return (
    <>
        <div className='w-screen h-auto  mx-auto bg-purple-400 font-poppins scroll-smooth'>
            <div className='w-[1080px] flex items-center justify-center mx-auto'>
                <div className='flex flex-col items-center justify-between p-4'>
                    <div className='px-2 uppercase font-medium border-white border-b-4 m-2'>
                        <h1 className='text-white text-3xl'>My Experience <span className='text-purple-900'></span></h1>
                    </div>

                    <div className="w-[980px] h-auto p-4">
                        <div className="relative">
                            <h3 className="text-xl font-semibold text-purple-900">Officer - Management Information Technology</h3>
                            <span className="text-xl font-medium text-purple-900">Forte Life Assurance, Feb 2022 - June 2023</span>
                            <ul className="mt-4 space-y-2">
                            {/* <div className="absolute left-0 top-0 h-full border-l-2 border-orange-500"></div> */}
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    Maintain Web Application &amp; System
                                    {/* Sub-list of tasks */}
                                    
                                </li>
                                <ul className="ml-8 mt-2 space-y-1">
                                    <li className="flex items-start">
                                        <FaCircle size={10} className="text-white mt-1 mr-2" />
                                        Implement a functional on webpage using JavaScript
                                    </li>
                                    <li className="flex items-start">
                                        <FaCircle size={10} className="text-white mt-1 mr-2" />
                                        Web Design
                                    </li>
                                    <li className="flex items-start">
                                        <FaCircle size={10} className="text-white mt-1 mr-2" />
                                        Create new feature on CMS web application
                                    </li>
                                </ul>
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    Install Software and hardware Provide overall support to all users in internal and other system application
                                </li>
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    Support both internal users and saler with Channel Portal, Core System
                                </li>
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    Setup workstation for new staff and backup everything for staff resigns

                                </li>
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    Manage company’s workstation, IT assets and inventory updating
                                </li>
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    Involve with new Service and Company’s various system, Administrator network and internet services
                                </li>
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    Manage Ticket on JIRA and Track process flow with vendor
                                </li>
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    Testing new features regarding with new products
                                </li>
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    FortiGate monthly reports
                                </li>
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    Working with all department on products data reports
                                </li>
                            </ul>
                        </div>
                        <div className="relative py-4 my-2">
                            <h3 className="text-xl font-semibold text-purple-900">Volunteer - Paragon University</h3>
                            <span className="text-xl font-medium text-purple-900">30-31 Nov 2018</span>
                            <ul className="mt-4 space-y-2">
                            {/* <div className="absolute left-0 top-0 h-full border-l-2 border-orange-500"></div> */}
                                <li className="flex items-start">
                                    <FaChevronRight className="text-white mt-1 mr-2" />
                                    {/* Maintain Web Application &amp; System */}
                                    Participated as volunteer in the successful Organization of 14th Cambodia Annual STEM Festival
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Experiences