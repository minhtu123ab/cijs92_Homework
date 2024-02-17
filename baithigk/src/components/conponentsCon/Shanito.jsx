import React from 'react'
import { useSharedData } from '../../ShareDataContext';
const Shanito = () => {
    const { updateName } = useSharedData();
  return (
    <div className='people Shanito' onClick={() => updateName('Shanito')}>
        <img className='avt' src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'/>
        <p className='name'>Shanito</p>
  </div>
  )
}

export default Shanito