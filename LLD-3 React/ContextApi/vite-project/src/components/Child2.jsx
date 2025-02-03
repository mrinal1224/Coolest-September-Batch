import React from 'react'
import { useContext } from 'react'
import { ParkContext } from './ParkContext'

function Child2() {
    let data = useContext(ParkContext)
  return (
    <div className='children'>Child2 {data.merryGoRound}</div>
  )
}

export default Child2