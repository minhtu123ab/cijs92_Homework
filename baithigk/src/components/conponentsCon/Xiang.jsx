import React from 'react'
import { useSharedData } from '../../ShareDataContext';
const Xiang = () => {
  const { updateName } = useSharedData();
  return (
  <div className='people Xiang' onClick={() => updateName('Xiang')}>
      <img className='avt' src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'/>
      <p className='name'>Xiang
      </p>
  </div>
  )
}

export default Xiang