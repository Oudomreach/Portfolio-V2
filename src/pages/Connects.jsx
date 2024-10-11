import React from 'react'
import { socialLinks } from '../data'

// #a855f7


const Connects = () => {
    return (
        <>
            <div className='w-screen bg-purple-500 h-[100px] py-8 flex items-center justify-center scroll-smooth'>
                <div className='w-1/2 flex items-center justify-center'>
                    <div className='items-center justify-center'>
                        <p className='text-center text-white text-3xl font-medium px-2 mb-4 border-b-4 border-white '>Let's Connect</p>
                        <div className='flex items-center justify-center gap-4'>
                            {/* <span className="cursor-pointer text-white hover:text-black transition-colors duration-300">
                                <a href="https://www.linkedin.com/in/oudomreach-chyphalla-4b64691ba/" target="_blank">
                                    <FaLinkedin size={40}  />
                                </a>
                            </span>
                            <span className="cursor-pointer text-white hover:text-black transition-colors duration-300">
                                <a href="https://t.me/khorkoo" target="_blank">
                                    <FaTelegram size={40} />
                                </a>
                            </span>
                            <span className="cursor-pointer text-white hover:text-black transition-colors duration-300">
                                <a href="https://github.com/Oudomreach" target="_blank">
                                    <FaGithub size={40} />
                                </a>
                            </span> */}
                            {
                                socialLinks.map(({ id, href, icon: Icon, }) => (
                                <span key={id} className="cursor-pointer text-white hover:text-black transition-colors duration-300">
                                    <a href={href} target="_blank" rel="noopener noreferrer">
                                    <Icon size={40} />
                                    </a>
                                </span>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Connects