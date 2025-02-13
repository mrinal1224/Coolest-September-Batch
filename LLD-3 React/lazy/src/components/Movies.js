import React from 'react'
import { movies } from './movieData'

function Movies() {
  return (
    <div>
        <h1>I am the Movies Component</h1>
        <div>{JSON.stringify(movies)}</div>
    </div>
  )
}

export default Movies