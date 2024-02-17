import React from 'react'
import { useSharedData } from '../../ShareDataContext';
const Abshini = () => {
  const { updateName } = useSharedData();
  return (
  <div className='people Abshini' onClick={() => updateName('Abshini')}>
    <img className='avt' src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'/>
    <p className='name'>Abshini</p>
  </div>
  )
}

export default Abshini