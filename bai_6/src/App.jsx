import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaPlus } from "react-icons/fa";
import { Button , Input } from "antd";


function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])
  const handleAddTodo = () => {
      toast.success("Thêm vào danh sách thành công!")
      setTodos([...todos, value]);
      setValue("")
  }
  const list = todos.map((todo) => <li className='item'>{todo}</li>)
  console.log(todos)
  return (
    <div>
      <h1>Tinder</h1>
      <div style={{
        display: 'flex',
        gap: "10px",
        margin: "20px",
        marginTop: "0px"
      }}>
        <Input value={value} onChange={(e) => setValue(e.target.value)}/>
        <Button type='primary' onClick={handleAddTodo} disabled = {!value}>
        <FaPlus />
        </Button>
        <ToastContainer/>
      </div>
      <div className='item-all' style={{
        margin :"20px"
      }}>
        {list}
      </div>
    </div>
  )
}

export default App
