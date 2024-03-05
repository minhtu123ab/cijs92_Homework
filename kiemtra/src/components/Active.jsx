import React, { useState, useEffect } from 'react';
import { Input, Button } from "antd";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Active = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(() => JSON.parse(localStorage.getItem('list')) || []);
  const [completed, setCompleted] = useState(() => JSON.parse(localStorage.getItem('completed')) || []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [list, completed]);

  const onSubmit = (e) => {
    e.preventDefault(); 
    if (!value.trim()){
      toast.error("Không được để trống");
      return;
    }; 
    const newItem = { id: Date.now(), text: value, completed: false };
    setList(prevList => [...prevList, newItem]);
    setValue("");
  };

  const handleCheck = (id) => {
    const newList = list.filter(item => {
      if (item.id === id) {
        setCompleted(prevCompleted => [...prevCompleted, { ...item, completed: true }]);
        return false;
      }
      return true;
    });

    setList(newList);
  };

  return (
    <div className='active-all'>
      <ToastContainer/>
      <form className='btn-input' onSubmit={onSubmit}>
        <Input 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          placeholder='add details'
        />
        <Button type='primary' onClick={onSubmit}>Add</Button>
      </form>
      {list.map((item) => (
        <div key={item.id} className='option-all'>
          <input
            className='option'
            type='checkbox'
            id={`option${item.id}`}
            checked={item.completed}
            onChange={() => handleCheck(item.id)}
          />
          <label htmlFor={`option${item.id}`}>{item.text}</label>
        </div>
      ))}
    </div>
  );
}

export default Active;
