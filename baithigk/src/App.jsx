import React from 'react'
import Left from './components/Left'
import Right from './components/Right'
import './App.css'
import { SharedDataProvider } from './ShareDataContext'

const App = () => {
  return (
    <SharedDataProvider>
      <div className='all'>
        <Left/>
        <Right/>
      </div>
    </SharedDataProvider>
  )
}

export default App
