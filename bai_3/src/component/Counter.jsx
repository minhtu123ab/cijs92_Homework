import React from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

    const onInsrease = () => {
      setCount(count + 1);
    };
    const onDesrease = () => {
      setCount(count - 1);
    };
    const onMultiple = (value) => {
      setCount(value * count);}
  return (
    <div>      
    <h1>{count}</h1>
    <button onClick={onInsrease}>increase</button>
    <button onClick={onDesrease}>decrease</button>
    <button onClick={() => onMultiple(100)}>multiple</button>
    </div>
  )
}

export default Counter