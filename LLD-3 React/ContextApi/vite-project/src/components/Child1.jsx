import React from 'react'
import { useContext } from 'react'
import { ParkContext } from './ParkContext'

function Child1() {
    let data = useContext(ParkContext)
  return (
    <div className='children'>Child1 {data.rollerCoaster}</div>
  )
}

export default Child1