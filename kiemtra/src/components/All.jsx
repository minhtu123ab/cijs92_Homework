import React, { useState, useEffect } from 'react'
import { Input, Button } from "antd"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const All = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState(() => JSON.parse(localStorage.getItem('list')) || []);
  const [completed, setCompleted] = useState(() => JSON.parse(localStorage.getItem('completed')) || []);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed]);

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
    const newList = list.filter(item => item.id !== id);
    const completedItem = list.find(item => item.id === id);

    if (completedItem) {
      setCompleted(prevCompleted => [...prevCompleted, { ...completedItem, completed: true }]);
      setList(newList);
    }
  };

  return (
    <div className="all">
      <ToastContainer/>
      <form className='btn-input' onSubmit={onSubmit}>
        <Input 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          placeholder='add details'
          // Để nhận phím Enter, không cần thay đổi gì ở đây
        />
        <Button onClick={onSubmit} type='primary'>Add</Button>
      </form>
      <div className="list">
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
      <div className="completed">
        {completed.map((item) => (
          <div key={item.id} className='option-all'>
            <input
              className='option'
              type='checkbox'
              id={`option${item.id}`}
              checked={item.completed}
              readOnly 
            />
            <label htmlFor={`option${item.id}`}>{item.text}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default All;
