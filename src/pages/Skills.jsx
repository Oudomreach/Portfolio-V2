import React from 'react'
import {techs, socialLinks} from '../data.js'


const Skills = () => {

        
  return (
    <>
        <div className='w-screen h-[380px] bg-purple-400 font-poppins p-8 scroll-smooth'>
        <div className='flex items-center justify-center pb-4'>
            <h1 className='text-3xl text-white font-medium mb-4 border-b-4 px-2 border-white inline-block'>
                Skills
            </h1>
        </div>
            <div className='w-[1050px] mx-auto h-auto'>
                <h1 className='text-xl text-white font-medium py-3' >Technology</h1>
                <div className='bg-white p-4 flex rounded-xl overflow-hidden '>
                    <div className='flex items-center justify-start w-full overflow-hidden'>
                        <div className='flex animate-loop-scroll space-x-0 hover:paused'>
                            {
                                techs.concat(techs).map((tech, index) => (
                                    <div key={index} className='w-[10%] flex-shrink-0'>
                                        <img className='w-[60%]' src={tech.src} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


export default Skills