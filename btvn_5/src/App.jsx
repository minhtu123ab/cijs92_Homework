import { useState } from 'react'
import './App.css'
import MainLeft from './components/MainLeft'
import MainRight from './components/MainRight'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
      <h1 className='header'>Sign Up #03</h1>
      <div className='main'>
        <MainLeft/>
        <MainRight/>
      </div>
    </div>
  )
}

export default App
