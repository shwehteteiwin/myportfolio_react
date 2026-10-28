// import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Skill from './components/sections/Skill'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-[98%] bg-[#f6fff8] h-fit m-auto py-5 rounded-3xl">
      <div className="sticky top-4 z-50">
        <Nav />
      </div>
      <Home />
      <About />
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
