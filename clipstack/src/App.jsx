import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar.jsx'
import Clipboard from './components/clipboard.jsx'

function App() {
  return (
    <>
      <Sidebar />
      <Clipboard />
    </>
  )
}

export default App