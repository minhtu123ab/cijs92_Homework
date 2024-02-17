import React from 'react'
import { useSharedData } from '../../ShareDataContext';
const Nenko = () => {
  const { updateName } = useSharedData();
  return (
    <div className='people Nenko'  onClick={() => updateName('Nenko')}>
        <img className='avt' src='https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg'/>
        <p className='name'>Nenko</p>
    </div>
  )
}

export default Nenko