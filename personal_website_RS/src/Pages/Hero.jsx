import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import myImage from "../assets/my.png";

export default function Hero() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <section id='hero'  className='mt-20 '>
            <div className="flex items-center justify-center">
                <img className="w-96 h-96 sm:h-1/2  rounded-full border-4 border-yellow-300" src={myImage} alt="Loading" />
            </div>
            <div className='m-8'>
                <p className='text-[30px] italic text-center'>Hey , I am </p>
                <p className=' text-[60px] sm:text-[30px]  font-bold text-center '>
                    Raghavan 
                </p>
                <div className='text-center pt-4 text-yellow-300'>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Full Stack Developer',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Mobile App Developer',
                            1000,

                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '25px', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>
            </div>
            <div className='flex mb-10 items-center'>
    
                <a target='_black' src='./assets/Resume-Raghavan-S.pdf' className='border-2  text-[20px] p-2 ml-auto mr-5 pr-5 font-bold  pl-5 rounded-lg  hover:bg-blue-600'>View CV</a>
                <a  href='#contact' className='border-2 text-[20px] mr-auto p-2 pr-5 font-bold  pl-5 rounded-lg hover:bg-blue-600 '>Contact Info</a>
            </div>
            <hr className='opacity-50 mt-20' ></hr>
        </section >
    )
}
