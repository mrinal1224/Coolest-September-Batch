import React, { useEffect, useState, useContext } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";
import { ThemeContext } from "./ThemeContext";  // Import Theme Context

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading , setLoading] = useState(false)

  const { theme } = useContext(ThemeContext);  // Use Theme Context

  const handleNext = () => setPage(page + 1);
  const handlePrevious = () => page > 1 && setPage(page - 1);

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}`
      )
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false)
      })
      .catch((err) => console.error(err + " Cannot fetch API data"));
  }, [page]);

  return (

    <div className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen`}>
    {loading ? (
      <div className="flex justify-center items-center h-screen">
        <span className="loader">Loading...</span> {/* Add a CSS loader */}
      </div>
    ) : (
      <>
        <div className="flex justify-evenly flex-wrap gap-8 py-8">
          {movies.map((movieObj) => (
            <MovieCard key={movieObj.id} movieObject={movieObj} />
          ))}
        </div>
        <Pagination pageNumber={page} previousFn={handlePrevious} nextFn={handleNext} />
      </>
    )}
  </div>
  );
}

export default Movies;
