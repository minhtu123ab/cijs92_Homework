import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataAll } from '../../App'
import { Button } from 'antd'
import { FaPlay } from "react-icons/fa";
import Comment from './InformationDetail/Comment';
import Information from "./InformationDetail/Information"
import SimilarMovie from './InformationDetail/SimilarMovie';

const ProductDetail = () => {
  const navigate = useNavigate();
  const navigateWatch = useNavigate();
  const data = useContext(dataAll)
  const { id } = useParams()
  const dataProductDetail = data.filter((item) => item.id == id);
  const dataProductSimilar = data.filter((item) => item.category == dataProductDetail[0].category && item.id != dataProductDetail[0].id);
  const onClick = (itemId) => {
    navigate(`/${itemId}`);
  }
  const [countView, setCountView] = useState(dataProductDetail[0]?.count || 0);

  const onClickWatch = async (itemId,itemName) => {
    navigateWatch(`/${itemId}/${itemName}`);
    const count = countView;
    const movieId = dataProductDetail[0].id
    try{
      const updateCount = await fetch(`http://localhost:3000/data/${movieId}`,{
        method: 'PATCH',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          count: count + 1,
        }),
      });
      if(updateCount.ok){
        console.log("Update count successfully")
        setCountView(count + 1)
      } else {
        console.error("Update count failed")
      }
    } catch(error) {
      console.error("Có lỗi xảy ra", error)
    }
  }
  return (
    <div className='bacground-detail'>
      {dataProductDetail.map((item) => (
        <div key={item.id}>
          <img className='background-img-detail' src={item.background}/>
          <div className='blurred-background'></div>
          <div className='product-detail-all'>
            <div className='btn-img-product-detail'>
              <img className='img-product-detail' src={item.image}/>
              <Button onClick={() => onClickWatch(item.id, item.movieName)} icon={<FaPlay size={16}/>} className='btn-play'>Xem phim</Button>
            </div>
            <Information item={item}/>
          </div>
          <SimilarMovie item={dataProductSimilar} onClick={onClick}/>
          
          <Comment item={dataProductDetail} />

        </div>
      ))}
    </div>
  )
}

export default ProductDetail