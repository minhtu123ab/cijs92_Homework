import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dataAll } from '../../App'
import Comment from './InformationDetail/Comment';
import Information from "./InformationDetail/Information"
import SimilarMovie from './InformationDetail/SimilarMovie';

const WatchMovie = () => {
  const navigate = useNavigate();
  const data = useContext(dataAll)
  const { id } = useParams()
  const dataProductDetail = data.filter((item) => item.id == id);
  const dataProductSimilar = data.filter((item) => item.category == dataProductDetail[0].category && item.id != dataProductDetail[0].id);
  const onClick = (itemId) => {
    navigate(`/${itemId}`);
  }
  return (
    <div className='bacground-detail'>
      {dataProductDetail.map((item) => (
        <div key={item.id}>
          <div className='product-watch-all'>
          <video controls className='background-video-detail' src={item.background}/>
            <Information item={item}/>
          </div>
          <SimilarMovie item={dataProductSimilar} onClick={onClick}/>
          
          <Comment item={dataProductDetail} />

        </div>
      ))}
    </div>
  )
}

export default WatchMovie