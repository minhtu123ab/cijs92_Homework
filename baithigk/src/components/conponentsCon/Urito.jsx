import React from 'react'
import { useSharedData } from '../../ShareDataContext';
const Urito = () => {
  const { updateName } = useSharedData();
  return (
  <div className='people Urito' onClick={() => updateName('Urito')}>
    <img className='avt' src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'/>
    <p className='name'>Urito</p>
  </div>
  )
}

export default Urito