import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  // creating state for movies data
  const [movies, setMovies] = useState([]);

    console.log(movies)

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US"
      )
      .then((respone) => {
        setMovies(respone.data.results);
      })
      .catch((err) => {
        console.error(err + " Cannot fetch API data");
      });
  }, []);

  return (
    <div className="flex justify-evenly flex-wrap gap-8"  >
     {
        movies.map((movieObj)=>(
            <MovieCard movieObject={movieObj} />
        ))
     }
    </div>
  );
}

export default Movies;
