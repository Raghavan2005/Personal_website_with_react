import { useState } from 'react'
import './App.css'
import Header from './Pages/Header'
import Hero from './Pages/Hero'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './Pages/Footer'
function App() {


  return (
    <div class="p-0 mx-1">

          
      <Header />
      <Hero />
      <About/>
      <Skills/>
      <Projects/>
     <Contact/>
     <Footer/>

    </div>
  )
}

export default App
