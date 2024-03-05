import React from 'react'
import "./App.css"
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Navbar from './components/Navbar'
import All from './components/All'
import Active from './components/Active'
import Completed from './components/Completed'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <h1>#todo</h1>
        <Navbar/>
        <Routes className={"all-list"}>
          <Route path='/' element={<All/>}/>
          <Route path='/active' element={<Active/>}/>
          <Route path='/completed' element={<Completed/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App