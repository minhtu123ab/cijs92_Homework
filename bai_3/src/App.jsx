import React , {useState}from 'react'

const App = () => {
  const [tinder,setTinder] = useState([]);
  const onAddTinder = () => {
    const name = prompt("add")
    tinder.push(name);
    setTinder([...tinder]);
  };

  return (
    <div>
      <h1>{JSON.stringify(tinder)}</h1>
      <button onClick={onAddTinder}>button</button>
    </div>
  )
}

export default App