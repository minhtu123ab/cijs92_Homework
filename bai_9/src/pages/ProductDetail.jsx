import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../data.json"
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
    const  { id }  = useParams();
    const data2 = data.filter((item) => item.id == id)
  return (
    <div id="product-wrapper">
      {data2.map((item) => (
        <div className="product-item">
          <div className="product-img">
            <img src={item.image} />
          </div>
          <div className="product-info">
            <h3 className="title">{item.title}</h3>
            <h3 className="title">$ {item.price}</h3>
            <h3 className="title">{item.category}</h3>
            <div className="start-wrapper">
              {Array.from(Array(Math.round(item.rating.rate)).keys()).map(
                () => (
                  <FaStar color="gold" />
                )
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductDetail