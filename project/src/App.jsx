import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import Login from './components/auth/Login';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Register from './components/auth/Register';
import Home from './components/page/Home';
import FAQ from './components/page/FAQ';
import Navbar from './components/layout/Navbar';
import HotMovies from './components/page/HotMovies';
import SingleMovie from './components/page/SingleMovie';
import SeriesMovie from './components/page/SeriesMovie';
import NewMovie from './components/page/NewMovie';
import Search from './components/page/Search';
import Footer from './components/layout/Footer';
import axios from "axios";
import ProductDetail from './components/products/ProductDetail';
import WatchMovie from './components/products/WatchMovie';
import Admin from './components/admin/Admin';
import Statistical from './components/admin/components/Statistical';
import PushMovie from './components/admin/components/PushMovie';
import User from './components/admin/components/User';
export const dataAll = createContext();


const App = () => {
  localStorage.setItem("register", JSON.stringify([
    {
        nameRegister : "admin",
        useNameRegister : "admin@gmail.com",
        passwordRegister : "admin123",
        passwordRegisterAgain : "admin123"
    }
  ]));
  const URL = axios.create({
    baseURL: "http://localhost:3000/data"
  })

  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await URL.get();
      const updatedData = data.map(item => {
        // Giả sử item.releaseDate có định dạng "DD/MM/YYYY"
        const parts = item.releaseDate.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Trừ 1 vì tháng trong JS bắt đầu từ 0
        const year = parseInt(parts[2], 10);
  
        // Sử dụng constructor Date với định dạng "year, month, day"
        item.formattedDate = new Date(year, month, day);
  
        return item;
      });
      setDataProduct(updatedData);
    };
    getData();
  }, []);
  
  useEffect(() => {
  if (dataProduct.length > 0) {
    console.log(dataProduct);
  } else {
    console.log("Dữ liệu chưa sẵn sàng hoặc không có dữ liệu");
  }
}, [dataProduct]);

  return (
    <BrowserRouter>
      <RoutesWithNavbar dataProduct={ dataProduct }/>
    </BrowserRouter>
  )
}

const RoutesWithNavbar = ({dataProduct}) => {
  let location = useLocation(); // Lấy thông tin về đường dẫn hiện tại
  let hideNavbarPaths = ['/login', '/register', '/admin' ,'/statistical','/pushmovie',"/user"]; // Định nghĩa các đường dẫn không hiển thị Navbar
  let hideNavbarPaths2 = ['/login', '/register']; // Định nghĩa các đường dẫn không hiển thị Navbar

  return (
    <dataAll.Provider value={ dataProduct }>
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
        <Route path='/:id' element={<ProductDetail />}/>
        <Route path='/:id/:movieName' element={<WatchMovie />}/>
        <Route path='/admin' element={<Admin />} />
        <Route path='/statistical' element={<Statistical />} />
        <Route path='/pushmovie' element={<PushMovie />} />
        <Route path='/user' element={<User />} />
        </Routes>
      {!hideNavbarPaths2.includes(location.pathname) && <Footer />}  
    </dataAll.Provider>
  );
}

export default App;
