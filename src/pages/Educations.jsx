import React from 'react'
import { educations } from '../data.js'
// import { FaChevronRight, FaCircle } from 'react-icons/fa'

const Educations = () => {
  return (
    <>
        

        <div id='education' className='w-screen h-auto bg-purple-500 font-poppins p-6 lg:p-8 scroll-smooth'>
            <div className='w-full max-w-[1080px] flex items-center justify-center mx-auto'>
                <div className='flex flex-col items-center justify-between w-full'>
                <div className='px-2 uppercase font-medium border-white border-b-4 m-2'>
                    <h1 className='text-white text-2xl sm:text-3xl'>Education <span className='text-purple-900'></span></h1>
                </div>

                <div className="w-full max-w-[980px] h-auto p-4">
                    {
                    educations.map((education, index) => (
                        <div key={education.id} className="py-4 text-lg sm:text-xl">
                        <h1 className="font-semibold text-black">{education.year}</h1>
                        <h1 className="font-medium text-white">{education.schoolTitle}</h1>
                        <h1 className="font-medium text-gray-300">{education.description}</h1>
                        </div>
                    ))
                    }
                </div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Educations