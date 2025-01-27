import React, { useEffect } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";

function Movies() {
  useEffect(() => {
    axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US"
    ).then((respone)=>{
        console.log(respone.data.results)
    });
  });

  return (
    <div>
      <MovieCard />
    </div>
  );
}

export default Movies;
