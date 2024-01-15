import React from 'react'
import { CiHeart } from "react-icons/ci";
export default function Footer() {
    const year = new Date();
    let d = year.getFullYear();
    return (
        <div className="mt-5 text-center">
            <div className="flex items-center justify-center font-bold text-xl">
                <p>Made with</p>
                <div className="pl-3 pr-3 text-red-600 text-3xl">
                    <CiHeart />
                </div>
                <p>{d}</p>

            </div>
            <div className='font-bold mt-3'> 
                 <p className='pl-3 pr-3'>Copyright ©</p>

                <p > All rights reserved.</p>
            </div>

        </div>

    )
}
