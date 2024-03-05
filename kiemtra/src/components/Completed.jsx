import { Button } from 'antd';
import React, { useState, useEffect } from 'react';

const Completed = () => {
  const [completed, setCompleted] = useState(() => JSON.parse(localStorage.getItem('completed')) || []);

  useEffect(() => {
    localStorage.setItem('completed', JSON.stringify(completed));
  }, [completed]);

  const handleDelete = (id) => {
    const newCompleted = completed.filter(item => item.id !== id);
    setCompleted(newCompleted);
  };

  const handleDeleteAll = () => {
    setCompleted([]);
  };

  return (
    <div className='completed'>
      {completed.map((item) => (
        <div key={item.id} className='option-all-completed'>
          <div className='op-all'>
            <input
              className='option'
              type='checkbox'
              id={`option${item.id}`}
              checked={item.completed}
              readOnly 
            />
            <label className='nameop' htmlFor={`option${item.id}`}>{item.text}</label>
          </div>
          <Button 
            className='btn-delete' 
            type='primary' 
            style={{ backgroundColor: "red" }}
            onClick={() => handleDelete(item.id)} // Thêm sự kiện onClick để xử lý việc xóa
          >
            Delete
          </Button>
        </div>
      ))}
      <Button 
        className='btn-delete-all' 
        type='primary' 
        style={{ backgroundColor: "red" }}
        onClick={handleDeleteAll} // Thêm sự kiện onClick để xử lý việc xóa tất cả
      >
        Delete All
      </Button>
    </div>
  );
}

export default Completed;
