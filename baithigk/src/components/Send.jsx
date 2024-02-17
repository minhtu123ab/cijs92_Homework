import React, { useState, useEffect } from 'react';
import { Button, Input } from "antd";
import { IoIosSend } from "react-icons/io";
import { VscSmiley } from "react-icons/vsc";
import { CiImageOn } from "react-icons/ci";
import { TiAttachmentOutline } from "react-icons/ti";
import { IoMdMic } from "react-icons/io";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useSharedData } from '../ShareDataContext';

const Send = () => {
  const { name } = useSharedData();
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(name);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    } else {
      setTodos([]);
    }
  }, [name]);

  const onClick = () => {
    if (!value) {
      alert("Bạn cần nhập nội dung tin nhắn");
      return;
    }
    const newTodos = [...todos, value];
    setTodos(newTodos);
    setValue("");
    localStorage.setItem(name, JSON.stringify(newTodos));
  }

  const list = todos.map((todo, index) => <p key={index} className='item-all'><span className='item'>{todo}</span></p>);

  return (
    <div className='body-send'>
      <div className='body'>
        {list}
      </div>
      <div className='send-all'>
        <Input className='send' placeholder='Type your message...' value={value} onChange={(e) => setValue(e.target.value)} />
        <div className='send-all-luachon'>
          <div className='icon-send'>
            <VscSmiley color='#878DA1' className='icon-send-child' />
            <CiImageOn color='#878DA1' className='icon-send-child' />
            <TiAttachmentOutline color='#878DA1' className='icon-send-child' />
            <IoMdMic color='#878DA1' className='icon-send-child' />
            <IoEllipsisHorizontal color='#878DA1' className='icon-send-child' />
          </div>
          <Button type='primary' onClick={onClick}>Send<IoIosSend size={13} /></Button>
        </div>
      </div>
    </div>
  );
}

export default Send;
