import React from 'react'
import { FaHtml5,FaCss3Alt,FaJs,FaReact,FaNode,FaAndroid,FaJava,FaPhp,FaPython,FaLinux      } from "react-icons/fa";
import { SiTailwindcss,SiMysql  } from "react-icons/si";
import { BsFiletypeXml } from "react-icons/bs";
import { RiFlutterFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
export default function Skills() {
    return (
        <section  id='skill'>
            <div className='mt-20'>
                <div className='text-center opacity-50 text-[25px]'>Explore my</div>
                <div className='text-center font-bold  text-[35px]'>Skills</div>
                <div className='lg:flex sm:space-y-3 text-center  items-center mt-10'>
                    <div className='border p-4 rounded-md lg:mx-auto'>
                        <p className='text-[20px] text-yellow-400 font-bold p-2'>Full Stack Developer</p>
                        <ul className='p-3 grid grid-rows-3  grid-flow-col gap-4 mt-4'>
                            <li className='sm:text-[80px] hover:text-yellow-400  text-[50px]'><FaHtml5 /></li>
                            <li className='sm:text-[80px] hover:text-yellow-400 text-[50px]'><FaCss3Alt/></li>
                            <li className='sm:text-[80px] hover:text-yellow-400 text-[50px]'><FaJs/></li>
                            <li className='sm:text-[80px] hover:text-yellow-400 text-[50px]'><FaReact/></li>
                            <li className='sm:text-[80px] hover:text-yellow-400 text-[50px]'><FaNode/></li>
                            <li className='sm:text-[80px] hover:text-yellow-400 text-[50px]'><SiTailwindcss/></li>
                            
                            </ul>
                    </div>
                    <div className='border p-4 rounded-md lg:mx-auto'>
                        <p className='text-[20px] text-blue-400 font-bold p-2'>Mobile App Developer</p>
                        <ul className='grid p-3 grid-rows-3 grid-flow-col gap-5 mt-4'>
                            <li className='sm:text-[80px] hover:text-blue-400 text-[50px]'><FaAndroid /></li>
                            <li className='sm:text-[80px] hover:text-blue-400 text-[50px]'><FaJava /></li>
                            <li className='sm:text-[80px] hover:text-blue-400 text-[50px]'><BsFiletypeXml /></li>
                            <li className='sm:text-[80px] hover:text-blue-400 text-[50px]'><RiFlutterFill /></li>
                            <li className='sm:text-[80px] hover:text-blue-400 text-[50px]'><IoLogoFirebase /></li>
                            <li className='sm:text-[80px] hover:text-blue-400 text-[50px]'></li>
                            
                            </ul>
                    </div>
                    <div className='border p-4 rounded-md lg:mx-auto'>
                        <p className='text-[20px] text-green-400  font-bold p-2'>Other Skills</p>
                        <ul className='grid p-3 grid-rows-3 grid-flow-col gap-5 mt-4'>
                            <li className='sm:text-[80px] hover:text-green-400 text-[50px]'><SiMysql /></li>
                            <li className='sm:text-[80px] hover:text-green-400 text-[50px]'><FaPhp /></li>
                            <li className='sm:text-[80px] hover:text-green-400 text-[50px]'><FaPython /></li>
                            <li className='sm:text-[80px] hover:text-green-400 text-[50px]'><TbBrandVscode /></li>
                            <li className='sm:text-[80px] hover:text-green-400 text-[50px]'><FaLinux /></li>
                            <li className='sm:text-[80px] hover:text-green-400 text-[50px]'><DiMongodb /></li>
                            
                            </ul>
                    </div>

                </div>
            </div>
            <hr id='project' className='mt-20 opacity-50'></hr>
        </section >
    )
}
