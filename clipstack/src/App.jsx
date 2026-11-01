import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ClipStack</h1>
      <p>Your clipboard organised</p>
      <button>Clear history</button>
    </>
  )
}

export default App
