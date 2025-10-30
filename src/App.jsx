import { useState } from 'react'
import WebHome from './Pages/WebHome'
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <WebHome/>
    </div>
  )
}

export default App
