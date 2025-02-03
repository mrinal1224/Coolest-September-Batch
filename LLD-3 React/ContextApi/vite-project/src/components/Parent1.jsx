import React from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import { useContext } from 'react'
import { ParkContext } from './ParkContext'



function Parent1() {
let data = useContext(ParkContext)
console.log(data)
  return (
    <>
    <div className='parent'>Parent1 {data.parkName} </div>
       <Child1  />
       <Child2  />
    </>
  )
}

export default Parent1