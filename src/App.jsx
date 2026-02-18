import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Hero from './component/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
    </>
  )
}

export default App
