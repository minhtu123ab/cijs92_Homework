import React from 'react';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import FAQ from './components/FAQ';
import Navbar from './components/Navbar';
import HotMovies from './components/HotMovies';
import SingleMovie from './components/SingleMovie';
import SeriesMovie from './components/SeriesMovie';
import NewMovie from './components/NewMovie';
import Search from './components/Search';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <RoutesWithNavbar />
    </BrowserRouter>
  )
}

const RoutesWithNavbar = () => {
  let location = useLocation(); // Lấy thông tin về đường dẫn hiện tại
  let hideNavbarPaths = ['/login', '/register']; // Định nghĩa các đường dẫn không hiển thị Navbar

  return (
    <div>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/hotmovies' element={<HotMovies />}/>
        <Route path='/singlemovie' element={<SingleMovie />}/>
        <Route path='/seriesmovie' element={<SeriesMovie />}/>
        <Route path='/newmovie' element={<NewMovie />}/>
        <Route path='/search' element={<Search />}/>
        </Routes>
      {!hideNavbarPaths.includes(location.pathname) && <Footer />}  
    </div>
  );
}

export default App;
