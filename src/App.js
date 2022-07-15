import React from 'react'
import './App.css'
import './index.css'
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import Resume from './components/resume/Resume'
import Services from './components/services/Services'
import About from './components/about/About'


const App = () => {
  return (
    <>
    <Sidebar />
    <main className="main">
      <Home/>
      <About/>
      <Services/>
      <Resume/>
      {/* <Contact /> */}
    </main>
    </>
  )
}

export default App
