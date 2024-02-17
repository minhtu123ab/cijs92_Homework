import React from 'react'
import { Button , Input } from "antd";
import { IoIosCall } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";
import { FaEllipsisV } from "react-icons/fa";
import { useSharedData } from '../ShareDataContext';
const Header = () => {
  const { name } = useSharedData();
  return (
    <div className='Header'>
        <span className='name-people'>{name}</span>
        <div className='icon'>
            <Button type='primary'><IoIosCall/></Button>
            <Button type='primary'><MdVideoCall/></Button>
            <Button><FaEllipsisV/></Button>
        </div>
    </div>
  )
}

export default Header