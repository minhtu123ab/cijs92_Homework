# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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

const App = () => {
let [person,setPerson] = useState({
name: 'John',
age: 18,
});

const onIncreaseAge = () => {
person.age++;
setPerson({...person, age: person.age++});
};
return (

<div>
<h1>{JSON.stringify(person)}</h1>
<button onClick={onIncreaseAge}>button</button>
</div>
)
}

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

import React , {useState}from 'react'

const App = () => {
const [person,setPerson] = useState({
name: 'Mindx',
age : 20,
});

const onChangeName = () => {
const value = prompt('Change Name');
setPerson({...person, name: value});
};
const onChangeAge = () => {
const value = +prompt('Change Age');
setPerson({...person, age: value});
};

return (
<div className='all'>  
 <h1>{person.name}</h1>
<h1>{person.age}</h1>
<button onClick={onChangeName}>Change Name</button>
<button onClick={onChangeAge}>Change Age</button>
</div>
)
}

export default App
