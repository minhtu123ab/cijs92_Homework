import React from 'react'
import Sharuka from './conponentsCon/Sharuka'
import Urito from './conponentsCon/Urito'
import Xiang from './conponentsCon/Xiang'
import Abshini from './conponentsCon/Abshini'
import { Button , Input } from "antd";
import Nenko from './conponentsCon/Nenko'
import Shanito from './conponentsCon/Shanito'

const Left = () => {
  return (
    <div className='left'>
        <Input className='timkiem' placeholder='People, Groups And Messages'/>
        <div className='luachon'>
            <span className='span1'>All</span>
            <span>Read</span>
            <span>Unread</span>
        </div>
        <div className='people-all'>
          <Sharuka/>
          <Urito/>
          <Xiang/>
          <Abshini/>
          <Nenko/>
          <Shanito/>
        </div>
    </div>
  )
}

export default Left