import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-[98%] bg-white h-screen m-auto py-5 mt-5 rounded-3xl">
      <Nav />
      <Home />
    </div>
  )
}

export default App
