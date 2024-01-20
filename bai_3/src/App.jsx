import React , {useState}from 'react'

const App = () => {
  const [array,setArray] = useState([]);

  const onClick = () => {
    while(true){
      const valueName = prompt('Nhập Name');
      if(!!valueName){
        const valueAge = +prompt('Nhập Age');
        if(!!valueAge){
          var currentTime = new Date();
          array.push(valueName);
          array.push(valueAge);
          array.push(currentTime);
          setArray([...array]);
          break;
        }
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