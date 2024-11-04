import React, { useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';


const ScrollToTopButton = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300){
                setBackToTopButton(true)
            } else{
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    return (
        <div>
            {backToTopButton && (
                <button 
                    className='fixed bottom-5 right-5 w-5 h-5 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-3xl md:text-4xl lg:text-5xl text-4xl transition duration-300' 
                    // className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 
                    //            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 text-3xl md:text-4xl lg:text-5xl
                    //            bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
                    onClick={scrollUp}
                >
                    <FaArrowCircleUp />
                </button>
            )}
        </div>
    )
}

export default ScrollToTopButton