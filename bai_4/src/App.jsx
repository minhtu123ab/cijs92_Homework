import React , {useState}from 'react'

const App = () => {
  const [array,setArray] = useState([]);
  const onClick = () => {
    const valueName = prompt('Nhập Name');
    if(!valueName){
      onClick();
    }
    else{
      const valueAge = +prompt('Nhập Age');
      if(!valueAge){
        onClick();
      }
      else{
        var currentTime = new Date();
        array.push(valueName);
        array.push(valueAge);
        array.push(currentTime);
        setArray([...array]);
      }
    }
  };
  return (
    <div className='all'>  
      <h1>{JSON.stringify(array)}</h1>
      <button onClick={onClick}>Nhập thông tin</button>
    </div>
  )
}

export default App