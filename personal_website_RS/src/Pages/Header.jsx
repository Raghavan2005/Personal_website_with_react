import {React,useState} from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
  return (
    <div>
    <div class="mt-4">  
    <div class='container flex mx-auto p-2'>
   <h1 class="pr-6 select-none  font-bold text-4xl glow">Raghavan</h1>
   <button class="ml-auto lg:hidden" onClick={toggle}>
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

   </button>
   <ul class="hidden lg:flex ml-auto my-auto text-2xl">
    <li><Link class="px-4 font-bold select-none  hover:text-cyan-400">Skills</Link></li>
    <li><Link class="px-4 font-bold select-none  hover:text-cyan-400">Education</Link></li>
    <li><Link class="px-4 font-bold select-none  hover:text-cyan-400">Project</Link></li>
    <li><Link class="px-4 font-bold select-none  hover:text-cyan-400">Blogs</Link></li>
    <li><Link class="px-4 font-bold select-none  hover:text-cyan-400">Contact</Link></li>
   </ul>
    </div>
    <hr class="mt-4 mb-2"></hr>
    <div class={isOpen?'visible':'hidden'}>
    <ul class="lg:hidden mr-auto border-2 p-2  rounded-md text-right relative pr-2 ">
    <li class="mt-2 "><a href='#' class="font-bold select-none">Skills</a></li>
    <li class="mt-2 "><a href='#' class="font-bold select-none">Education</a></li>
    <li class="mt-2 "><a href='#' class="font-bold select-none">Project</a></li>
    <li class="mt-2 "><a href='#' class="font-bold select-none">Blogs</a></li>
    <li class="mt-2 "><a href='#' class="font-bold select-none">Contact</a></li>
      </ul>
      </div>
    </div>

   

    </div>
  )
}
