import React from 'react'
import { Button , Input } from "antd";
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Phone from './pages/Phone';
import Laptop from './pages/Laptop';
import Home from './pages/Home';
import Tablet from './pages/Tablet';
import NotFound from './pages/NotFound';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/phone' element = {<Phone/>}/>
        <Route path='/laptop' element = {<Laptop/>}/>
        <Route path='/tablet' element = {<Tablet/>}/>
        <Route path='/product' element = {<Product/>}/>
        <Route path='/product/:id' element = {<ProductDetail/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App