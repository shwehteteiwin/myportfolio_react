// import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/sections/Home'
import About from './components/sections/About'
import Skill from './components/sections/Skill'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-[96%] bg-[#f6fff8] h-fit m-auto py-5 rounded-3xl">
      <Nav />
      <Home />
      <About />
      <Skill/>
    </div>
  )
}

export default App
