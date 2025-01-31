import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({addToWatchList , watchList}) {
  // creating state for movies data
  const [movies, setMovies] = useState([]);
  const [page , setPage] = useState(1)



 // pagination next

 const handleNext=()=>{
   setPage(page+1)
 }

 // pagination previous

 const handlePrevious=()=>{
    if(page>1){
        setPage(page-1)
    }

 }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`
      )
      .then((respone) => {
        setMovies(respone.data.results);
      })
      .catch((err) => {
        console.error(err + " Cannot fetch API data");
      });
  }, [page]);

  return (
    <div>
    <div className="flex justify-evenly flex-wrap gap-8"  >
     {
        movies.map((movieObj)=>(
            <MovieCard movieObject={movieObj} finalAddtoWatchList={addToWatchList} watchList={watchList} />
        ))
     }


    </div>
     <Pagination pageNumber={page}  previousFn={handlePrevious} nextFn={handleNext}/>
    </div>
  );
}

export default Movies;
