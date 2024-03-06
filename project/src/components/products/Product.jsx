import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = ({item}) => {
  
  const navigate = useNavigate();
  const onClick = (itemId) => {
    const isLoggedIn = sessionStorage.getItem('login');
    if(!isLoggedIn){
      navigate("/login");
    }
    else {
      navigate(`/${itemId}`)
    }
  }

  return (
      <div className='item-product-all product-search'>
        {item.map((item)=>(
          <div key={item.id} className='item-product' onClick={() => onClick(item.id)}>
            <img className='img-item' src={item.image}/>
            <p className='movieName'>{item.movieName}</p>
            <p className='views'>Lượt xem: {item.count}</p>
          </div>     
        ))}
      </div>
  )
}

export default Product