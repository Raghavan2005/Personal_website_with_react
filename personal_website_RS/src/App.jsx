import { useState, useRef } from 'react'
import './App.css'
import Header from './Pages/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
import { Link } from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }
 /*  const aboutLink = document.querySelector('a[href="#about"]');
  aboutLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Customize scroll behavior
  });
  const SkillsLink = document.querySelector('a[href="#skill"]');
  SkillsLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const SkillsLinkSection = document.querySelector('#skill');
    SkillsLinkSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Customize scroll behavior
  });
  const projectLink = document.querySelector('a[href="#project"]');
  projectLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const projectSection = document.querySelector('#project');
    projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Customize scroll behavior
  });
  const contactLink = document.querySelector('a[href="#contact"]');
  contactLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const contactSection = document.querySelector('#contact');
    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Customize scroll behavior
  });
 */
  return (

    <div class="p-0 mx-2">
      {/*  */}
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
              <li><a href="#about"  class="px-4 font-bold select-none  hover:text-cyan-400">About</a ></li>
              <li><a href="#skill"  class="px-4 font-bold select-none  hover:text-cyan-400">Skills</a></li>
              <li><a href="#project"  class="px-4 font-bold select-none  hover:text-cyan-400">Project</a></li>
              <li><a href="#contact" class="px-4 font-bold select-none  hover:text-cyan-400">Contact</a ></li>
            </ul>

          </div>
          <hr class="mt-4 mb-2"></hr>
          <div class={isOpen ? 'visible' : 'hidden'}>
            <ul class="lg:hidden mr-auto border-2 p-2  rounded-md text-right relative pr-2 ">
            <li><a href="#about"  class="px-4 font-bold select-none  hover:text-cyan-400">About</a ></li>
              <li><a href="#skill"  class="px-4 font-bold select-none  hover:text-cyan-400">Skills</a></li>
              <li><a href="#project"  class="px-4 font-bold select-none  hover:text-cyan-400">Project</a></li>
              <li><a href="#contact" class="px-4 font-bold select-none  hover:text-cyan-400">Contact</a ></li>
            </ul>
          </div>
        </div>
      </div>

      {/*  */}
      <Hero />
      <About id="about"  />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>

  )
}

export default App
