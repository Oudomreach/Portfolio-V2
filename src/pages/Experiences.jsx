import React from 'react'
import { FaChevronRight, FaCircle } from 'react-icons/fa'

const Experiences = () => {
  return (
    <>
        

        <div className='w-screen h-auto mx-auto bg-purple-400 font-poppins scroll-smooth pb-8'>
            <div className='w-full max-w-[1080px] flex items-center justify-center mx-auto px-4 lg:px-0'>
                <div className='flex flex-col items-center justify-between p-4'>
                <div className='px-2 uppercase font-medium border-white border-b-4 m-2'>
                    <h1 className='text-white text-2xl sm:text-3xl'>My Experience <span className='text-purple-900'></span></h1>
                </div>

                <div className="w-full max-w-[980px] h-auto p-4">
                    <div className="relative">
                    <h3 className="text-lg sm:text-xl font-semibold text-purple-900">Officer - Management Information Technology</h3>
                    <span className="text-md sm:text-xl font-medium text-purple-900">Forte Life Assurance, Feb 2022 - June 2023</span>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        Maintain Web Application &amp; System
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
                        Install Software and hardware, Provide overall support to all users in internal and other system application
                        </li>
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        Support both internal users and sales with Channel Portal, Core System
                        </li>
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        Setup workstation for new staff and backup everything for staff resigns
                        </li>
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        Manage company’s workstation, IT assets, and inventory updating
                        </li>
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        Involved with new Service and Company’s various system, Administrator network, and internet services
                        </li>
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        Manage Ticket on JIRA and track process flow with vendor
                        </li>
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        Testing new features regarding new products
                        </li>
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        FortiGate monthly reports
                        </li>
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        Working with all departments on product data reports
                        </li>
                    </ul>
                    </div>
                    <div className="relative py-4 my-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-purple-900">Volunteer - Paragon University</h3>
                    <span className="text-md sm:text-xl font-medium text-purple-900">30-31 Nov 2018</span>
                    <ul className="mt-4 space-y-2">
                        <li className="flex items-start">
                        <FaChevronRight className="text-white mt-1 mr-2" />
                        Participated as a volunteer in the successful organization of the 14th Cambodia Annual STEM Festival
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