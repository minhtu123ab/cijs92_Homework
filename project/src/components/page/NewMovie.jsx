import React, { useContext } from 'react'
import { dataAll } from '../../App'
import Product from '../products/Product';

const NewMovie = () => {
  const data = useContext(dataAll)
  const dataNew = [...data];
  for (let i = 0; i < dataNew.length; i++) {
    for ( let j = i; j < dataNew.length; j++){
      let x;
      if(dataNew[j].formattedDate > dataNew[i].formattedDate){
        x = dataNew[j];
        dataNew[j] = dataNew[i];
        dataNew[i] = x;
      }
    }
  }
  console.log(dataNew);
  const dataNewMovies = dataNew.slice(0,5)
  return (
    <div className='hot-movies'>
      <h2 className='title-hot-movies'>Các phim được ra mắt gần đây</h2>
      <Product item={dataNewMovies}/>
    </div>
  )
}

export default NewMovie