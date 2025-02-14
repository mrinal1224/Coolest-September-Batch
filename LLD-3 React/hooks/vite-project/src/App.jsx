import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Memo from './components/Memo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Advanced Hooks</h1>
      <Memo/>
    </>
  )
}

export default App
