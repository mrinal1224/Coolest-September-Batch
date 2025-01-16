import React, { useState } from 'react'
import { use } from 'react'


function Form() {
  const[name ,setName] = useState('')
  const[email ,setEmail] = useState('')
  const [password , setPassword] = useState('')

  function handleSubmit(e){
     e.preventDefault()
     console.log(name)
     console.log(email)
     console.log(password)
  }

  return (
    <form onSubmit={handleSubmit}>
       <label>Name :</label>
       <input  type='text'  onChange={(e)=>setName(e.target.value)}/>

       <label>Email :</label>
       <input type='email'  onChange={(e)=>setEmail(e.target.value)}/>

       <label>password :</label>
       <input type='password'  onChange={(e)=>setPassword(e.target.value)}/>

       <button type='submit'>Submit From</button>

    </form>
  )
}

export default Form