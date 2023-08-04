import { useState } from 'react'
import './App.css'

import Header from './layout/Header'
import About from './layout/About'
import Experience from './layout/Experience'
import Banner from './layout/Banner'
import Skills from './layout/Skills'
import Education from './layout/Education'
import Portfolio from './layout/Portfolio'
import Contact from './layout/Contact'

function App() {

  return (
    <main>
      <Header />
      <About />
      <Experience />
      <Banner />
      <Skills />
      <Education />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default App
