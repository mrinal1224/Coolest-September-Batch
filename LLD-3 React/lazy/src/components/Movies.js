import React, { useState } from 'react'
// import { movies } from './movieData'

function Movies() {
    const [moviesData , setMoviesData] = useState([])

    function getData(){
     import('./movieData.js').then(function(module){
        setMoviesData(module.movies)
     })
       
    }

  return (
    <div>
        <h1>I am the Movies Component</h1>
        <button onClick={getData}>Get Movies</button>
        <div>{JSON.stringify(moviesData)}</div>
    </div>
  )
}

export default Movies