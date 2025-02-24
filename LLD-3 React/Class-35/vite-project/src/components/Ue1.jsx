import { useState , useEffect } from "react";

function Ue1() {
  const [count, setCount] = useState(0);
  const [text , setText] = useState('')

  function increment() {
    setCount(count + 1);
  }

  function handleChange (e){
    setText(e.target.value)
}

//   useEffect(()=>{
//     console.log('Use Effect Runs')
//     document.title = `Button clicked for ${count} times`
//   })// this will only when you mount and when you update anything

//   useEffect(()=>{
//     console.log('Use Effect Runs')
//     document.title = `Button clicked for ${count} times`
//   }, []) // run only on Mounting and not on updation


  useEffect(()=>{
    console.log('Use Effect Runs')
    document.title = `Button clicked for ${count} times`
  }, [count])  // this will only run when you mount and when you update the count

  return (
    <div>
      <h1>This is my Count Value : {count}</h1>
      <h2>This is my Count Value : {count}</h2>
      <button onClick={increment}>Increment</button>
      <input onChange={handleChange} type='text' value={text}/>
      <h1>{text}</h1>
    </div>
  );
}



const h1_React = <h1>I am Heading 1</h1>


const h1_DOM = document.createElement('h1')
h1_DOM.innerText = 'I am Heading 2'

console.log(h1_React)
console.dir(h1_DOM)




export default Ue1;
