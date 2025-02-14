import React, { useState, useRef } from 'react'

function Ref() {
    const [input , setInput] = useState('Steve')

   function reset(){
     setInput('')
     refElement.current.focus()
     refElement.current.style.backgroundColor = 'red'
     refElement.current.style.color='blue'

   }

   const refElement = useRef('')
   console.log(refElement)

  return (
    <div>
       <h1>Use Ref</h1> 


       <input ref={refElement} type='text' value={input} onChange={(e)=>setInput(e.target.value)}></input>
       <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Ref