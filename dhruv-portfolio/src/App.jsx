import { useState } from 'react'
import Navbar from './navbar'
import Hero from './hero'
import About from './about'
import Education from './education'
import Skills from './skills'
import Project from './projects'
import Contact from './contact'
import './App.css'

function App() {

  return (
    <div className='bg-black h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory'>
      <Navbar />
      <section className='snap-start'>
        <Hero />
      </section>
      <section className='snap-start'>
        <About />
      </section>
      <section className='snap-start'>
        <Education />
      </section>
      <section className='snap-start'>
        <Skills />
      </section>
      <section className='snap-start'>
        <Project />
      </section>
      <section className='snap-start'>
        <Contact />
      </section>
    </div>
  )
}

export default App
